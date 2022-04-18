
import { StyleSheet } from "react-native";
import colors from "../../assets/themes/colors"
export default StyleSheet.create({
    logoImage: {
        width: 100,
        height: 100,
        alignSelf: "center"
    },
    title: {
        fontWeight: "bold",
        fontSize: 18,
        textAlign: "center",
        paddingTop: 20
    },
    subTitle: {
        fontSize: 16,
        textAlign: "center",
        paddingVertical: 20
    },
    form:{

    },
    loginBlock:{
        flexDirection:"row",
        marginVertical:10

    },
    loginButton:{
        marginLeft:10,
    },
    loginText:{
        color:colors.primary,

    }
})