import { useEffect } from 'react';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Head, Link, useForm } from '@inertiajs/react';
import LocationPicker from '@/Components/LocationPicker';
import { useSelector } from 'react-redux';

export default function Register({ states }) {

    const translations = useSelector((state) => state.translations.translations);
    const { data, setData, post, processing, errors, reset } = useForm({
        name: '',
        email: '',
        address: '',
        phone: '',
        city: '', // Add city to the form state
        state: '',
        location: '',
        lat: '',
        lng: '',        
        district: '',
        building: '',
        mktba_name: '',
        password: '',
        password_confirmation: '',
    });
    const handleLocationSelect = async (location) => {
        setData((prevData) => ({
            ...prevData, // Preserve existing state
            lat: location.lat, // Update lat
            lng: location.lng, // Update lng
          }));
    };

    useEffect(() => {
        return () => {
            reset('password', 'password_confirmation');
        };
    }, []);

    const submit = (e) => {
        e.preventDefault();

        post(route('seller.register'));
    };

    return (
        <GuestLayout>
            <Head title="Register" />
            <div className="flex justify-between mb-7.5"><div className=""><h2 className="font-outfit font-medium text-4xl  mt-2 ">تسجيل كـ مكتبة </h2></div></div>
            <form onSubmit={submit} className="grid grid-cols-1 sm:grid-cols-2 gap-4 container">
                <div className="mt-4">
                    <InputLabel htmlFor="name" value={translations.name} />

                    <TextInput
                        id="name"
                        name="name"
                        value={data.name}
                        className="mt-1 block w-full"
                        autoComplete="name"
                        isFocused={true}
                        onChange={(e) => setData('name', e.target.value)}
                        required
                    />

                    <InputError message={errors.name} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="mktba_name" value={translations.mktba_name} />

                    <TextInput
                        id="mktba_name"
                        name="mktba_name"
                        value={data.mktba_name}
                        className="mt-1 block w-full"
                        autoComplete="mktba_name"
                        onChange={(e) => setData('mktba_name', e.target.value)}
                        required
                    />

                    <InputError message={errors.mktba_name} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="email" value={translations.email} />

                    <TextInput
                        id="email"
                        type="email"
                        name="email"
                        value={data.email}
                        className="mt-1 block w-full"
                        autoComplete="email"
                        onChange={(e) => setData('email', e.target.value)}
                        required
                    />

                    <InputError message={errors.email} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="phone"value={translations.phone} />

                    <TextInput
                        id="phone"
                        type="text"
                        name="phone"
                        value={data.phone}
                        className="mt-1 block w-full"
                        autoComplete="phone"
                        onChange={(e) => setData('phone', e.target.value)}
                        required
                    />

                    <InputError message={errors.phone} className="mt-2" />
                </div>
               
                <div className='mt-4'>
                    <label htmlFor="selectField" className="block text-sm font-medium text-gray-700">
                    {translations.city}
                    </label>
                    <select
                        className="mt-1 block w-full"
                        value={data.city}
                        onChange={(e) => setData('city', e.target.value)}
                    >
                        <option value="" disabled selected>{translations.select}</option>
                        {states && states.map((city) => (

                            <option key={city.id} value={city.id}>{city.name2}</option>
                        ))}

                        {/* Add more options as needed */}
                    </select>
                    {errors.city && <span>{errors.city}</span>}
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="district" value={translations.district} />

                    <TextInput
                        id="district"
                        type="text"
                        name="district"
                        value={data.district}
                        className="mt-1 block w-full"
                        autoComplete="district"
                        onChange={(e) => setData('district', e.target.value)}
                        required
                    />

                    <InputError message={errors.district} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="street" value={translations.street_name} />

                    <TextInput
                        id="street"
                        type="text"
                        name="street"
                        value={data.street}
                        className="mt-1 block w-full"
                        autoComplete="street"
                        onChange={(e) => setData('street', e.target.value)}
                        required
                    />

                    <InputError message={errors.street} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="building" value={translations.building_nu} />

                    <TextInput
                        id="building"
                        type="number"
                        name="building"
                        value={data.building}
                        className="mt-1 block w-full"
                        autoComplete="building"
                        onChange={(e) => setData('building', e.target.value)}
                        required
                    />

                    <InputError message={errors.building} className="mt-2" />
                </div>
                <div className="mt-4">
                    <InputLabel htmlFor="address" value={translations.complete_address} />

                    <TextInput
                        id="address"
                        type="text"
                        name="address"
                        value={data.address}
                        className="mt-1 block w-full"
                        autoComplete="address"
                        onChange={(e) => setData('address', e.target.value)}
                        required
                    />

                    <InputError message={errors.address} className="mt-2" />
                </div>
                <div className="mb-4">
                    <LocationPicker onLocationSelect={handleLocationSelect} />
                    <InputError message={errors.lat} className="mt-2" />
                </div>
               
                <div className="mt-4">
                    <InputLabel htmlFor="password" value={translations.password} />

                    <TextInput
                        id="password"
                        type="password"
                        name="password"
                        value={data.password}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password', e.target.value)}
                        required
                    />

                    <InputError message={errors.password} className="mt-2" />
                </div>

                <div className="mt-4">
                    <InputLabel htmlFor="password_confirmation"  value={translations.passwordconfirm} />

                    <TextInput
                        id="password_confirmation"
                        type="password"
                        name="password_confirmation"
                        value={data.password_confirmation}
                        className="mt-1 block w-full"
                        autoComplete="new-password"
                        onChange={(e) => setData('password_confirmation', e.target.value)}
                        required
                    />

                    <InputError message={errors.password_confirmation} className="mt-2" />
                </div>

                <div className="col-span-1 sm:col-span-2">

                    <div className="border-t mt-4 pb-3 pt-10 text-center">
                        <Link
                            href={route('login')}
                            className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                        >
                            {translations.already_registered} ?
                        </Link>

                        <PrimaryButton className="ms-4" disabled={processing}>
                            {translations.register}
                        </PrimaryButton>
                    </div>
                </div>
            </form>
        </GuestLayout>
    );
}
