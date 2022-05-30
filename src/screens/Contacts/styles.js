
import { StyleSheet } from "react-native";
import colors from "../../assets/themes/colors"
export default StyleSheet.create({
    NoData: {
        alignItems: "center"
    },

    screen: {
    },
    floatingActionButton: {
        backgroundColor: "red",
        width: 55,
        height: 55,
        position: "absolute",
        bottom: 45,
        right: 5,
        borderRadius: 100,
        justifyContent: "center",
        alignItems: "center",
        fontWeight: "bold"
    },
    avatar: {
        width: 50,
        height: 50,
        borderRadius: 100

    },
    itemContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginVertical: 10,
        justifyContent: "space-between",
        paddingHorizontal:20
        
    },
    item: {
        flexDirection: "row",
        alignItems: "center",
    },
    name: {
        paddingHorizontal: 5
    },


})