import { StyleSheet, Text, View } from "react-native"
import { CONTAINER_CENTER } from "../../../Theme/styles"
import Botao from "../../../Components/Botao"
import { useNavigation } from "@react-navigation/native"
import { SafeAreaView } from "react-native-safe-area-context";
import { Picker } from '@react-native-picker/picker';
import { useState } from "react";
import { COR_PADRAO, INPUT_COLOR } from "../../../utils/constants";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { changeLanguage } from "i18next";
import { useTranslation } from "react-i18next";

export default function Linguagem() {

    const navigation = useNavigation();
    const { t } = useTranslation();

    const handleLinguagem = async (value) => {
        await AsyncStorage.setItem('linguagem', value)
        changeLanguage(value)
        navigation.navigate('PaginaInicial')
    }

    const [selectedValue, setSelectedValue] = useState('en');

    return(
        <SafeAreaView style={styles.containter}>
            <Text>Página de seleção da linguagem do APP</Text>

            <View style={styles.picker}>
                <Picker
                    selectedValue={selectedValue}
                    onValueChange={(itemValue, itemIndex) => setSelectedValue(itemValue)}
                >
                    <Picker.Item label="Português" value="pt" />
                    <Picker.Item label="English" value="en" />
                </Picker>
            </View>
            <View style={{width : '90%'}}>
                <Botao titulo={t('confirmar')} onPressBtn={()=>{handleLinguagem(selectedValue)}}/>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    containter : CONTAINER_CENTER,
    picker : {
        width : '90%', 
        backgroundColor: INPUT_COLOR,
        borderRadius : 15,
        borderBottomColor : COR_PADRAO,
        borderBottomWidth : 4
    }
})