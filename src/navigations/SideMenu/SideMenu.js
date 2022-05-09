import React, { useMemo, useContext } from 'react'
import { Text, SafeAreaView , Image, View} from 'react-native';
import Container from '../../components/common/Container';
import styles from "./styles";
import { icFLC } from "../../assets/icons";
import { useNavigation } from '@react-navigation/native';
import routeNames from '../../constants/routeNames';
import { logout } from '../../context/actions/auth';
import { GlobalContext } from '../../context/Provider';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function SideMenu() {

  const navigation = useNavigation();
  const { navigate } = navigation;
  const {
    authDispatch,
    authStates: { loading, error, data }
  } = useContext(GlobalContext);
  const handleLogout = () => {
    logout()(authDispatch)
  }
  const menuItems = useMemo(() => {
    return [
      {
        id:"1",
        icon: <Text>S</Text>,
        name: "Setting",
        onPress: () => {
          navigate(routeNames.SETTING, {})
        }
      },
      {
        id:"2",
        icon: <Text>L</Text>,
        name: "Logout",
        onPress: () => {
          handleLogout()
        }
      }
    ]
  }, [])
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
