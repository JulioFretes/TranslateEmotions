import axios from "axios";
import { useState } from "react";
import { FlatList, StyleSheet, View } from "react-native";
import Item from "../Item";
import { CONTAINER_CENTER } from "../../../../Theme/styles";

export default function ListaHistorico() {

    const dados = [{
        data : '03/01/2023',
        hora : '12:00',
        frase : 'Frase qualquer para teste Tradução qualquer para teste teste tes testeteste teste testeteste teste testetesteteste',
        traducao : 'Tradução qualquer para teste teste tes testeteste teste testeteste teste testetesteteste'
    },
    {
        data : '04/01/2023',
        hora : '12:00',
        frase : 'Frase qualquer para teste',
        traducao : 'Tradução qualquer para teste'
    },
    {
        data : '03/01/2023',
        hora : '12:00',
        frase : 'Frase qualquer para teste',
        traducao : 'Tradução qualquer para teste'
    },
    {
        data : '03/01/2023',
        hora : '12:00',
        frase : 'Frase qualquer para teste',
        traducao : 'Tradução qualquer para teste'
    },
    {
        data : '03/01/2023',
        hora : '12:00',
        frase : 'Frase qualquer para teste',
        traducao : 'Tradução qualquer para teste'
    },
    {
        data : '03/01/2023',
        hora : '12:00',
        frase : 'Frase qualquer para teste Tradução qualquer para teste teste tes testeteste teste testeteste teste testetesteteste',
        traducao : 'Tradução qualquer para teste teste tes testeteste teste testeteste teste testetesteteste'
    },
    {
        data : '03/01/2023',
        hora : '12:00',
        frase : 'Frase qualquer para teste',
        traducao : 'Tradução qualquer para teste'
    },
    {
        data : '03/01/2023',
        hora : '12:00',
        frase : 'Frase qualquer para teste',
        traducao : 'Tradução qualquer para teste'
    },
    {
        data : '03/01/2023',
        hora : '12:00',
        frase : 'Frase qualquer para teste',
        traducao : 'Tradução qualquer para teste'
    },
    {
        data : '03/01/2023',
        hora : '12:00',
        frase : 'Frase qualquer para teste',
        traducao : 'Tradução qualquer para teste'
    },
]

    const [data, setData] = useState([]);

    const api = axios.create({baseURL: "http://localhost:8080"})

    // const getHistorico = async () => {
    //     api.get("/historico")
    //         .then((data) =>{
    //             setData(data)
    //         }
    //     )
    // }


    return(
        <View style={styles.container}>
            <FlatList
                data={dados}
                renderItem={({ item }) => <Item {...item} />}
                // keyExtractor={(item) => item.id}
            /> 
        </View>  
    )
}

const styles = StyleSheet.create({
    container : {
        width : '90%'
    }
})