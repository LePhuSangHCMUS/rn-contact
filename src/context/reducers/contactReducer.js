import types from "../types";
const auth = (state, { type, payload }) => {
    switch (type) {
        case types.GET_CONTACTS_LOADING:
            return { ...state, loading: true };
        case types.GET_CONTACTS_SUCCESS:
            return { ...state, data: payload, error: null, loading: false };
        case types.GET_CONTACTS_FAIL:
            return { ...state, error: payload, loading: false };
        default:
            return state;
    }
}

export default auth;