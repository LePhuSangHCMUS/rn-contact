import types from "../../types/index"
import axiosInstance from "../../../helpers/axiosInstance";

export const getContacts = () => async (dispatch) => {
    dispatch({ type: types.GET_CONTACTS_LOADING });
    try {
        const res = await axiosInstance.get('/contacts');

        console.log('res', res);

        dispatch({
            type: types.GET_CONTACTS_SUCCESS, payload: [

                {


                    name: "Phu Sang",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },

                {


                    name: "Ha Ngoc Huyen",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },

                {


                    name: "Thien Dia Hoi",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },

                {


                    name: "Cai Bang",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },

                {


                    name: "Phu Sang",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },

                {


                    name: "Bang",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },

                {


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },




            ] || []
        });

    } catch (error) {
        dispatch({
            type: types.GET_CONTACTS_FAIL,
            payload: error.response ? error.response?.data : { error: "Something " }
        })
        console.log("ERROR", error);

    }
}

export const createContact = (data) => async (dispatch) => {
    dispatch({ type: types.CREATE_CONTACT_LOADING });
    try {
        const res = await axiosInstance.post('/contacts', data);

        console.log('res', res);

        dispatch({ type: types.CREATE_CONTACT_SUCCESS, payload: res?.data || [] });

    } catch (error) {
        dispatch({
            type: types.CREATE_CONTACT_FAIL,
            payload: error.response ? error.response?.data : { error: "Something " }
        })
        console.log("ERROR", error);

    }
}


