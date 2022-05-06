import types from "../types";
const auth = (state, { type, payload }) => {
    switch (type) {
        case types.REGISTER_LOADING:
            return { ...state, loading: true };
        case types.REGISTER_SUCCESS:
            return { ...state, data: payload, error: null, loading: false };
        case types.REGISTER_FAIL:
            return { ...state, error: payload, loading: false };
        default:
            return state;
    }
}

export default auth;