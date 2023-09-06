import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import BotaoAudio from "../../Components/BotaoAudio";
import { CONTAINER_CENTER, CONTAINER_END } from "../../Theme/styles";

export default function Dialogo() {
    return(
        <SafeAreaView style={styles.container}>
            <Text>TEste</Text>
            <BotaoAudio/>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : CONTAINER_END
})