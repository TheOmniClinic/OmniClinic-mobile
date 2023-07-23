import React, { useState } from "react";

import TextComponent from "../../components/Text";
import ButtonConponent from "../../components/Button";
import AlertComponent from "../../components/Alert";
import showAlert from "../../components/Alert/lib";

export default function HomePage() {
    const [modalVisible, setModalVisible] = useState(false);

    return (
        <>
            <TextComponent type='m'>OmniClinic</TextComponent>
            <ButtonConponent
                title='Abrir alerta'
                onPress={() => showAlert(setModalVisible)}
                secondary
            />
            <ButtonConponent
                title='Ver status'
                type='text'
                underline
                secondary
                onPress={() => console.log('modal ' + modalVisible)}
            />
            <AlertComponent 
                modalVisible={modalVisible}
                text="E-mail ou senha não encontrados"
            />
        </>
    );
}