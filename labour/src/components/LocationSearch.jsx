// import React, { useState } from "react";

// const LocationSearch = () => {
//   const [searchQuery, setSearchQuery] = useState("");
//   const [searchResults, setSearchResults] = useState([]);
//   const [address, setAddress] = useState("");
//   const [latitude, setLatitude] = useState([]);
//   const [longitude, setLongitude] = useState([]);

//   const handleSearchChange = async (e) => {
//     const query = e.target.value;
//     setSearchQuery(query);

//     // Perform address search
//     if (query.trim() !== "") {
//       try {
//         const results = await searchAddress(query);
//         setSearchResults(results);
//       } catch (error) {
//         console.error("Error searching address:", error);
//       }
//     } else {
//       setSearchResults([]);
//     }
//   };

//   const searchAddress = async (query) => {
//     const apiUrl = `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
//       query
//     )}`;

//     try {
//       const response = await fetch(apiUrl);
//       const data = await response.json();

//       if (response.ok && data.length > 0) {
//         return data.map((result) => ({
//           display_name: result.display_name,
//           latitude: parseFloat(result.lat),
//           longitude: parseFloat(result.lon),
//         }));
//       } else {
//         return [];
//       }
//     } catch (error) {
//       console.error("Error fetching search results:", error);
//       return [];
//     }
//   };

//   const handleAddressSelect = (address) => {
//     // Use the selected address data as needed
//     console.log("Selected Address:", address);
//     setAddress(address.display_name);
//     setLatitude(address.latitude);
//     setLongitude(address.longitude);
//   };

//   return (
//     <div className="form-group first mt-3">
//       <label htmlFor="address">Address</label>
//       <input
//         type="text"
//         className="form-control"
//         placeholder="Search for an address..."
//         value={searchQuery}
//         onChange={handleSearchChange}
//       />
//       <ul>
//         {searchResults.map((result) => (
//           <li
//             key={result.display_name}
//             onClick={() => handleAddressSelect(result)}
//           >
//             {result.display_name}
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// };

// export default LocationSearch;
