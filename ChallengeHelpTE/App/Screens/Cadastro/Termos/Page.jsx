import { StyleSheet, Text } from "react-native";
import { CONTAINER_CENTER } from "../../../Theme/styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Termos() {
    return(
        <SafeAreaView style={styles.containter}>
            <Text>Pagina dos termos</Text>
        </SafeAreaView>
    )
}
const styles = StyleSheet.create({
    containter : CONTAINER_CENTER
})