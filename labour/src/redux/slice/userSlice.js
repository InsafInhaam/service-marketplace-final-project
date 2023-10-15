// userSlice.js
export const initialState = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  accessToken: localStorage.getItem("accessToken") || null,
  refreshToken: localStorage.getItem("refreshToken") || null,
};

export const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN":
      const { user, accessToken, refreshToken } = action.payload;
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("accessToken", accessToken);
      localStorage.setItem("refreshToken", refreshToken);
      return { ...state, user, accessToken, refreshToken };
    case "LOGOUT":
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      localStorage.removeItem("refreshToken");
      return { ...state, user: null, accessToken: null, refreshToken: null };
    default:
      return state;
  }
};
