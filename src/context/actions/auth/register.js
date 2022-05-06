import types from "../../types/index"
import axiosInstance from "../../../helpers/axiosInstance";
export const register = ({ email, password, username, firstName, lastName }) => async(dispatch) => {
    dispatch({ type: types.REGISTER_LOADING });
    console.log("XXX");

    const data= {
        email:"lelldddddfffffe@gmail.com", password:"123456789", username:"leffleeeeledddddle",first_name: "firstName",last_name: "lastName"   
    }
    try {
        const res = await axiosInstance.post('api/auth/register', data); 
        
        console.log("DATA",res.data);
        
        dispatch({type:types.REGISTER_SUCCESS, payload:data});    

    } catch (error) {
        dispatch({ type: types.REGISTER_FAIL, payload:error})        
        console.log("ERROR",error);

    }
}