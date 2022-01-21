import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    user: localStorage.getItem("user"),
    token: localStorage.getItem("token"),
};

const userSlice = createSlice({
    name: "user",
    initialState,
    reducers: {
        setActiveUser: (state, action) => {
            state.user = action.payload.user;
        },
        setToken: (state, action) => {
            state.user = null;
            state.token = null;
        },
        setUserLogoutState: (state) => {
            state.user = null;
            state.token = null;
        },
    },
});
export const { setActiveUser, setUserLogoutState, setToken } =
    userSlice.actions;
export const selectUser = (state) => state.user.user;
export const selectToken = (state) => state.user.token;
export default userSlice.reducer;
