
import { StyleSheet } from "react-native";
import colors from "../../../assets/themes/colors"
export default StyleSheet.create({
    messageContainer: {
    // paddingHorizontal:5,
    backgroundColor:"red",
    borderRadius:6,
    paddingVertical:15,
    marginVertical: 5,
    paddingHorizontal:15,
    justifyContent:"center",
    },
    messageSection: {
        flexDirection: "row",
        justifyContent:"space-between"
    },
    message:{
        color:"white" 
    },

    retrySection: {
        
    },
    retryText: {
        color:"white"
    },
    dismissSection: {
        
    },
    dismissText: {
        color: "white",
    }

    
})