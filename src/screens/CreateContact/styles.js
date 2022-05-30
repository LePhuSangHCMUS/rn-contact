
import { StyleSheet } from "react-native";
import colors from "../../assets/themes/colors"
export default StyleSheet.create({
    screen: {
        justifyContent: "center"
    },
    userDefault: {
        width: 150,
        height: 150,
        alignSelf: "center",
        borderRadius: 100
        
    },
    chooseText: {
        fontWeight: "bold",
        textAlign: "center",
        fontSize: 20,
        color: colors.primary,
        marginTop: 20,
        marginBottom: 20
    },
    optionItem: {
        flexDirection: "row",
        marginVertical: 20,
        alignItems:"center"
    },
    optionLabel: {
        paddingHorizontal: 5,
         
    },
    optionContainer: {
         padding:20
    }


})