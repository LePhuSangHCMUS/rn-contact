import types from "../../types/index"
import axiosInstance from "../../../helpers/axiosInstance";

export const getContacts = () => async (dispatch) => {
    dispatch({ type: types.GET_CONTACTS_LOADING });
    try {
        // const res = await axiosInstance.get('/contacts');                                               
        dispatch({
            type: types.GET_CONTACTS_SUCCESS, payload: [

                {

                    id:"11",
                    name: "Phu Sang",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },

                {

                    id:"12",

                    name: "Ha Ngoc Huyen",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },

                {

                    id:"13",

                    name: "Thien Dia Hoi",
                    phone: "123456789",
                },

                {

                    id:"131",

                    name: "Cai Bang",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },

                {

                    id:"13131",

                    name: "Phu Sang",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },

                {

                    id:"1123123",

                    name: "Bang",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },

                {

                    id:"1434",

                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {

                    id:"143434",

                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"14342132",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {

                    id:"131212434123123",

                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"121312312432423432432",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {

                    id:"112312312312312312312312312",

                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"1fsdf",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"fsdf1",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {

                    id:"1bvb",

                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"vxcv1",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"vcx fsdf1",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"1fsfsdffvcxcv",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"1ewrf4",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"14ref23",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"132ed",



                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"132ff32",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"123d2d23",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {

                    id:"12323fdsfsd",

                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"1gdfgbvcbg",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"1fsdfrewr",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"dfsd",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"1dfsdr",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"1hhdsaf",


                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {

                    id:"1fff",

                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {

                    id:"fff1",

                    name: "Phung",
                    phone: "123456789",
                    avatar: "http://placekitten.com/200/300"
                },
                {
                    id:"1   dfdsfsr",


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


