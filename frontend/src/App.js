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
import { useSelector } from "react-redux";
import Popup from "./components/Popup";
import Categories from "./screens/Categories";
import CategoryServiceProvider from "./screens/CategoryServiceProvider";
import LabourProfile from "./screens/LabourProfile";
import ForgetPassword from "./screens/ForgetPassword";
import Search from "./screens/Search";
import Profile from "./screens/Profile";
import ResetPassword from "./screens/ResetPassword";
import TestComp from "./components/TestComp";
import CityPage from "./screens/CityPage";
import ServiceListing from "./screens/ServiceListing";
import Cart from "./screens/Cart";

const Routing = () => {
  const user = useSelector((state) => state.user);

  return (
    <Routes>
      <Route
        exact
        path="/"
        element={user ? <Home /> : <Navigate to="/login" />}
      />
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

      <Route exact path="/city/:cityName" element={<CityPage />} />
      <Route exact path="/service-list/:id" element={<ServiceListing />} />
      <Route exact path="/cart" element={<Cart />} />

      <Route exact path="/login" element={<Login />} />
      <Route exact path="/register" element={<Register />} />
      <Route exact path="/forgot-password" element={<ForgetPassword />} />

      <Route
        exact
        path="/reset-password/:id/:token"
        element={<ResetPassword />}
      />

      <Route exact path="/test/:id/:token" element={<TestComp />} />
    </Routes>
  );
};

function App() {
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
