import { Dimensions, StyleSheet } from "react-native";
import { PRIMARY_COLOR, SECONDARY_COLOR } from "./consts/Constans";

const { width, height } = Dimensions.get('window');
export const styles = StyleSheet.create({
    
    titleStar:{ //titulo principal
        fontSize: 24,
        fontWeight: "bold",
        color: "white",
        textAlign: "center"
    },
    title:{ //pagina
        color: PRIMARY_COLOR,
        fontSize: 48,
        paddingHorizontal:40,
        textAlign: "center",
        paddingTop: 45,
        fontFamily: "Arial", //Fuente de letra
        fontWeight: "bold" // se utiliza para ver el titulo en negrillas
    },
    body:{ //pagina
        backgroundColor: SECONDARY_COLOR,
        borderTopLeftRadius: 30,
        borderTopRightRadius: 30,
        paddingHorizontal: 30,
        
        paddingTop: 20        
    },
    imagenCentro:{
        width: width * 0.8, 
        height: height * 0.4 ,
        borderRadius:100,
        alignItems:"center",
        
    },
    buttonFrom:{
        backgroundColor: PRIMARY_COLOR,
        paddingVertical: 15,
        borderRadius:20,
    },
    buttonForText:{
        textAlign:"center",
        fontSize: 14,
        fontWeight: "bold",
        color: SECONDARY_COLOR
    },
    inputText: {
        backgroundColor: PRIMARY_COLOR,
        borderRadius: 10,
        marginVertical: 7,
        textAlign: "center"
    },
    separacion:{
        marginBottom: 10,
        marginTop: 20,
        color: "white",
        fontWeight:"bold",
        //alignItems:"center",
        textAlign:"center"


    }
})

