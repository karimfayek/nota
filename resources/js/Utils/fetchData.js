export async function fetchData(apiEndpoint, options = {}) {
    try {
        const response = await fetch(apiEndpoint, {
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                // Add an authorization header if needed
               // 'Authorization': `Bearer ${localStorage.getItem('authToken')}`, 
            },
            ...options,
        });

        if (!response.ok) {
            throw new Error(`Error: ${response.status} - ${response.statusText}`);
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Failed to fetch data:", error.message);
        throw error; // Rethrow the error to handle it in components
    }
}