import { StyleSheet, Text, View } from "react-native"
import { CONTAINER_CENTER } from "../../../Theme/styles"
import Botao from "../../../Components/Botao"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context";

export default function Linguagem() {

    const navigation = useNavigation();

    const handleLinguagem = () => {
        navigation.navigate('Termos')
    }

    return(
        <SafeAreaView style={styles.containter}>
            <Text>Página de seleção da linguagem do APP</Text>
            <View style={{width : '90%'}}>
                <Botao titulo={'Confirmar'} onPressBtn={handleLinguagem}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containter : CONTAINER_CENTER
})