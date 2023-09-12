import axios from "axios";
import { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, RefreshControl } from "react-native";
import Item from "../Item/Item";
import { CONTAINER_CENTER } from "../../../../Theme/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({baseURL: "http://localhost:8080"})

export default function ListaHistorico() {

    const [data, setData] = useState([]);

    useEffect(() => {
        getHistorico();
    },[])

    const getHistorico = async () => {
        const resposta = await AsyncStorage.getItem('cod_usuario')
        api.get(`/historico/${resposta}`, {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        .then((response)=>{
            setData([]);
            response.data.forEach(element => {

                let data = new Date(element.dataHora);
                let dia = data.getDate().toString().padStart(2, '0');
                let mes = (data.getMonth() + 1).toString().padStart(2, '0');
                let ano = data.getFullYear();

                const dados = {
                    data: `${dia}/${mes}/${ano}`,
                    frase: element.frase,
                    traducao: element.traducao,
                    id: element.codigo
                }
                setData(prevData => [...prevData, dados]);
            })
        })
    }

    return(
        <View style={styles.container}>
            <FlatList
                data={data}
                renderItem={({ item }) => <Item {...item} onDelete={getHistorico}/>}
                keyExtractor={(item) => item.id}
            /> 
        </View>  
    )
}

const styles = StyleSheet.create({
    container : {
        width : '90%'
    }
})