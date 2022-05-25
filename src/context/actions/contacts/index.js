import types from "../../types/index"
import axiosInstance from "../../../helpers/axiosInstance";

export const getContacts = () => async (dispatch) => {
    dispatch({ type: types.GET_CONTACTS_LOADING });
    try {
        const res = await axiosInstance.get('/contacts');

        console.log('res',res);
        
        dispatch({ type: types.GET_CONTACTS_SUCCESS, payload: res?.data||[] });

    } catch (error) {
        dispatch({
            type: types.GET_CONTACTS_FAIL,
            payload: error.response ? error.response?.data : { error: "Something " }
        })
        console.log("ERROR", error);

    }
}

