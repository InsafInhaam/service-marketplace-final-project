// import React, { useState, useEffect } from "react";

// const LabourerRegistration = () => {
//   const [location, setLocation] = useState({ latitude: 0, longitude: 0 });
//   const [address, setAddress] = useState('');

//   useEffect(() => {
//     const fetchLocation = async () => {
//       try {
//         // Replace this with your actual method to get location
//         const fetchedLocation = await getLocation(); // Assuming this returns an object { latitude, longitude }
//         setLocation(fetchedLocation);

//         // Fetch address based on latitude and longitude from OpenStreetMap Nominatim API
//         const fetchedAddress = await getAddressFromCoordinates(
//           fetchedLocation.latitude,
//           fetchedLocation.longitude
//         );
//         setAddress(fetchedAddress);
//       } catch (error) {
//         console.error('Error fetching location:', error);
//       }
//     };

//     fetchLocation();
//   }, []); // Run only once on component mount

//   const getLocation = async () => {
//     return new Promise((resolve) => {
//       navigator.geolocation.getCurrentPosition((position) => {
//         resolve({
//           latitude: position.coords.latitude,
//           longitude: position.coords.longitude,
//         });
//       });
//     });
//   };

//   const getAddressFromCoordinates = async (latitude, longitude) => {
//     const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=json&lat=${latitude}&lon=${longitude}&zoom=18&addressdetails=1`;

//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();

//       if (response.ok && data.display_name) {
//         return data.display_name;
//       } else {
//         return 'Address not found';
//       }
//     } catch (error) {
//       console.error('Error fetching address:', error);
//       return 'Error fetching address';
//     }
//   };

//   const handleLabourerRegistration = () => {
//     // Use the obtained latitude and longitude for labourer registration
//     console.log("Latitude:", location.latitude);
//     console.log("Longitude:", location.longitude);

//     // Add your registration logic here...
//   };

//   return (
//     <div>
//       {/* Display latitude and longitude for testing */}
//       <p>Latitude: {location.latitude}</p>
//       <p>Longitude: {location.longitude}</p>
//       <p>Address: {address}</p>

//       {/* Your registration form */}
//       <form>
//         {/* Include other registration fields */}
//         <button type="button" onClick={handleLabourerRegistration}>
//           Register Labourer
//         </button>
//       </form>
//     </div>
//   );
// };

// export default LabourerRegistration;

import React, { useState } from 'react';

const LabourerRegistration = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState([]);

  const handleSearch = async () => {
    try {
      // Fetch coordinates based on the search query from OpenStreetMap Nominatim API
      const results = await searchAddress(searchQuery);
      setSearchResults(results);
    } catch (error) {
      console.error('Error searching address:', error);
    }
  };

  const searchAddress = async (query) => {
    const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(query)}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();

      if (response.ok && data.length > 0) {
        return data.map((result) => ({
          displayName: result.display_name,
          latitude: parseFloat(result.lat),
          longitude: parseFloat(result.lon),
        }));
      } else {
        return [];
      }
    } catch (error) {
      console.error('Error fetching search results:', error);
      return [];
    }
  };

  return (
    <div>
      <input
        type="text"
        placeholder="Enter address..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      <ul>
        {searchResults.map((result) => (
          <li key={`${result.latitude}-${result.longitude}`}>
            <p>Address: {result.displayName}</p>
            <p>Latitude: {result.latitude}</p>
            <p>Longitude: {result.longitude}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default LabourerRegistration;
