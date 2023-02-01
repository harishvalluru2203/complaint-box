import { combineReducers } from "redux";
import { superAdminReducer } from "./app/super-admin/reducers";

export const complaintBoxRootReducer = combineReducers({
  app: superAdminReducer,
});
