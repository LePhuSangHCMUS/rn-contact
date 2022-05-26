import React from 'react'
import { Button, Text, View, Image } from "react-native"
import Container from '../../components/common/Container'
import styles from "./styles"
import InputCustom from '../../components/common/Input'
import CustomButton from '../../components/common/CustomButton'
import {icUserDefault} from "../../assets/icons"
export default function CreateContact({ navigation, route }) {
  // React.useEffect(() => {
  //   if (route.params?.post) {
  //     // Post updated, do something with `route.params.post`
  //     // For example, send the post to the server
  //   }
  // }, [route.params?.post]);
  return (<View style={styles.screen}>
    <Container>
      <Image style={styles.userDefault} source={icUserDefault} />
      <Text  style={styles.chooseText}>Choose image</Text>
      <InputCustom
        label="First name"
        name="firsName"
        // onChangeText={handelChange}
        // error={errors.username || error?.username?.[0]}
        placeholder="Enter first name"
      />
      <InputCustom
        label="Last name"
        name="lastName"
        // onChangeText={handelChange}
        // error={errors.username || error?.username?.[0]}
        placeholder="Enter last name"
      />
      <InputCustom
        label="Phone Number"
        name="phone"
        // onChangeText={handelChange}
        // error={errors.username || error?.username?.[0]}
        placeholder="Enter username"
      />

      <CustomButton primary title="Create"
        // disabled={loading} loading={loading}
        // onPress={handleLogin}
      
      />


    </Container>

  </View>
  )
}
