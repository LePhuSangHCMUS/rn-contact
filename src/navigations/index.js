
import { NavigationContainer } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { GlobalContext } from "../context/Provider";
import AuthNavigation from './AuthNavigation';
import DrawerNavigation from './DrawerNavigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { ActivityIndicator } from 'react-native';
export default AppNavigationContainer = () => {

    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [isAuthLoaded, setIsAuthLoaded] = useState(true);
    const {
        authStates: { isLoggedIn }
    } = useContext(GlobalContext);    
    const getUser = async () => {
        
        try {
            const user = await AsyncStorage.getItem('@user');
            if (user) {
                setIsAuthenticated(true);
            } else {
                setIsAuthenticated(false)
            }
        } catch (error) {
            
        } finally {
            setIsAuthLoaded(false)
            
        }
 

        
    }
    useEffect(() => {
      getUser()  
    },)


    return !isAuthLoaded?<NavigationContainer>
        {
            isLoggedIn||isAuthenticated ?  <DrawerNavigation />:<AuthNavigation /> 
        }

        {/* <HomeNavigation/> */}

    </NavigationContainer>:<ActivityIndicator/>
}

//Screen>> Home >> Drawer
//Screen > Auth 