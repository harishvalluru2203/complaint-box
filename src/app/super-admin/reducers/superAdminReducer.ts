import { GET_SUPER_ADMIN_LIST_SUCCESS } from "../superAdminActions";

const initialState = {
  superAdminsList: [],
};

export const superAdminReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case GET_SUPER_ADMIN_LIST_SUCCESS:
      return { ...state, superAdminsList: action.payload };
    default:
      return state;
  }
};
