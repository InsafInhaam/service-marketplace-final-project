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
import { logout } from "./redux/slice/userActions";
import Popup from "./components/Popup";

const Routing = () => {
  const user = useSelector((state) => state.user.user);

  return (
    <Routes>
      <Route exact path="/" element={<Home />} />

      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
    </Routes>
  );
};

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    const checkTokenValidity = () => {
      const accessToken = localStorage.getItem("jwt");
      if (!accessToken) {
        return;
      }

      try {
        // const decodedToken = jwt.decode(accessToken);
        // if (decodedToken.exp * 1000 < Date.now()) {
        // Access token expired, attempt refresh
        const refreshToken = localStorage.getItem("refreshToken");
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
        // }
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
