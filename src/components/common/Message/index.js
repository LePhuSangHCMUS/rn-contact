import React, { useState} from 'react'
import {Button ,Text,TouchableOpacity,ActivityIndicator,View} from "react-native"
import colors from '../../../assets/themes/colors'
import styles from './styles'
export default function Message(props) {

  const { message, secondary, primary, danger, retry, onRetry, onDismiss, onPress = () => { }, ...restProps } = props

  const [isDismiss, setIsDismiss] = useState(false)
  // console.log('primary',primary);
    
  const getBgColor = () => {

    if (primary) {
      return colors.primary
    }
    if (secondary) {
      return colors.secondary
    }
    if (danger) {
      return colors.danger
    }
    return colors.primary
  }
  return (
      !isDismiss?
        <TouchableOpacity
      onPress = { onPress }
      style = { [styles.messageContainer, { backgroundColor: getBgColor() }] }
      {...restProps
    }
    >
    <View
      style={
        styles.messageSection
      }
    >
        
      {message && <Text style={
        [styles.message]
      }>{message}</Text>}


      {typeof onRetry === 'function' && <TouchableOpacity style={
        [styles.retrySection]
      }
        onPress={onRetry}
        
      >
        <Text style={styles.retryText}>Retry</Text>
      </TouchableOpacity>}



      {typeof onDismiss === 'function' && <TouchableOpacity style={
        [styles.dismissSection]
      }
        onPress={() => {
          onDismiss();

          console.log('Dismiss');
          
          setIsDismiss(true)
        }}
      >
        <Text style={styles.dismissText}>X</Text>
      </TouchableOpacity>}
    </View>


    </TouchableOpacity >: null
  )
}
