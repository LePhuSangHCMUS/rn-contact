import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CONTACT_ROUTERS } from "../constants/routeOptions.js";


export default function HomeNavigation() {
const HomeStack = createNativeStackNavigator();

    return (
        <HomeStack.Navigator >
            {
                CONTACT_ROUTERS?.map(el=>{
                     return  <HomeStack.Screen  key={el?.id} name={el?.name} component={el?.component} />
                })
            }
           

        </HomeStack.Navigator>
    )
}
