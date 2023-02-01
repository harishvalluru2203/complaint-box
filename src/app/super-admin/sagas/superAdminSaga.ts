import { put } from "redux-saga/effects";
import { getSuperAdminListSuccess } from "../superAdminActions";
import { getSuperAdminDetails } from "../SuperAdminServices";

export function* superAdminSaga() {
  try {
    console.log("superAdminSaga");
    const superAdminsList = getSuperAdminDetails();
    console.log("superAdminsList: ", superAdminsList);
    yield put(getSuperAdminListSuccess(superAdminsList));
  } catch (error) {}
}
