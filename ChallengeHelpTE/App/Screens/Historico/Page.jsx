import { StyleSheet } from "react-native";
import { CONTAINER_CENTER } from "../../Theme/styles";
import { View } from "react-native";
import ListaHistorico from "./Components/ListaHistorico/Page";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { useEffect, useState } from "react";

export default function Historico() {

    useEffect(() => {
        getUser();
    }, [])

    const [user, setUser] = useState({});

    const getUser = async () => {
       const userString =  await AsyncStorage.getItem('user');
       const user = JSON.parse(userString);
       setUser(user);
    }

    return(
        <View style={styles.containter}>
            <ListaHistorico user={user} getUser={getUser}/>
        </View>
    )
}

const styles = StyleSheet.create({
    containter : CONTAINER_CENTER
})