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
const apiJava = axios.create({baseURL: "https://helpte.azurewebsites.net/api"})

export default function TextoInput () {

    const { t } = useTranslation();    
    const [modalVisible, setModalVisible] = useState(false);
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
                traducao: info.data,
                isDeletado: false
            }
            handleSave(dados);
            openModal();
        })
    }

    const handleSave = async (dados) => {
        const userString =  await AsyncStorage.getItem('user');
        const user = JSON.parse(userString);
        const token = await AsyncStorage.getItem('token');
        user.historicos = [...user.historicos, dados]
        user.authorities = null;
        apiJava.put(`/usuario`, JSON.stringify(user), {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': `Bearer ${token}`
            }
        }).then(async (response)=>{            
            const userString = JSON.stringify(response.data);
            await AsyncStorage.setItem('user', userString);
            setHistorico(dados);
        })
    }

    const handleEdit = async () => {
        const resposta = await AsyncStorage.getItem('cod_usuario')

        apiFlask.post("/tradutor", JSON.stringify({content: historico.frase}), {
            headers: {
              'Content-Type': 'application/json'
            }
        }).then((info)=>{
            setHistorico(prevHistorico => ({ ...prevHistorico, traducao: info.data }));
            apiJava.put(`/historico/${resposta}`, JSON.stringify(historico), {
                headers: {
                  'Content-Type': 'application/json'
                }
            })
        })
    }

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
                            <Text style={{width : '90%'}}>{historico.traducao}</Text>
                            <View style={{width : '90%'}}>
                                <Botao titulo={"FECHAR"} onPressBtn={closeModal}/>
                                <Botao titulo={"EDITAR"} onPressBtn={handleEdit} stroke={true}/>
                            </View>
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
