import { ScrollView, StyleSheet, Text, View,  } from "react-native";
import { useState } from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import CustomInput from "../../Components/CustomInput";
import { CONTAINER_CENTER, CONTAINER_END } from "../../Theme/styles";
import Botao from "../../Components/Botao";
import { ERROR_COLOR, WHITE } from "../../utils/constants";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useTranslation } from "react-i18next";
import { useNavigation } from "@react-navigation/native";
import axios from 'axios';

const api = axios.create({baseURL: "https://helpte.azurewebsites.net/api"})

export default function Cadastro() {
    
    const { t } = useTranslation();
    const navigation = useNavigation();

    const schema = yup.object({
        nome: yup.string()
            .required(t('ER_nome')),
        email: yup.string()
            .email(t('ER_invalid_email'))
            .required(t('ER_email')),
        idade: yup.number()
            .typeError(t('ER_invalid_idade'))
            .integer(t('ER_int'))
            .positive(t('ER_positivo'))
            .max(100, t('ER_invalid_idade'))
            .required(t('ER_idade')),
        usuario: yup.string()
            .required(t('ER_user'))
            .min(4, t('ER_user_len')),
        senha: yup.string()
            .min(6, t('ER_senha_len'))
            .required(t('ER_senha'))
    })

    const {control, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const handleCadastro = (data) => {
        api.post("/registro", JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
        })
        navigation.navigate('Login')
    }


    return(
        <ScrollView style={{backgroundColor : WHITE}}>
            <SafeAreaView style={styles.container}>
                <Controller
                    control={control}
                    name="nome"
                    render={({ field : { onChange, onBlur, value } }) => (
                        <CustomInput label={t('nome')} placeholder={t('PH_nome')} onChange={onChange} value={value} isInvalid={errors.nome}/>
                    )}
                />
                {errors.nome && <Text style={styles.error}>{errors.nome?.message}</Text>}

                <Controller
                    control={control}
                    name="email"
                    render={({ field : { onChange, onBlur, value } }) => (
                        <CustomInput label={'Email'} placeholder={t('PH_email')} onChange={onChange} value={value} isInvalid={errors.email} type={'email-address'}/>
                    )}
                />
                {errors.email && <Text style={styles.error}>{errors.email?.message}</Text>}

                <Controller
                    control={control}
                    name="idade"
                    render={({ field : { onChange, onBlur, value } }) => (
                        <CustomInput label={t('idade')} placeholder={t('PH_idade')} onChange={onChange} value={value} isInvalid={errors.idade} type={"numeric"}/>
                    )}
                />
                {errors.idade !== undefined && <Text style={styles.error}>{errors.idade?.message}</Text>}
                    
                <Controller
                    control={control}
                    name="usuario"
                    render={({ field : { onChange, onBlur, value } }) => (
                        <CustomInput label={t('user')} placeholder={t('PH_user')} onChange={onChange} value={value} isInvalid={errors.usuario}/>
                    )}
                />
                {errors.usuario && <Text style={styles.error}>{errors.usuario?.message}</Text>}
                    
                <Controller
                    control={control}
                    name="senha"
                    render={({ field : { onChange, onBlur, value } }) => (
                        <CustomInput label={t('senha')} placeholder={t('PH_senha')} onChange={onChange} value={value} secure={true} isInvalid={errors.senha}/>
                    )}
                />
                {errors.senha && <Text style={styles.error}>{errors.senha?.message}</Text>}

                <View style={{width : '90%', paddingVertical : 15}}>
                        <Botao titulo={t('prox')} onPressBtn={handleSubmit(handleCadastro)}/>
                </View>
            </SafeAreaView>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    container : CONTAINER_CENTER,
    error : {
        color : ERROR_COLOR,
        alignSelf : 'flex-start',
        paddingLeft : '5%'
    }
})