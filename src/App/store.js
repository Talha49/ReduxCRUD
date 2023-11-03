import { configureStore } from "@reduxjs/toolkit";
import userData from "../Features/userData";

export const store = configureStore({
  
  reducer:{
    app: userData,
  }
})