import { all, takeLatest } from "redux-saga/effects";
import { GET_SUPER_ADMIN_LIST } from "../superAdminActions";
import { superAdminSaga } from "./superAdminSaga";

export function* superAdminRootSaga() {
  yield all([takeLatest(GET_SUPER_ADMIN_LIST, superAdminSaga)]);
}
