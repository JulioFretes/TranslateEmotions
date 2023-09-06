import { StyleSheet, Text } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CONTAINER_CENTER } from "../../Theme/styles";


export default function Home() {
    return(
        <SafeAreaView style={styles.containter}>
            <Text>Página Home</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containter : CONTAINER_CENTER
})