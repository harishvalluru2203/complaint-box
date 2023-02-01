import { all } from "redux-saga/effects";
import { superAdminRootSaga } from "./app/super-admin/sagas";

export function* complaintBoxRootSaga() {
  yield all([superAdminRootSaga()]);
}
