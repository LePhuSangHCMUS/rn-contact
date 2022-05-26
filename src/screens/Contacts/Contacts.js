import React, { useEffect, useState, useContext, Fragment } from 'react'
import { Button, Text, TouchableOpacity, FlatList, View, ActivityIndicator,Image } from "react-native";
import Container from '../../components/common/Container';
import AppModal from '../../components/common/AppModal'
import CustomButton from '../../components/common/CustomButton';
import styles from "./styles"
import { GlobalContext } from '../../context/Provider';
import { getContacts } from '../../context/actions/contacts';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import colors from '../../assets/themes/colors';
import { useNavigation } from '@react-navigation/native';
import routeNames from "../../constants/routeNames";

export default function Contacts() {
  const [modalVisible, setModalVisible] = useState(false);
  const navigation = useNavigation()
  const { navigate } = navigation

  const {
    contactDispatch,
    contactStates: {
      getContacts: {
        data,
        loading,
        error
      }
    }
  } = useContext(GlobalContext);
  const ListEmptyComponent = () => {
    return <View style={styles.NoData}><Text>No data</Text></View>
  }
  const handleOpenModal = () => {
    setModalVisible(true)
  }
  const handleCloseModal = () => {
    setModalVisible(false)
  }
  const Item = ({ item }) => {
    // console.log(name);
    
    return (
      <View style={styles.item}>
        <Image style={styles.avatar} source={ {uri:item?.avatar} } />
        
        <Text style={styles.name} >{ item.name}</Text>
        <Text style={styles.phone} >{ item.phone}</Text>
      </View>
    )
  }

  const renderContactItem = ({ item }) => {
    return <Item item={item} />
  }
  const handleNavigationToCreate = () => {
    navigate(routeNames.CREATE_CONTACT, {});

  }
  useEffect(() => {
    getContacts()(contactDispatch)
  }, [])

  console.log(data)
  return (
    <Fragment>

      <Container>
        {
          loading ? <ActivityIndicator /> : <FlatList
            data={data}
            renderItem={renderContactItem}
            keyExtractor={item => item.id}
            ListEmptyComponent={ListEmptyComponent}
          />

        }
        {/* <AppModal title={"Information"} visible={modalVisible} onClose={handleCloseModal} /> */}



      </Container>

      
    {/* Button Create */}
      <TouchableOpacity onPress={handleNavigationToCreate} style={styles.floatingActionButton}>

        <MaterialIcons name='add' size={20} style={{
          color: colors.white
        }} />
      </TouchableOpacity>
    </Fragment>

  )
}
