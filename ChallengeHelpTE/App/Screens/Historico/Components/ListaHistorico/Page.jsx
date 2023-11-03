import axios from "axios";
import { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, RefreshControl } from "react-native";
import Item from "../Item/Item";
import { CONTAINER_CENTER } from "../../../../Theme/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

function formataData (data) {
    const stringData = String(data)
    return `${stringData.substring(8, 10)}/${stringData.substring(5, 7)}/${stringData.substring(0, 4)}`
}

// const api = axios.create({baseURL: "https://helpte.azurewebsites.net/api"})

export default function ListaHistorico({ user }) {

    return(
        <View style={styles.container}>
            <FlatList
                data={user.historicos}
                renderItem={({ item }) => <Item {...item}/>}
                keyExtractor={(item) => item.id}
            /> 
        </View>  
    )
} 

//     const getUsuario =  () => {
//         api.get(`/historico/${resposta}`, {
//             headers: {
//               'Content-Type': 'application/json'
//             }
//         })
//         .then((response)=>{
//             setData([]);
//             response.data.forEach(element => {

//                 let data = new Date(element.dataHora);
//                 let dia = data.getDate().toString().padStart(2, '0');
//                 let mes = (data.getMonth() + 1).toString().padStart(2, '0');
//                 let ano = data.getFullYear();

//                 const dados = {
//                     data: `${dia}/${mes}/${ano}`,
//                     frase: element.frase,
//                     traducao: element.traducao,
//                     id: element.codigo
//                 }
//                 setData(prevData => [...prevData, dados]);
//             })
//         })
//     }

// }

const styles = StyleSheet.create({
    container : {
        width : '90%'
    }
})