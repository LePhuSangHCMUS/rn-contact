import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { icFLC } from "../../assets/icons";
import Container from "../../components/common/Container";
import CustomButton from "../../components/common/CustomButton";
import InputCustom from "../../components/common/Input";
import routeNames from "../../constants/routeNames";
import styles from "./styles";
import envs from "../../config/env"

// { navigation:{navigate}, route }
export default function DetailsScreen() {
  const [text, onChangeText] = useState("Useless Text");
  const navigation = useNavigation();

  const { navigate } = navigation

  const handleNavigationRegister = () => {
    navigate(routeNames.REGISTER, {});    

  }

  console.log(envs)
  return (<Container>

    <Image style={styles.logoImage} source={icFLC} alt="FLC Icon" />

    <View>


      <Text style={styles.title} >Welcome to RN App Contact</Text>
      <Text style={styles.subTitle} >Please login here</Text>

      <View style={styles.form} >

        <InputCustom
          label="Username"
          placeholder="Enter username"
        />
        <InputCustom
          label="Password"
          icon={<Text>Hide</Text>}
          iconPosition="right"
          placeholder="Enter Password"

        />

        <CustomButton primary title="Login" />
      </View>

      <View style={styles.registerBlock} >
        <Text>Need a new account ? </Text>
        <TouchableOpacity style={styles.registerButton} onPress={() => {          
          handleNavigationRegister();
        }}  >
          <Text style={styles.registerText}>Register</Text>
        </TouchableOpacity>
      </View>

    </View>


  </Container>
  )
}
