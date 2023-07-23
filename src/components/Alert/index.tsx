import React, { ReactNode } from "react";
import { View, Text, Modal } from "react-native";
import styles from "./style";
import { Foundation } from '@expo/vector-icons'; 

interface Props {
    modalVisible: boolean,
    text: string,
    icon?: ReactNode,
    color?: string,
    dark?: boolean,
    warn?: boolean,
}

export default function AlertComponent(props: Props) {
    const properties = { color: props.color, dark: props.dark, warn: props.warn };

    return (
        <Modal
            transparent
            animationType="slide"
            visible={props.modalVisible}
        >
            <View style={styles(properties).centeredView}>
                <View style={styles(properties).modalView}>
                    <View style={styles(properties).modalIcon}>
                        { props.icon || 
                        <Foundation name="alert" size={30} color={props.dark ? "black" : "white"} /> }
                    </View>
                    <Text style={styles(properties).modalText}>{ props.text }</Text>
                </View>
            </View>
        </Modal>
    );
}
