import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";
// import "react-leaflet-popup/src/react-leaflet-popup.css";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { useSelector } from "react-redux";
// import "react-leaflet-popup/dist/index.css";
// import "leaflet/dist/leaflet.css";
// import "https://unpkg.com/react-leaflet-popup/dist/react-leaflet-popup.css";

const OrdersMap = () => {
  const labourer = useSelector((state) => state.user.user);

  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/orders/in-progress/${labourer._id}`
        );
        const result = await response.json();
        if (result.success) {
          setOrders(result.orders);
        } else {
          console.error("Error fetching orders:", result.message);
        }
      } catch (error) {
        console.error("Error fetching orders:", error);
      }
    };

    fetchData();
  }, []);

  const customIcon = new L.Icon({
    iconUrl: "/location-pin.gif", // replace with your custom icon
    iconSize: [32, 32],
    iconAnchor: [16, 32],
    popupAnchor: [0, -32],
  });

  return (
    <div>
      <header>
        <Sidebar />
        <Navbar />
      </header>
      <main style={{ marginTop: "58px" }}>
        <div className="container">
          <div class="row">
            <MapContainer
              center={[6.4447452, 80.0168602]}
              zoom={12}
              style={{ height: "500px" }}
            >
              <TileLayer
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
              />
              {orders.map((order) => (
                <Marker
                  key={order._id}
                  position={[order.latitude, order.longitude]}
                  icon={customIcon}
                >
                  <Popup>
                    <div>
                      <h3>{order.userId.name}</h3>
                      <p>Order ID: {order._id}</p>
                      <p>Service: {order.cartItems[0].itemId.name}</p>
                      {/* Add more details as needed */}
                    </div>
                  </Popup>
                </Marker>
              ))}
            </MapContainer>
          </div>
        </div>
      </main>
    </div>
  );
};

export default OrdersMap;
