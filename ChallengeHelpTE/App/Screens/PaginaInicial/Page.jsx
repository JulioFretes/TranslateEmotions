import { SafeAreaView, StyleSheet, View } from "react-native";
import Header from "../../Components/Header";
import Botao from "../../Components/Botao";
import { useNavigation } from "@react-navigation/native";
import { CONTAINER } from "../../Theme/styles";

export default function PaginaInicial() {
    
    const navigation = useNavigation();

    const navegarLogin = () => {
        navigation.navigate("Login");
    }

    const navegarCadastro = () => {
        navigation.navigate("Cadastro")
    }

    return(
        <SafeAreaView style={styles.content}>
            <Header/>
            <View style={styles.btnCointainer}>
                <Botao titulo={'ENTRAR'} onPressBtn={navegarLogin}/>
                <Botao titulo={'CADASTRO'} onPressBtn={navegarCadastro} stroke={true}/>
            </View>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    content : CONTAINER,
    btnCointainer : {
        width : "90%",
        justifyContent : 'flex-end',
        paddingVertical : 50
    },
    
})