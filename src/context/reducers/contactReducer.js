import types from "../types";
const auth = (state, { type, payload }) => {
    switch (type) {
        case types.GET_CONTACTS_LOADING:
            return { ...state,getContacts:{...state?.getContacts, loading:true} };
        case types.GET_CONTACTS_SUCCESS:
            return { ...state,getContacts:{...state?.getContacts, loading:false,data:payload,error:null} };
        case types.GET_CONTACTS_FAIL:
            return { ...state,getContacts:{...state?.getContacts, loading:false,error:payload} };
        default:
            return state;
    }
}

export default auth;