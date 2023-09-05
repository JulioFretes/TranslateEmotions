import { SafeAreaView, ScrollView, StyleSheet, View,  } from "react-native";
import CustomInput from "../../Components/CustomInput";
import { CONTAINER_CENTER, CONTAINER_END } from "../../Theme/styles";
import Botao from "../../Components/Botao";
import { WHITE } from "../../utils/constants";

export default function Cadastro() {
    return(
        <ScrollView style={{backgroundColor : WHITE}}>
            <SafeAreaView style={styles.container}>
                <CustomInput label={'Nome'}/>
                <CustomInput label={'Email'}/>
                <CustomInput label={'Nome de Usuário'}/>
                <CustomInput label={'Senha'}/>
                <View style={{width : '90%', paddingVertical : 15}}>
                        <Botao titulo={'PRÓXIMO'}/>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : CONTAINER_CENTER
})