import React, { useEffect, useRef, useState } from 'react';
import { MapContainer, TileLayer, Marker, useMapEvents } from 'react-leaflet';

import { useSelector } from 'react-redux';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

// Fix for default marker icons in Leaflet
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

const LocationPicker = ({ onLocationSelect }) => {
  
  const translations = useSelector((state) => state.translations.translations);
    const [location, setLocation] = useState({ lat: 30.0444, lng: 31.2357 });  // Default location (London)
  const [address, setAddress] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);
  const mapRef = useRef(null);
  // Reverse geocode coordinates to get address
  const reverseGeocode = async (lat, lng) => {
    try {
      const response = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
      );
      const data = await response.json();
      if (data.display_name) {
        setAddress(data.display_name); // Set the address
      } else {
        setAddress('Address not found');
      }
    } catch (error) {
      console.error('Error fetching address:', error);
      setAddress('Unable to fetch address');
    }
  };

  // Get user's current location using Geolocation API
  const handleGetCurrentLocation = async () => {
    if (!navigator.geolocation) {
      alert('Geolocation is not supported by your browser. Please select a location manually.');
      return;
    }

    try {
      const permissionStatus = await navigator.permissions.query({ name: 'geolocation' });
      if (permissionStatus.state === 'denied') {
        alert('Location access was denied. Please allow location access in your browser settings or select a location manually.');
        return;
      }

      // Get current position
      navigator.geolocation.getCurrentPosition(
        async (position) => {
          const { latitude, longitude } = position.coords;
          setLocation({ lat: latitude, lng: longitude });
          onLocationSelect({ lat: latitude, lng: longitude }); // Pass location to parent
          await reverseGeocode(latitude, longitude); // Get address for the current location
           // Fly to the new location
           if (mapRef.current) {
            mapRef.current.flyTo([latitude, longitude], 13);
          }
        },
        (error) => {
          console.error('Error getting location:', error);
          switch (error.code) {
            case error.PERMISSION_DENIED:
              alert('Location access was denied. Please allow location access in your browser settings or select a location manually.');
              break;
            case error.POSITION_UNAVAILABLE:
              alert('Location information is unavailable. Please select a location manually.');
              break;
            case error.TIMEOUT:
              alert('The request to get your location timed out. Please try again or select a location manually.');
              break;
            default:
              alert('An unknown error occurred while retrieving your location. Please select a location manually.');
              break;
          }
        }
      );
    } catch (error) {
      console.error('Error checking location permission:', error);
      alert('An error occurred while checking location permission. Please select a location manually.');
    }
  };
  // Fetch address suggestions as the user types
  const handleSearchInputChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    if (query.length > 2) {
      try {
        const response = await fetch(
          `https://nominatim.openstreetmap.org/search?format=json&q=${query}&limit=5`
        );
        const data = await response.json();
        setSearchResults(data);
      } catch (error) {
        console.error('Error fetching address suggestions:', error);
        setSearchResults([]);
      }
    } else {
      setSearchResults([]);
    }
  };
  // Event listener for drag and dragend
  const MapEvents = () => {
    const map = useMapEvents({
      drag: () => {
        const center = map.getCenter();
        setLocation({ lat: center.lat, lng: center.lng }); // Update marker position in real-time
      },
      dragend: () => {
        const center = map.getCenter();
        const newLocation = { lat: center.lat, lng: center.lng };
        setLocation(newLocation);
        onLocationSelect(newLocation); // Pass location to parent
        reverseGeocode(center.lat, center.lng); // Get address for the new location
      },
      zoomend: () => {
        const center = map.getCenter();
        const newLocation = { lat: center.lat, lng: center.lng };
        setLocation(newLocation);
        onLocationSelect(newLocation); // Pass location to parent
        reverseGeocode(center.lat, center.lng); // Get address for the new location
      },
    });
     // Store the map instance in the ref
     useEffect(() => {
        mapRef.current = map;
      }, [map]);
    return null;
  };
// Handle address selection from search results
const handleAddressSelect = (result) => {
    const { lat, lon, display_name } = result;
    setLocation({ lat: parseFloat(lat), lng: parseFloat(lon) });
    setAddress(display_name);
    setSearchQuery(display_name);
    setSearchResults([]); // Clear search results
    onLocationSelect({ lat: parseFloat(lat), lng: parseFloat(lon) }); // Pass location to parent

    // Fly to the selected location
    if (mapRef.current) {
      mapRef.current.flyTo([lat, lon], 13);
    }
  };


  return (
    <div className='border hover:border-gray-800 p-3'>
      {/* Button to open modal for location selection */}
      <button
        type="button" // Prevent form submission
        onClick={() => setIsModalOpen(true)}
        className="mb-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700"
      >
       {translations.select_location}
      </button>

      {/* Modal for location selection */}
      {isModalOpen && (
         <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 overflow-y-auto" style={{ zIndex:51 }}>
         <div className="bg-white rounded-lg p-6 w-full max-w-4xl max-h-[97vh] overflow-y-auto">
            <h2 className="text-lg font-semibold mb-4"> {translations.select_location}</h2>

            
   {/* Button to get current location */}
   <button
              type="button"
              onClick={handleGetCurrentLocation}
              className="mb-4 px-4 py-2 bg-green-600 text-white rounded-md hover:bg-green-700"
            >
              {translations.use_current_location}
            </button>

            {/* Search Input for Address Lookup */}
            <div className="mb-4">
              <input
                type="text"
                value={searchQuery}
                onChange={handleSearchInputChange}
                placeholder={translations.search_for_address}
                className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              />
              {/* Display address suggestions */}
              {searchResults.length > 0 && (
                <ul className="mt-2 bg-white border border-gray-300 rounded-md shadow-sm">
                  {searchResults.map((result, index) => (
                    <li
                      key={index}
                      onClick={() => handleAddressSelect(result)}
                      className="px-3 py-2 cursor-pointer hover:bg-gray-100"
                    >
                      {result.display_name}
                    </li>
                  ))}
                </ul>
              )}
            </div>
            {/* Map Container */}
            <div style={{ height: '400px', width: '100%' }}>
              <MapContainer
                center={[location.lat, location.lng]}
                zoom={20}
                style={{ height: '100%', width: '100%' }}
                whenCreated={(mapInstance) => (map = mapInstance)} // Store the map instance
              >
                <TileLayer
                  url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                />
                <Marker position={[location.lat, location.lng]} />
                <MapEvents /> {/* Add event listeners */}
              </MapContainer>
            </div>

            {/* Display selected location address */}
            <div className="mt-4">
              <p className="text-sm text-gray-700">
                {translations.selected_location} <strong>{address || 'No address selected'}</strong>
              </p>
            </div>

            {/* Close Modal Button */}
            <button
              type="button"
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700"
            >
              {translations.close}
            </button>
          </div>
        </div>
      )}

      {/* Display selected location address outside the modal */}
      <div className="mt-4">
        <p className="text-sm text-gray-700">
          Selected Location: <strong>{address || 'No address selected'}</strong>
        </p>
      </div>
    </div>
  );
};

export default LocationPicker;