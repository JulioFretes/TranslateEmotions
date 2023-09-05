import { SafeAreaView, ScrollView, StyleSheet, Text, View,  } from "react-native";
import CustomInput from "../../Components/CustomInput";
import { CONTAINER_CENTER, CONTAINER_END } from "../../Theme/styles";
import Botao from "../../Components/Botao";
import { ERROR_COLOR, WHITE } from "../../utils/constants";
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import * as yup from 'yup'
import { useTranslation } from "react-i18next";

export default function Cadastro() {

    const schema = yup.object({
        nome: yup.string()
            .required("Informe seu nome"),
        email: yup.string()
            .email('Por favor, insira um endereço de email válido.')
            .required('O email é obrigatório.'),
        idade: yup.number()
            .typeError('Informe um número válido')
            .integer("Deve ser um número inteiro")
            .positive("Deve ser um número positivo")
            .max(100, "Uma idade muito alta não acha?")
            .required("Informe sua idade"),
        usuario: yup.string()
            .required("Informe seu usuário")
            .min(4, "Usuário deve conter no minimo 4 dígitos"),
        senha: yup.string()
            .required("Informe uma senha")
    })

    const {control, handleSubmit, formState:{ errors }} = useForm({
        resolver: yupResolver(schema)
    })

    const handleCadastro = (data) => {
        console.log(data)
    }

    const { t } = useTranslation();

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
                        <CustomInput label={t('idade')} placeholder={"Exemplo: 25"} onChange={onChange} value={value} isInvalid={errors.idade} type={"numeric"}/>
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