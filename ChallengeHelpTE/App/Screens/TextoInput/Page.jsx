import CustomInput from "../../Components/CustomInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import Botao from "../../Components/Botao";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { useState } from "react";
import { StyleSheet, View, Modal, Text } from "react-native";
import { CONTAINER_CENTER } from "../../Theme/styles";
import AsyncStorage from "@react-native-async-storage/async-storage";

const apiFlask = axios.create({baseURL: "http://localhost:5000"})
const apiJava = axios.create({baseURL: "http://localhost:8080"})

export default function TextoInput () {

    const { t } = useTranslation();    

    const [historico, setHistorico] = useState({});
    
    const {control, handleSubmit, formState:{ errors }} = useForm({

    })

    const handleInput = (data) => {
        apiFlask.post("/tradutor", JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
        }).then((info)=>{
            const dados = {
                dataHora: new Date().toISOString(),
                frase: data.content,
                traducao: info.data
            }
            setHistorico(dados);
            handleSalvar(dados);            
            openModal()
        })
    }

    const handleSalvar = async (dados) => {
        const resposta = await AsyncStorage.getItem('cod_usuario')
        apiJava.post(`/historico/${resposta}`, JSON.stringify(dados), {
            headers: {
              'Content-Type': 'application/json'
            }
        })
    }

    const [modalVisible, setModalVisible] = useState(false);


    const openModal = () => {
        setModalVisible(true);
      };
      
      const closeModal = () => {
        setModalVisible(false);
      };
      

    return(
        <SafeAreaView style={styles.container}>
            <Controller
                    control={control}
                    name="content"
                    render={({ field : { onChange, onBlur, value } }) => (
                        <CustomInput label={'Digite um texto:'} onChange={onChange} value={value}/>
                    )}
                />

                <Modal
                    animationType="fade"
                    transparent={false}
                    visible={modalVisible}
                    >
                        <View style={styles.modal}>
                            <Text>{historico.traducao}</Text>
                            <View style={{width : '90%'}}><Botao titulo={"Fechar"} onPressBtn={()=>{closeModal()}}/></View>
                        </View>
                    </Modal>
           <View style={styles.btnView}>
                <Botao titulo={t('confirmar')} onPressBtn={handleSubmit(handleInput)}/>
           </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container : CONTAINER_CENTER,
    btnView : {
        width : '90%',
        marginVertical : '5%'
    },
    modal : {
        flex : 1,
        justifyContent : 'center',
        alignItems : 'center',
    }
})
