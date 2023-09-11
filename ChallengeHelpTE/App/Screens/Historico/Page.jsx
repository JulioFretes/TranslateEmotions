import { StyleSheet } from "react-native";
import { CONTAINER_CENTER } from "../../Theme/styles";
import { View } from "react-native";
import ListaHistorico from "./Components/ListaHistorico/Page";

export default function Historico() {
    
    return(
        <View style={styles.containter}>
            <ListaHistorico/>
        </View>
    )
}

const styles = StyleSheet.create({
    containter : CONTAINER_CENTER
})