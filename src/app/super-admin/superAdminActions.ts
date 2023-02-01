export const GET_SUPER_ADMIN_LIST = "GET_SUPER_ADMIN_LIST";
export const GET_SUPER_ADMIN_LIST_SUCCESS = "GET_SUPER_ADMIN_LIST_SUCCESS";
export const GET_SUPER_ADMIN_LIST_FAILURE = "GET_SUPER_ADMIN_LIST_FAILURE";

export const getSuperAdminList = () => {
  return {
    type: GET_SUPER_ADMIN_LIST,
  };
};

export const getSuperAdminListSuccess = (superAdminsList: any) => {
  return {
    type: GET_SUPER_ADMIN_LIST_SUCCESS,
    payload: superAdminsList,
  };
};

export const getSuperAdminListFailure = (errorMessage: any) => {
  return {
    type: GET_SUPER_ADMIN_LIST_FAILURE,
    payload: errorMessage,
  };
};
