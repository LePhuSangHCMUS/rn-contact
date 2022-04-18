
import { StyleSheet } from "react-native";
import colors from "../../../assets/themes/colors"
export default StyleSheet.create({
    inputContainer: {
        // height: 40,
        // marginTop: 10,
        // padding: 10,
        paddingVertical:10,
    },
    label: {

    },
    inputText: {
        // backgroundColor: 'red',
        flex:1

    },
    icon:{
        // paddingRight:10
    },
    inputTextWrapper: {
        flexDirection: "row",
        height: 42,
        borderRadius: 4,
        borderWidth: 1,
        // borderColor: colors.grey,
        paddingHorizontal:10,
        alignItems:"center"
    },
    errorText:{
        color:colors?.danger,
        paddingVertical:5,
    }
})