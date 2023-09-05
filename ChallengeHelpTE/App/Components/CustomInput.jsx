import { StyleSheet, Text, TextInput, View } from "react-native";
import { FONT_SIZE_14 } from "../Theme/tipografia";
import { COR_PADRAO, ERROR_COLOR, INPUT_COLOR, WHITE } from "../utils/constants";

export default function CustomInput({label, placeholder, value, onChange, secure=false, isInvalid=false }) {


    return(
        <View style={styles.container}>
            <Text style={styles.label}>{label}</Text>
            <TextInput
                style={[styles.input, {
                    borderColor : isInvalid ? ERROR_COLOR : COR_PADRAO
                }]}
                placeholder={placeholder}
                value={value}
                onChangeText={onChange}
                secureTextEntry={secure}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container : {
        width : '90%',
        paddingVertical : 5
    },

    input : {
        backgroundColor : INPUT_COLOR,
        padding : 5,
        borderRadius : 5,
        borderBottomWidth : 5,
        borderColor : COR_PADRAO,
        color : WHITE
    },
    inputError : {
        backgroundColor : INPUT_COLOR,
        padding : 5,
        borderRadius : 5,
        borderBottomWidth : 5,
        borderColor : ERROR_COLOR,
        color : WHITE
    },
    label : {
        fontSize : FONT_SIZE_14,
        paddingVertical : 5,
        fontWeight : '300'
    }

})