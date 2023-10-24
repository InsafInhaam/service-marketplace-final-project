// userActions.js
import axios from "axios";

export const login = (userData) => async (dispatch) => {
  try {
    const response = await axios.post("/api/user/login", userData);
    const { user, accessToken, refreshToken } = response.data;
    dispatch({ type: "LOGIN", payload: { user, accessToken, refreshToken } });
  } catch (error) {
    console.error("Error logging in:", error);
    // Handle error, dispatch an action, etc.
  }
};

// userActions.js
export const logout = () => (dispatch) => {
  localStorage.removeItem("jwt"); // Remove access token
  localStorage.removeItem("user");
  dispatch({ type: "LOGOUT" });
};

export const updateUser = (updatedUserDetails) => {
  return {
    type: 'UPDATE_USER',
    payload: updatedUserDetails,
  };
};