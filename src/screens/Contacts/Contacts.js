import React, { useEffect, useState, useContext } from 'react'
import { Button, Text, TouchableOpacity, FlatList, View, ActivityIndicator } from "react-native";
import Container from '../../components/common/Container';
import AppModal from '../../components/common/AppModal'
import CustomButton from '../../components/common/CustomButton';
import styles from "./styles"
import { GlobalContext } from '../../context/Provider';
import { getContacts } from '../../context/actions/contacts';

export default function Contacts({ navigation, route }) {
  const [modalVisible, setModalVisible] = useState(false);
  const {
    contactDispatch,
    contactStates
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
  const Item = ({ title }) => (
    <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
    </View>
  );

  const renderContactItem = ({ item }) => {
    return <Item title={item?.title} />
  }
console.log('contactStates',contactStates);

  useEffect(() => {
    getContacts()(contactDispatch)
  }, [])
  return (<Container>
    {
      false ? <ActivityIndicator /> : <FlatList
        data={ []}
        renderItem={renderContactItem}
        keyExtractor={item => item.id}
        ListEmptyComponent={ListEmptyComponent}
      />

    }
    <AppModal title={"Information"} visible={modalVisible} onClose={handleCloseModal} />
  </Container>

  )
}
