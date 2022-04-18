import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { AUTH_ROUTERS } from "../constants/routeOptions.js";


export default function AuthNavigation() {
    const AuthStack = createNativeStackNavigator();
    return (
        <AuthStack.Navigator >
            {
                AUTH_ROUTERS?.map(el => {
                    return <AuthStack.Screen options={{
                        headerShown:el?.headerShown
                    }}  key={el?.id}  name={el?.name} component={el?.component} />
                })
            }

        </AuthStack.Navigator>
    )
}





