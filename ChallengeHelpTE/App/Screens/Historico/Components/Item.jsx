import { StyleSheet, Text, TouchableOpacity } from "react-native";
import { COR_BOTAO_ACAO } from "../../../utils/constants";
import { useNavigation } from "@react-navigation/native";

export default function Item(props) {
    //data hora frase tradução

    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.navigate('DetalhesHistorico', {...props})
    }
    return(
        <TouchableOpacity style={styles.container} onPress={handleNavigation}>
            <Text style={styles.itemData}>{props.data} - {props.hora}</Text>
            <Text numberOfLines={1}>{props.frase}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container : {
        backgroundColor : '#ddd',
        padding : 10,
        marginVertical : '2%',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : '#777'
    },
    itemData : {
        color : COR_BOTAO_ACAO
    },
    itemFrase : {
        color : '#777'
    }
})