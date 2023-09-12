import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { COR_BOTAO_ACAO } from '../../../../utils/constants'
import { useNavigation } from "@react-navigation/native";
import axios from "axios";

const api = axios.create({baseURL: "http://localhost:8080"})

export default function Item({ onDelete, ...props }) {

    const navigation = useNavigation();

    const handleNavigation = () => {
        navigation.navigate('DetalhesHistorico', {...props})
    }

    const handleDelete = () => {
        api.delete(`/historico/${props.id}`, {
            headers: {
              'Content-Type': 'application/json'
            }
        }).then(()=>{
            onDelete();
        })
    }

    return(
        <View style={styles.row}>
            <TouchableOpacity onPress={handleNavigation}>
                <Text style={styles.itemData}>{props.data}</Text>
                <Text numberOfLines={1}>{props.frase}</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.delete}
                onPress={handleDelete}
            >
                <Text style={{textAlign : 'center'}}>Deletar</Text>
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    itemData : {
        color : COR_BOTAO_ACAO
    },
    itemFrase : {
        color : '#777'
    },
    row : {
        flex : 1,
        flexDirection : 'row',
        backgroundColor : '#ddd',
        padding : 10,
        marginVertical : '2%',
        borderRadius : 5,
        borderWidth : 1,
        borderColor : '#777',
        justifyContent : 'space-between'
    },
    delete : {
        backgroundColor : 'tomato',
        borderRadius : 10,
        borderWidth : 1,
        padding : 10
    }
})