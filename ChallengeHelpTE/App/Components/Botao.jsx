import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { BLACK, COR_PADRAO } from "../utils/constants";
import { FONT_SIZE_14 } from "../Theme/tipografia";

export default function Botao({titulo, onPressBtn, stroke}) {
    
    return(
        <View>
            <TouchableOpacity onPress={onPressBtn}>
                <View  style={[styles.botao, {
                    backgroundColor : stroke ? 'transparent' : COR_PADRAO,
                    borderColor : stroke? COR_PADRAO : BLACK
                }]}>
                    <Text style={styles.titulo}>{titulo}</Text>
                </View>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    botao : {
        backgroundColor : COR_PADRAO,
        padding : 15,
        borderRadius : 15,
        marginVertical : 10,
        borderWidth : 1,
        borderColor : BLACK,
    },
    titulo : {
        textAlign : 'center',
        fontSize : FONT_SIZE_14,
        fontWeight : '400'
    },
})