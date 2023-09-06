import { StyleSheet, Text } from "react-native";
import { CONTAINER_CENTER } from "../../Theme/styles";
import { SafeAreaView } from "react-native-safe-area-context";

export default function Historico() {
    return(
        <SafeAreaView style={styles.containter}>
            <Text>Página de hisótico das frases já avaliadas</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containter : CONTAINER_CENTER
})