import { fetchWrapper } from "../../common/fetchWrapper";

export const getSuperAdminDetails = async () => {
  const res = await fetchWrapper.get("http://localhost:2020/superAdmins");
  console.log("res: ", res);
  return res;
};

export const postSuperAdminDetails = async (superAdminDetails: any) => {
  console.log("superAdminDetails: ", superAdminDetails);
  const response = await fetchWrapper.post(
    "http://localhost:2020/superAdmins",
    superAdminDetails
  );
  console.log("response: ", response);
};
