
import { StyleSheet } from "react-native";
import colors from "../../../assets/themes/colors";
export default StyleSheet.create({
    AppModal: {
        flex: 1,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: "center",
        // alignItems:"center"


    },
    ModalView: {
        backgroundColor: colors.white,
        minHeight: 300,
        // width: "80%",
        borderRadius: 5,
        marginHorizontal: 20,
        padding: 10

    },
    ModalHeader: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent:"space-between"
    },
    Title: {
        fontWeight: "bold",
        fontSize: 20,
         
    }
})