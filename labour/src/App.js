import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { logout, updateUser } from "./redux/slice/userActions";
import Popup from "./components/Popup";
import Dashboard from "./screens/Dashboard";
import Order from "./screens/Order";
import CalendarPage from "./screens/CalendarPage";
import OrdersMap from "./screens/OrdersMap";
import Complain from "./screens/Complain";
import Review from "./screens/Review";

const Routing = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Routes>
      {/* <Route exact path="/" element={<Home />} /> */}
      <Route
        exact
        path="/"
        element={user ? <Dashboard /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/orders"
        element={user ? <Order /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/calendar"
        element={user ? <CalendarPage /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/trackingorder"
        element={user ? <OrdersMap /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/complain"
        element={user ? <Complain /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/review"
        element={user ? <Review /> : <Navigate to="/login" />}
      />

      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  );
};

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  useEffect(() => {
    const fetchUpdatedUserDetails = async () => {
      try {
        // Fetch updated user details from the server
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/labour/laborers/${user._id}`
        );

        if (response.ok) {
          const updatedUserDetails = await response.json();

          // Update user details in the Redux store
          dispatch(updateUser(updatedUserDetails));
        }
      } catch (error) {
        console.error("Error fetching updated user details:", error);
      }
    };

    // Fetch updated user details every second
    const intervalId = setInterval(fetchUpdatedUserDetails, 10000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [dispatch]);

  // Check the token validity based on the stored expiration time
  const isTokenValid = () => {
    const accessToken = localStorage.getItem("jwt");
    const expirationTime = localStorage.getItem("expirationTime");

    if (!accessToken || !expirationTime) {
      return false;
    }

    // Check if the current time is before the stored expiration time
    return Date.now() < parseInt(expirationTime, 10);
  };

  useEffect(() => {
    const checkTokenValidity = () => {
      const accessToken = localStorage.getItem("jwt");
      if (!accessToken) {
        return;
      }

      try {
        if (!isTokenValid()) {
          const refreshToken = localStorage.getItem("refreshToken");
          console.log(`Refresh token is being checked everytime`);
          if (!refreshToken) {
            // No refresh token, perform logout
            dispatch(logout());
          } else {
            // Attempt to refresh token
            fetch(process.env.REACT_APP_API_URL + "/api/user/refresh-token", {
              method: "POST",
              headers: {
                "Content-Type": "application/json",
              },
              body: JSON.stringify({ refreshToken }),
            })
              .then((res) => res.json())
              .then((data) => {
                if (data.accessToken) {
                  // Refresh successful, update access token
                  localStorage.setItem("jwt", data.accessToken);
                } else {
                  // Refresh failed, perform logout
                  dispatch(logout());
                }
              })
              .catch((err) => {
                console.error("Error refreshing token:", err);
                dispatch(logout());
              });
          }
        }
      } catch (error) {
        console.error("Error decoding token:", error);
        dispatch(logout());
      }
    };

    checkTokenValidity();
  }, [dispatch]);

  return (
    <>
      <Router>
        <Popup />
        <Routing />
      </Router>
    </>
  );
}

export default App;
