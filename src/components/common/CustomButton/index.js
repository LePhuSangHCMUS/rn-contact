import React from 'react'
import {Button ,Text,TouchableOpacity,ActivityIndicator,View} from "react-native"
import colors from '../../../assets/themes/colors'
import styles from './styles'
export default function CustomButton(props) {

  const {title,disabled,loading,secondary,primary,danger,onPress=()=>{},...restProps}=props
    const handelPress=()=>{

    }

    // console.log('primary',primary);
    
    const getBgColor=()=>{
      if(disabled){
        return colors.grey
      }
      if(primary){
        return colors.primary
      }
      if(secondary){
        return colors.secondary
      }
      if(danger){
         return  colors.danger
      }
      return colors.primary
    }
  return (

    <TouchableOpacity
      onPress={onPress}
      style={[styles.buttonContainer,{backgroundColor:getBgColor()}]}
      disabled={disabled}
      {...restProps}
    >
      <View
      style={
        styles.loadingSection
      }
      >
        {loading&&<ActivityIndicator color={colors.white} />}
      {title&& <Text style={
        [styles.title,{color:disabled?'black':colors.white,paddingLeft:loading?5:0}]
      }>{title}</Text>}
      </View>


    </TouchableOpacity>
  )
}
