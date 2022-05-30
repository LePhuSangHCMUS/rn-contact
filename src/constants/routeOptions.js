import routeNames from "./routeNames";
//Contact
import ContactDetail from "../screens/ContactDetail/ContactDetail"
import Contacts from "../screens/Contacts/Contacts"
import Setting from "../screens/Setting/Setting"
import CreateContact from "../screens/CreateContact/CreateContact"
//Auth
import Login from "../screens/Login/Login"
import Register from "../screens/Register/Register"



export const AUTH_ROUTERS=[
    {
        id:"1",
        name:routeNames.LOGIN,
        component:Login,
        headerShown:false
    },
    {
        id:"2",
        name:routeNames?.REGISTER,
        component:Register,
        headerShown:false

    }
]

export const CONTACT_ROUTERS=[
    {
        id:"1",
        name:routeNames.CONTACTS,
        component: Contacts,
        headerShown: true, 
        showMenu:true,
        
    },
    {
        id:"2",
        name:routeNames?.CREATE_CONTACT,
        component: CreateContact,
        headerShown: true,
        showMenu:false,
        
        
    },
    {
        id:"3",
        name:routeNames?.CONTACT_DETAIL,
        component: ContactDetail,
        headerShown:true,
        showMenu:false,
        
    },
    {
        id:"4",
        name:routeNames?.SETTING,
        component: Setting,
        headerShown:true,
        showMenu:false,
        
    },
]