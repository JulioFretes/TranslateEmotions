import { StyleSheet, Text, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import { CONTAINER_CENTER } from "../../Theme/styles";
import Botao from '../../Components/Botao';
import { useNavigation } from '@react-navigation/native'
 

export default function Home() {
    
    const navigation = useNavigation();
    
    return(
        <SafeAreaView style={styles.containter}>
            <Text>Página Home</Text>
            <View style={styles.btnContainer}>
                <Botao titulo ={'Histórico'} onPressBtn={() => {navigation.navigate('Histórico')}}/>
                <Botao titulo ={'Traduzir por Texto'} onPressBtn={() => {navigation.navigate('TextoInput')}}/>
                <Botao titulo ={'Traduzir por Áudio'}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containter : CONTAINER_CENTER,
    btnContainer : {
        width : '90%'
    }
})