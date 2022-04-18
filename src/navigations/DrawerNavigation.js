
import { createDrawerNavigator } from '@react-navigation/drawer';
import React from 'react';
import HomeNavigation from './HomeNavigation';


export default function DrawerNavigation() {
        const Drawer = createDrawerNavigator();

    return (
        <Drawer.Navigator >
            <Drawer.Screen drawerHideStatusBarOnOpen={true} name="Home"Z component={HomeNavigation} />
        </Drawer.Navigator> 
    )
}
