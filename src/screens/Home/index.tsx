import React, { useState } from "react";

import TextComponent from "../../components/Text";
import ButtonConponent from "../../components/Button";
import AlertComponent from "../../components/Alert";
import showAlert from "../../components/Alert/lib";
import TextInputComponent from "../../components/TextInput";

export default function HomePage() {
    const [modalVisible, setModalVisible] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    
    function isEmailValid(text: string) {
        if (text === "") return true;
        const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i;
        return emailRegex.test(text);
    }

    function isPasswordStrong(text: string, limit: number) {
        return text.length > 0 && text.length < limit ? true : false;
    }

    return (
        <>
            <TextComponent type='m' light>OmniClinic</TextComponent>
            <TextComponent> </TextComponent>
            <TextInputComponent
                value={email}
                onChangeValue={(newValue) => setEmail(newValue)}
                placeholder={"E-mail"}
                errorMsg={ 
                    isEmailValid(email) ? undefined : "E-mail inválido" 
                }
            />
            <TextComponent> </TextComponent>
            <TextInputComponent
                isPassword
                value={password}
                onChangeValue={(newValue) => setPassword(newValue)}
                placeholder={"Senha"}
                errorMsg={ 
                    isPasswordStrong(password, 8) ? "A senha precisa de pelo menos 8 caracteres" : undefined 
                }
            />
            <TextComponent> </TextComponent>
            <ButtonConponent
                title='Ver status'
                type='text'
                underline
                secondary
                onPress={() => console.log(isEmailValid(email)?.toString())}
            />
            <TextComponent> </TextComponent>
            <ButtonConponent
                title='Abrir alerta'
                onPress={() => showAlert(setModalVisible)}
                secondary
            />
            <AlertComponent 
                modalVisible={modalVisible}
                text="E-mail ou senha não encontrados"
            />
        </>
    );
}