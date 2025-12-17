
const LOCATIONIQ_API_KEY = import.meta.env.VITE_LOCATIONIQ_API_KEY;
const BASE_URL = "https://us1.locationiq.com/v1";

export const searchAddress = async (query) => {
    if (!query || query.length < 3) {
        return [];
    }

    try {
        const response = await fetch(
            `${BASE_URL}/search?key=${LOCATIONIQ_API_KEY}&q=${encodeURIComponent(
                query
            )}&format=json&limit=5`
        );

        if (!response.ok) {
            throw new Error("Geocoding request failed");
        }

        const data = await response.json();
        return data.map((item) => ({
            displayName: item.display_name,
            latitude: item.lat,
            longitude: item.lon,
            address: item.address,
        }));
    } catch (error) {
        console.error("Geocoding error:", error);
        return [];
    }
};

export const reverseGeocode = async (lat, lon) => {
    try {
        const response = await fetch(
            `${BASE_URL}/reverse?key=${LOCATIONIQ_API_KEY}&lat=${lat}&lon=${lon}&format=json`
        );

        if (!response.ok) {
            throw new Error("Reverse geocoding failed");
        }

        const data = await response.json();
        return {
            displayName: data.display_name,
            address: data.address,
        };
    } catch (error) {
        console.error("Reverse geocoding error:", error);
        return null;
    }
};
