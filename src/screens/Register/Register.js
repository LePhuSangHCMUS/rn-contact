import { useNavigation } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { Image, Text, TouchableOpacity, View } from "react-native";
import { icFLC } from "../../assets/icons";
import Container from "../../components/common/Container";
import CustomButton from "../../components/common/CustomButton";
import InputCustom from "../../components/common/Input";
import routeNames from "../../constants/routeNames";
import styles from "./styles";
import { register } from '../../context/actions/auth/register';
// { navigation:{navigate}, route }
import { GlobalContext } from '../../context/Provider';
import envs from "../../config/env"

console.log('EB+NV',envs);

const ERRORS={
  username:"Please enter username !" ,
  firstName:"Please enter first name !",
  lastName:"Please enter last name  !" ,
  email:"Please enter email !" ,
  password:"Please enter password !" ,
}
export default function Register() {

  const [form, setForm] = useState({});
  const [errors, setErrors] = useState({});
  const navigation = useNavigation();
  const {
    authDispatch,
    authStates: { loading,error,data}
  } = useContext(GlobalContext)
  const { navigate } = navigation
  const handleNavigationLogin = () => {
    navigate(routeNames.LOGIN, {});

  }
  const handleRegister = () => {
    register(form)(authDispatch)
    
    // if (!form.username) {
    //   setErrors((prev) => {
    //     return { ...prev, username: ERRORS.username }
    //   })
    // }
    //   if (!form.firstName) {
    //     setErrors((prev) => {
    //       return { ...prev, firstName:ERRORS.firstName }
    //     })
    //   }
    //   if (!form.lastName) {
    //     setErrors((prev) => {
    //       return { ...prev,lastName: ERRORS.lastName}
    //     })
    //   }
    //   if (!form.email) {
    //     setErrors((prev) => {
    //       return { ...prev, email: ERRORS.email}
    //     })
    //   }
    //   if (!form.password) {
    //     setErrors((prev) => {
    //       return { ...prev,password: ERRORS.password }
    //     })
    //   }
    
    // if (Object.values(form).every(item => item.trim().length > 0) &&
    //   Object.values(form).length === 5 &&
    //   Object.values(errors).every(item => !item)
    // ) {
    //   register(form)(authDispatch)
    // }
    
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
    
    
    return (<Container>

      <Image style={styles.logoImage} source={icFLC} alt="FLC Icon" />

      <View>


        <Text style={styles.title} >Welcome to RN App Contact</Text>
        <Text style={styles.subTitle} >Create free a account</Text>

        <View style={styles.form} >

          <InputCustom
            label="Username"
            placeholder="Enter username"
            onChangeText={handelChange}
            name="username"
            error={errors.username}
          />
          <InputCustom
            label="First Name"
            placeholder="Enter first name"
            onChangeText={handelChange}
            name="firstName"
            error={errors.firstName}

          />
          <InputCustom
            label="Last Name"
            placeholder="Enter last name"
            onChangeText={handelChange}
            name="lastName"
            error={errors.lastName}


          />
          <InputCustom
            label="Email"
            placeholder="Enter email"
            onChangeText={handelChange}
            name="email"
            error={errors.email}

          />
          <InputCustom
            label="Password"
            icon={<Text>Hide</Text>}
            iconPosition="right"
            placeholder="Enter Password"
            onChangeText={handelChange}
            name="password"
            error={errors.password}

          />

          <CustomButton disabled={loading} loading={loading} onPress={handleRegister} primary title="Register" />
        </View>

        <View style={styles.loginBlock} >
          <Text>Already have an account ? </Text>
          <TouchableOpacity style={styles.loginButton} onPress={() => {
            handleNavigationLogin();
          }}  >
            <Text style={styles.loginText}>Login</Text>
          </TouchableOpacity>
        </View>

      </View>


    </Container>
    )
  }
