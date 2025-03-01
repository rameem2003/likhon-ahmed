import { configureStore } from "@reduxjs/toolkit";
import AuthSlice from "../features/AuthSlice";

export default configureStore({
  reducer: {
    account: AuthSlice,
  },
});
