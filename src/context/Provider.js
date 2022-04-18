import React , {  createContext ,useReducer} from "react"

//REDUCER
import authReducer from "./reducers/authReducer";
import contactReducer from "./reducers/contactReducer";
//INIT STATE
import authInitStates from "./initialsStates/authStates"
import contactInitStates from "./initialsStates/contactStates"
const GlobalContext=createContext();

// const initialState = {count: 0};
 
// //action ={type,payload}
// function countReducer(state, action) {
//     switch (action.type) {
//       case 'increment':
//         return {count: state.count + 1};
//       case 'decrement':
//         return {count: state.count - 1};
//       default:
//         throw new Error();
//     }
//   }

const GlobalProvider =({children})=>{

    // const [state, dispatch] = useReducer(countReducer, initialState);

    // return <GlobalContext.Provider value={{state,dispatch}}>{children}</GlobalContext.Provider>
    const [authStates, authDispatch] = useReducer(authReducer, authInitStates);
    const [contactStates ,contactDispatch] = useReducer(contactReducer, contactInitStates);
    const combineStates={
        authStates,
        contactStates
    }

    const combineDispatch={
        authDispatch ,
        contactDispatch   
    }

    return <GlobalContext.Provider value={{...combineStates,...combineDispatch}}>{children}</GlobalContext.Provider>

}


export  {GlobalContext,GlobalProvider};