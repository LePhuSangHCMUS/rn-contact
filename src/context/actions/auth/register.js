import types from "../../types/index"
import axiosInstance from "../../../helpers/axiosInstance"
import axios from "axios"

export const register = ({ email, password, username, firstName, lastName }) => async(dispatch) => {
    dispatch({type:types.REGISTER_LOADING})
    const data= {
        email, password, username,first_name: firstName,last_name: lastName   
    }
  const res=  await axios.post('https://truly-contacts.herokuapp.com/api/auth/register', data);
        
        console.log('res',res);
        
        
    //     .then((data) => {

    //     console.log('Data',data);
        
    //     dispatch({type:types.REGISTER_SUCCESS, payload:data});    
 
    // }).catch(err => {
    //     console.log("FAIL",err);

    //     dispatch({ type: types.REGISTER_FAIL, payload:err})        
    // })
}