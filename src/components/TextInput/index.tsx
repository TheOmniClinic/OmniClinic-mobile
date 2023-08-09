import React, { useState } from "react";
import { TextInput, View, Text, TouchableOpacity } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons';
import styles from "./style";

interface Props {
    value: string,
    onChangeValue(newValue: string): void,
    placeholder?: string,
    errorMsg?: string,
    isPassword?: boolean,
}

export default function TextInputComponent(props: Props) {
    const error = props.errorMsg != null;
    const [visibility, setVisibility] = useState(props.isPassword);
    
    return <>
        <View style={styles({error}).div}>
            <TextInput
                style={styles({error}).inputContainer}
                value={props.value}
                onChangeText={(newValue) => props.onChangeValue(newValue)}
                placeholder={props.placeholder}
                secureTextEntry={visibility}
            />
            {
                props.isPassword ? (
                    <TouchableOpacity
                        onPress={() => setVisibility(!visibility)}
                    >
                        <MaterialCommunityIcons name={visibility ? "eye" : "eye-off"} size={30} color='#999999' />
                    </TouchableOpacity>
                ) : null
            }
        </View>
        {
            error ? (
                <View style={styles({error}).alert}>
                    <MaterialCommunityIcons name="alert" size={20} color={"white"} />
                    <Text style={styles({error}).alertText}>{ props.errorMsg }</Text>
                </View>
            ) : null
        }
    </>
}