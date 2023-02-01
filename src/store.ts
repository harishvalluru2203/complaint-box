import { configureStore, getDefaultMiddleware } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { complaintBoxRootReducer } from "./complaintBoxRootReducer";
import { complaintBoxRootSaga } from "./complaintBoxRootSaga";

const sagaMiddleware: any = createSagaMiddleware();

export const store = configureStore({
  reducer: complaintBoxRootReducer,
  devTools: true,
  middleware: (getDefaultMiddleware: any) =>
    getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(complaintBoxRootSaga);
