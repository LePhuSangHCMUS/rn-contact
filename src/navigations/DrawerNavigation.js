
import { createDrawerNavigator
} from '@react-navigation/drawer';
import React from 'react';
import HomeNavigation from './HomeNavigation';
import { useWindowDimensions} from 'react-native';
import SideMenu from './SideMenu/SideMenu';

export default function DrawerNavigation() {
const Drawer = createDrawerNavigator();
const dimensions = useWindowDimensions();
return (
   <Drawer.Navigator
       
       drawerContent={()=><SideMenu/>}
       screenOptions={{
           drawerType: dimensions.width >= 768 ? 'permanent' : 'front',
           headerShown: false,


       }}
   >
       <Drawer.Screen
           drawerHideStatusBarOnOpen={false}
           name="Home" component={HomeNavigation} />
   </Drawer.Navigator>
)
}
