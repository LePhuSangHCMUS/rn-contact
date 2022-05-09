import { createNativeStackNavigator } from '@react-navigation/native-stack';
import React from 'react';
import { CONTACT_ROUTERS } from "../constants/routeOptions.js";
import { useWindowDimensions, Text, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';


export default function HomeNavigation() {
    const HomeStack = createNativeStackNavigator();
    const navigation = useNavigation()
    const handleOpenDrawerNavigation = () => {
        navigation.openDrawer();

    }
    return (
        <HomeStack.Navigator >
            {
                CONTACT_ROUTERS?.map(el => {
                    return <HomeStack.Screen
                        options={{
                            headerShown: el?.headerShown,
                            headerLeft: () => <TouchableOpacity onPress={handleOpenDrawerNavigation} >
                                <Text style={{ padding: 10 }}>Open</Text>
                            </TouchableOpacity>,// default is humbergerbutton
                        }}
                        key={el?.id} name={el?.name} component={el?.component} />
                })
            }


        </HomeStack.Navigator>
    )
}
