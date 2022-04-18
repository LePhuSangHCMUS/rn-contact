
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext } from 'react';
import { GlobalContext } from "../context/Provider";
import AuthNavigation from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';
export default AppNavigationContainer = () => {
    const {
        authStates: { isLoggedIn }
    } = useContext(GlobalContext)


    return <NavigationContainer>
        {
            !isLoggedIn ? <AuthNavigation /> : <DrawerNavigation />
        }

        {/* <HomeNavigation/> */}

    </NavigationContainer>;
}

//Screen>> Home >> Drawer
//Screen > Auth 