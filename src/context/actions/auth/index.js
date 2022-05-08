import types from "../../types/index"
import axiosInstance from "../../../helpers/axiosInstance";
import AsyncStorage from '@react-native-async-storage/async-storage';

export const clearAuthState = () => dispatch => {
    dispatch({type:types.CLEAR_AUTH_STATE})
     
}
export const register = ({ email, password, username, firstName, lastName }) => async (dispatch) => {
    dispatch({ type: types.REGISTER_LOADING });
    try {
        const data = {
            email, password, username, first_name: firstName, last_name: lastName
        }
        const res = await axiosInstance.post('/auth/register', data);

        console.log("DATA", res.data);

        dispatch({ type: types.REGISTER_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: types.REGISTER_FAIL,
            payload: error.response?error.response?.data:{error:"Something "}
        })
        console.log("ERROR", error);

    }
}
export const login = ({ username, password }) => async (dispatch) => {
    dispatch({ type: types.LOGIN_LOADING });
    try {
        const data = {
            password, username, 
        }
        const res = await axiosInstance.post('/auth/login', data);
       
        const token = res?.data?.token;
        const user = res?.data?.user;

        if (token&&user) {
            try {

                const jsonUser = JSON.stringify(user)
                await AsyncStorage.setItem('@token',token);
                await AsyncStorage.setItem('@user',jsonUser);              } catch (e) {
                // saving error
              }
     
            
        }
        

        dispatch({ type: types.LOGIN_SUCCESS, payload: data });

    } catch (error) {
        dispatch({
            type: types.LOGIN_FAIL,
            payload: error.response?error.response?.data:{error:"Something "}
        })
        console.log("ERROR", error);

    }
}