import { useState, useEffect, useRef } from "react";
import { searchAddress } from "../../lib/geocoding";
import "./addressSearch.scss";

function AddressSearch({ onSelectAddress }) {
    const [query, setQuery] = useState("");
    const [suggestions, setSuggestions] = useState([]);
    const [loading, setLoading] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false);
    const searchRef = useRef(null);


    useEffect(() => {
        if (query.length < 3) {
            setSuggestions([]);
            return;
        }

        const timer = setTimeout(async () => {
            setLoading(true);
            const results = await searchAddress(query);
            setSuggestions(results);
            setLoading(false);
            setShowDropdown(true);
        }, 500);

        return () => clearTimeout(timer);
    }, [query]);


    useEffect(() => {
        const handleClickOutside = (event) => {
            if (searchRef.current && !searchRef.current.contains(event.target)) {
                setShowDropdown(false);
            }
        };

        document.addEventListener("mousedown", handleClickOutside);
        return () => document.removeEventListener("mousedown", handleClickOutside);
    }, []);

    const handleSelect = (location) => {
        setQuery(location.displayName);
        setShowDropdown(false);
        onSelectAddress({
            address: location.displayName,
            latitude: location.latitude,
            longitude: location.longitude,
        });
    };

    return (
        <div className="addressSearch" ref={searchRef}>
            <input
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onFocus={() => suggestions.length > 0 && setShowDropdown(true)}
                placeholder="Search for an address or location..."
                className="addressInput"
            />

            {loading && <div className="loading">Searching...</div>}

            {showDropdown && suggestions.length > 0 && (
                <ul className="suggestions">
                    {suggestions.map((location, index) => (
                        <li
                            key={index}
                            onClick={() => handleSelect(location)}
                            className="suggestionItem"
                        >
                            <span className="locationIcon">📍</span>
                            <span className="locationName">{location.displayName}</span>
                        </li>
                    ))}
                </ul>
            )}

            {showDropdown && !loading && query.length >= 3 && suggestions.length === 0 && (
                <div className="noResults">No locations found</div>
            )}
        </div>
    );
}

export default AddressSearch;
