import types from "../types";
const auth = (state, { type, payload }) => {
    switch (type) {
        case types.REGISTER_LOADING:

            console.log('LOADING');
            
            return { ...state, loading: true };
        case types.REGISTER_SUCCESS:
            console.log('SUCESS',payload);

            return { ...state, data: payload, loading: false };
        case types.REGISTER_FAIL:
            console.log('FAIL',payload);

            return { ...state, error: payload, loading: false };
        default:
            return state;
    }
}

export default auth;