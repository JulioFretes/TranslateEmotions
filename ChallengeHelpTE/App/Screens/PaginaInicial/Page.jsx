import { StyleSheet, View } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";
import Header from "../../Components/Header";
import Botao from "../../Components/Botao";
import { useNavigation } from "@react-navigation/native";
import { CONTAINER } from "../../Theme/styles";
import { useTranslation } from 'react-i18next';

export default function PaginaInicial() {
    
    const navigation = useNavigation();

    const { t } = useTranslation();

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
                <Botao titulo={t('login')} onPressBtn={navegarLogin}/>
                <Botao titulo={t('cadastro')} onPressBtn={navegarCadastro} stroke={true}/>
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