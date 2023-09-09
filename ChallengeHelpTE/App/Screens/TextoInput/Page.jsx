import CustomInput from "../../Components/CustomInput";
import { SafeAreaView } from "react-native-safe-area-context";
import { useTranslation } from "react-i18next";
import Botao from "../../Components/Botao";
import { useForm, Controller } from 'react-hook-form';
import axios from "axios";
import { useState } from "react";

const api = axios.create({baseURL: "http://localhost:5000"})

export default function TextoInput () {

    const { t } = useTranslation();    

    const [data, setData] = useState('');
    
    const {control, handleSubmit, formState:{ errors }} = useForm({

    })

    const handleInput = (data) => {
        api.post("/tradutor", JSON.stringify(data), {
            headers: {
              'Content-Type': 'application/json'
            }
        }).then((info)=>{
            console.log(info)
            setData(info)
        })
    }

    return(
        <SafeAreaView>
            <Controller
                    control={control}
                    name="content"
                    render={({ field : { onChange, onBlur, value } }) => (
                        <CustomInput label={'Digite um texto:'} onChange={onChange} value={value}/>
                    )}
                />
            <Botao titulo={t('confirmar')} onPressBtn={handleSubmit(handleInput)}/>
        </SafeAreaView>
    )
}
