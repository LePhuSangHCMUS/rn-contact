import types from "../types";
const auth = (state, { type, payload }) => {
    switch (type) {
        case types.REGISTER_LOADING:
            return { ...state, loading: true };
        case types.REGISTER_SUCCESS:
            return { ...state, data: payload, error: null, loading: false };
        case types.REGISTER_FAIL:
            return { ...state, error: payload, loading: false };
        case types.CLEAR_AUTH_STATE:
            return { ...state, error: null,data:null, loading: false };
        case types.LOGIN_LOADING:
            return { ...state, loading: true };
        case types.LOGIN_SUCCESS:
            return { ...state, data: payload,isLoggedIn:true, error: null, loading: false };
        case types.LOGIN_FAIL:
            return { ...state, error: payload, loading: false };
        case types.CLEAR_AUTH_STATE:
            return { ...state, error: null,data:null, loading: false };
        default:
            return state;
    }
}

export default auth;