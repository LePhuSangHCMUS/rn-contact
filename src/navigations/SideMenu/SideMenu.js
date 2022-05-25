import React, { useMemo, useContext } from 'react'
import { Text, SafeAreaView , Image, View, Alert} from 'react-native';
import Container from '../../components/common/Container';
import styles from "./styles";
import { icFLC } from "../../assets/icons";
import routeNames from '../../constants/routeNames';
import { logout } from '../../context/actions/auth';
import { GlobalContext } from '../../context/Provider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

export default function SideMenu({navigation}) {
  const { navigate } = navigation;
  const {
    authDispatch,
    authStates: { loading, error, data }
  } = useContext(GlobalContext);
  const handleLogout = () => {
    navigation.closeDrawer();
    Alert.alert("Logout","Are you sure want to logout !",[
      {
        text: "Cancel",
        onPress: () => {},
        style: "cancel",
      },
      {
        text: "OK",
        onPress: () => {
          logout()(authDispatch)
        },
        style: "ok",
      },
    ],)
  }

  const menuItems = [
      {
        id:"1",
        icon: <MaterialIcons style={{paddingRight:10}} name='settings' size={17}/>,
        name: "Setting",
        onPress: () => {
          navigate(routeNames.SETTING, {})
        }
      },
      {
        id:"2",
        icon: <MaterialIcons style={{paddingRight:10}} name='logout' size={27}/>,
        name: "Logout",
        onPress: () => {
          handleLogout()
        }
      }
    ]
  return (
    <SafeAreaView>
      <Container>
        <Image style={styles.logoImage} source={icFLC} alt="FLC Icon" />
        <View style={styles.sideMenuContainer}>
          {
            menuItems?.map(item => {
              return <TouchableOpacity
                key={item?.id}
              onPress={item?.onPress}
              >
                <View style={styles.sideMenuItem}>

                  <View style={styles.sideMenuItemIcon}>{item?.icon}</View>
                  
                  <Text>{ item?.name}</Text>
                </View>
              </TouchableOpacity>
            })
         }
        </View>
      </Container>
    </SafeAreaView>
  )
}


