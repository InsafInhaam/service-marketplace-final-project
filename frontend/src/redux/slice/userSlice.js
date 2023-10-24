// userSlice.js
export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const { user, accessToken, refreshToken, expirationTime } =
        action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      localStorage.setItem("expirationTime", expirationTime);
      return { ...state, user, accessToken, refreshToken, expirationTime };
    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      localStorage.removeItem("expirationTime");
      return {
        ...state,
        user: null,
        accessToken: null,
        refreshToken: null,
        expirationTime: null,
      };
    case "UPDATE_USER":
      const updatedUserDetails = action.payload;
      // Merge the updated user details into the existing user state
      return {
        ...state,
        user: {
          ...state.user,
          ...updatedUserDetails,
        },
      };
    default:
      return state;
  }
};
