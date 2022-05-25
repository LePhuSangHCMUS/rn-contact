import { useNavigation,useFocusEffect } from '@react-navigation/native';
import React, { useState , useContext, useEffect} from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { icFLC } from "../../assets/icons";
import Container from "../../components/common/Container";
import CustomButton from "../../components/common/CustomButton";
import InputCustom from "../../components/common/Input";
import routeNames from "../../constants/routeNames";
import styles from "./styles";
import { GlobalContext } from '../../context/Provider';
import { clearAuthState, login } from '../../context/actions/auth';
import Message from '../../components/common/Message';
// { navigation:{navigate}, route }

const ERRORS={
  username:"Please enter username !" ,
  password:"Please enter password !" ,
}
export default function DetailsScreen() {
  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});

  const navigation = useNavigation();
  const { navigate } = navigation
  const {
    authDispatch,
    authStates: { loading, error, data }
  } = useContext(GlobalContext);
   

  const handleNavigationRegister = () => {
    navigate(routeNames.REGISTER, {});    

  }

  const handelChange = ({ name, value }) => {
    if (value && errors?.[name]) {
      setErrors((prev) => {
        return { ...prev,[name]: null }
      })
    }
    if (!value && !errors?.[name]) {

      setErrors((prev) => {
        return { ...prev,[name]: ERRORS?.[name] }
      })
    }
    setForm({ ...form, [name]: value });
  }
  const handleLogin = () => {
    if (!form.username) {
      setErrors((prev) => {
        return { ...prev, username: ERRORS.username }
      })
    }
    if (!form.password) {
      setErrors((prev) => {
        return { ...prev, password: ERRORS.password }
      })
    }

    if (Object.values(form).every(item => item.trim().length > 0) &&
      Object.values(form).length === 2 &&
      Object.values(errors).every(item => !item)
    ) {
      login(form)(authDispatch)
    }

  }

  useFocusEffect(

    React.useCallback(() => {

      console.log('LOGIN MOUN');

      return () => {

        console.log('LOGIN UNMOUNT');

      }
    }, [navigate])
  );

  
  
  return (<Container>

    <Image style={styles.logoImage} source={icFLC} alt="FLC Icon" />

    <View>


      <Text style={styles.title} >Welcome to RN App Contact</Text>
      <Text style={styles.subTitle} >Please login here</Text>

      {error ? <Message onDismiss={() => {

        clearAuthState()(authDispatch)
       }} danger message={ error?.detail} />:null}

      <View style={styles.form} >

        <InputCustom
          label="Username"
          name="username"
          onChangeText={handelChange}
          error={errors.username||error?.username?.[0]}
          placeholder="Enter username"
        />
        <InputCustom
          label="Password"
          icon={<Text>Hide</Text>}
          iconPosition="right"
          placeholder="Enter Password"
          name="password"
          onChangeText={handelChange}
          
          error={errors.password||error?.password?.[0]}

        />

        <CustomButton primary title="Login" disabled={loading} loading={loading} onPress={handleLogin}  />
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
