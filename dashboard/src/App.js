import "./App.css";
import Home from "./screens/Home";
import Login from "./screens/Login";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { useSelector } from "react-redux";
import Popup from "./components/Popup";
import Users from "./screens/Users";
import Labours from "./screens/Labours";
import Categories from "./screens/Categories";
import Admins from "./screens/Admins";
import Services from "./screens/Services";
import SubCategories from "./screens/SubCategories";

// Define the initial state
const initialState = {
  user: JSON.parse(localStorage.getItem("user")),
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      return { ...state, user: action.payload };
    case "LOGOUT":
      return { ...state, user: null };
    default:
      return state;
  }
};

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
        path="/users"
        element={user ? <Users /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/labours"
        element={user ? <Labours /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/category"
        element={user ? <Categories /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/subcategory"
        element={user ? <SubCategories /> : <Navigate to="/login" />}
      />

      <Route
        exact
        path="/admin"
        element={user ? <Admins /> : <Navigate to="/login" />}
      />
      <Route
        exact
        path="/services"
        element={user ? <Services /> : <Navigate to="/login" />}
      />
      <Route exact path="/login" element={<Login />} />
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
