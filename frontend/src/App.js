import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Register from "./screens/Register";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
  useNavigate,
} from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import Popup from "./components/Popup";
import Categories from "./screens/Categories";
import CategoryServiceProvider from "./screens/CategoryServiceProvider";
import LabourProfile from "./screens/LabourProfile";
import ForgetPassword from "./screens/ForgetPassword";
import Search from "./screens/Search";
import Profile from "./screens/Profile";
import ResetPassword from "./screens/ResetPassword";
import CityPage from "./screens/CityPage";
import ServiceListing from "./screens/ServiceListing";
import Cart from "./screens/Cart";
import { useEffect, useState } from "react";
import { logout, updateUser } from "./redux/slice/userActions";
import Orders from "./screens/Orders";
import LabourerRegistration from "./unused/LabourerRegistration";
// import jwt from 'jsonwebtoken';

const Routing = () => {
  const user = useSelector((state) => state.user.user);

  // const navigate = useNavigate();

  // useEffect(() => {
  //   // Check if the user is not authenticated, then navigate to the login page
  //   if (!user || user == undefined || user == null) {
  //     navigate("/login");
  //   }
  // }, [user, navigate]);

  return (
    <Routes>
      {/* <Route
        exact
        path="/"
        element={user ? <Home /> : <Navigate to="/login" />}
      /> */}
      <Route exact path="/" element={<Home />} />
      <Route
        exact
        path="/all-categories"
        element={user ? <Categories /> : <Navigate to="/login" />}
      />
      {/* <Route
        exact
        path="/categories-detail"
        element={user ? <CategoriesDetail /> : <Navigate to="/login" />}
      /> */}
      <Route
        exact
        path="/service-provider/:cat"
        element={user ? <CategoryServiceProvider /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/labour-profile/:id"
        element={user ? <LabourProfile /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/search"
        element={user ? <Search /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/profile"
        element={user ? <Profile /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/city/:cityName"
        element={user ? <CityPage /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/service-list/:id"
        element={user ? <ServiceListing /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/cart"
        element={user ? <Cart /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/order"
        element={user ? <Orders /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/LabourerRegistration"
        element={<LabourerRegistration />}
      />

      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/forgot-password" element={<ForgetPassword />} />

      <Route
        exact
        path="/reset-password/:id/:token"
        element={<ResetPassword />}
      />

      {/* <Route exact path="/test/:id/:token" element={<TestComp />} /> */}
    </Routes>
  );
};

function App() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.user);

  // const [updateUser, setUpdateUser] = useState([]);

  // console.log(user._id)
  useEffect(() => {
    const fetchUpdatedUserDetails = async () => {
      try {
        // Fetch updated user details from the server
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/user/user/${user._id}`
        );

        if (response.ok) {
          const updatedUserDetails = await response.json();

          // Update user details in the Redux store
          dispatch(updateUser(updatedUserDetails));
          // setUpdateUser(updatedUserDetails);
          // console.log(updatedUserDetails);
        }
      } catch (error) {
        console.error("Error fetching updated user details:", error);
      }
    };

    // Fetch updated user details every second
    const intervalId = setInterval(fetchUpdatedUserDetails, 1000);

    // Clean up the interval when the component unmounts
    return () => clearInterval(intervalId);
  }, [dispatch, user._id]);

  // console.log(updateUser);

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
        {/* <Navbar /> */}
        <Routing />
      </Router>
    </>
  );
}

export default App;
