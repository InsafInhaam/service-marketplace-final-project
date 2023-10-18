import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

const ChangeLocation = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [selectedAddress, setSelectedAddress] = useState("");

  const handleSearchChange = async (e) => {
    const query = e.target.value;
    setSearchQuery(query);

    // Perform address search
    if (query.trim() !== "") {
      try {
        const results = await searchAddress(query);
        setSearchResults(results);
      } catch (error) {
        console.error("Error searching address:", error);
      }
    } else {
      setSearchResults([]);
    }
  };

  const handleAddressSelect = (address) => {
    setSearchQuery(address.display_name);
    setSelectedAddress(address.display_name);
    setSearchResults([]); // Clear search results
    // Save the selected address to the user's database table...
    updateUserLocation(
      user._id,
      address.display_name,
      address.latitude,
      address.longitude
    );
  };

  const updateUserLocation = async (userId, address, latitude, longitude) => {
    try {
      const response = await fetch(
        process.env.REACT_APP_API_URL + `/api/user/updateLocation/${userId}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ address, latitude, longitude }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        console.log("User location and address updated:", data);
      } else {
        console.error("Error updating user location and address:", data.error);
      }
    } catch (error) {
      console.error("Error updating user location and address:", error);
    }
  };

  const searchAddress = async (query) => {
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
      query
    )}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok && data.length > 0) {
        return data.map((result) => ({
          display_name: result.display_name,
          latitude: parseFloat(result.lat),
          longitude: parseFloat(result.lon),
        }));
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching search results:", error);
      return [];
    }
  };

  const getCurrentLocation = () => {
    navigator.geolocation.getCurrentPosition(
      async (position) => {
        const { latitude, longitude } = position.coords;
        try {
          const results = await searchAddressByCoordinates(latitude, longitude);
          if (results.length > 0) {
            setSearchQuery(results[0].display_name);
            setSelectedAddress(results[0].display_name);

            updateUserLocation(
                user._id,
                results[0].display_name,
                results[0].latitude,
                results[0].longitude
              );
          }
        } catch (error) {
          console.error("Error fetching address from coordinates:", error);
        }
      },
      (error) => {
        console.error("Error getting current location:", error.message);
      }
    );
  };

  const searchAddressByCoordinates = async (latitude, longitude) => {
    const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok && data.display_name) {
        return [
          {
            display_name: data.display_name,
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
          },
        ];
      } else {
        return [];
      }
    } catch (error) {
      console.error("Error fetching address from coordinates:", error);
      return [];
    }
  };

  return (
    <div className="location-search-div">
      <div className="location-input-get-location">
        <input
          type="text"
          placeholder="Choose your location"
          className="sf-select-box form-control sf-form-control bs-select-hidden navbar-city-field mb-2"
          value={searchQuery}
          onChange={handleSearchChange}
        />
        <button onClick={getCurrentLocation} className="site-button py-1 px-3"><i className="fa-solid fa-location-crosshairs"></i> Get Current Location</button>
      </div>
      {searchResults.length > 0 && (
        <ul className="search-results shadow-5">
          {searchResults.map((result) => (
            <li
              key={result.display_name}
              onClick={() => handleAddressSelect(result)}
            >
              {result.display_name}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ChangeLocation;
