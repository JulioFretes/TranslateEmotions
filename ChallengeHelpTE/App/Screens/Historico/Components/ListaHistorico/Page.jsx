import axios from "axios";
import { useState, useEffect } from "react";
import { FlatList, StyleSheet, View, RefreshControl } from "react-native";
import Item from "../Item/Item";
import { CONTAINER_CENTER } from "../../../../Theme/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const api = axios.create({baseURL: "https://helpte.azurewebsites.net/api"})

export default function ListaHistorico({ user, getUser }) {

    const handleDelete = async (index) => {        
        const token = await AsyncStorage.getItem('token');
        user.historicos[index].isDeletado = true
        user.authorities = null;
        api.put(`/usuario`, JSON.stringify(user), {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
        }).then(async (response)=>{            
            const userString = JSON.stringify(response.data);
            await AsyncStorage.setItem('user', userString);
            getUser();
        })
    };

    return(
        <View style={styles.container}>
            <FlatList
                data={user.historicos}
                renderItem={({ item, index }) => {
                    if (!item.isDeletado) {
                        return <Item {...item} index={index} onDelete={handleDelete} />;
                    } else {
                        return null;
                    }
                }}
            />
        </View>  
    )
}

const styles = StyleSheet.create({
    container : {
        width : '90%'
    }
})