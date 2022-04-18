

import React, { useState } from 'react'
import { TextInput, Text, View } from "react-native"
import styles from "./styles"
import colors from "../../../assets/themes/colors"




export default function InputCustom(props) {

    const { label, name, error , icon, iconPosition, onChangeText = () => { }, style = {}, value = "", placeholder = "Type text ....", ...restProps } = props;
    const [focused, setFocused] = useState(false)

    const getFlexDirection = () => {
        if (icon && iconPosition) {
            if (iconPosition === "left") {
                return "row"
            } else
                return "row-reverse"
        }
        return "row"
    }

    const getBorderColor = () => {

        if (error) {
            return colors.danger;
        }
        else if (focused) {
            return colors.primary;
        } else
            return colors.grey;

    }
    const getLabelColor = () => {

        if (error) {
            return colors.danger;
        }
        else if (focused) {
            return colors.primary;
        } else
            return colors.grey;

    }

    const handleFocus = () => {
        setFocused(true)
    }
    const handleUnfocus = () => {
        setFocused(false)
    }

    const handleChangeText = (value) => {
        onChangeText({ name, value })
    }

    return (<View
        style={[styles.inputContainer, style]}

    >

        {label && <Text
            style={
                [styles.label,
                { color: getLabelColor() }]
            }>{label}</Text>}
        <View
            style={
                [styles.inputTextWrapper,
                {
                    flexDirection: getFlexDirection(),
                    borderColor: getBorderColor()
                }]
            }
        >

            {icon && <View

                style={
                    styles.icon
                }
            >{icon}</View>}
            <TextInput
                style={
                    styles.inputText
                }
                onChangeText={handleChangeText}
                // value={value}
                placeholder={placeholder}
                // keyboardType="numeric"
                icon={<Text>hide</Text>}
                focusable
                onFocus={handleFocus}
                onBlur={handleUnfocus}

                {...restProps}
            />


        </View>
        {error &&
            <Text style={
                styles.errorText
            }>{error}</Text>
        }
    </View>
    )
}
