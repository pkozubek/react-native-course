import { StyleSheet } from "react-native";
import { colors } from "./colors";

const sharedStyles = StyleSheet.create({
    container: {
        backgroundColor: "black",
        flex: 1,
        padding: 8,
    },  
    header: {
        color: "white",
        marginTop: 32,
        textAlign: "center",
        fontSize: 22,
    },
    subHeader: {
      fontSize: 14,
      color: colors.lightGreen,
      textAlign: "center",
      marginTop: 4,
    },
    normalText: {
      fontSize: 14,
      color: colors.white,
      textAlign: "center",
    },
    buttonContainer: {
      width: "80%",
      marginLeft: "auto",
      marginRight: "auto",
    },
    alignContentCenter: {
      alignItems: 'center',
      justifyContent: 'center'
    }
});

export default sharedStyles;