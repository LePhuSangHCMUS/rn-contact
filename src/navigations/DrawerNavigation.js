
import { createDrawerNavigator,DrawerContentScrollView,DrawerItem
} from '@react-navigation/drawer';
import React from 'react';
import HomeNavigation from './HomeNavigation';
import { useWindowDimensions, Text ,TouchableOpacity} from 'react-native';
import { CONTACT_ROUTERS } from "../constants/routeOptions.js";
import { useNavigation ,useFocusEffect} from '@react-navigation/native';

function CustomDrawerContent(props) {

    const navigation = useNavigation();
  const { navigate } = navigation

    const handleNavigation = (name) => {
        navigate(name,{})
    }
    return (
      <DrawerContentScrollView {...props}>
            {

                CONTACT_ROUTERS?.filter(item=>item?.isDrawer)?.map((item) => {
                    return <DrawerItem
                    label={item?.name}
                        onPress={() => {
                            handleNavigation(item?.name)
                    }}
                  />
                })

            }



      </DrawerContentScrollView>
    );
  }
export default function DrawerNavigation() {
const Drawer = createDrawerNavigator();
const dimensions = useWindowDimensions();
return (
   <Drawer.Navigator
       
       drawerContent={()=><CustomDrawerContent></CustomDrawerContent>}
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
