import React from "react";
import { Text, TouchableOpacity, TouchableOpacityProps } from "react-native";

import theme from "../../global/style/theme";
import styles from "./style";
import buttonType from './lib';

interface Props extends TouchableOpacityProps {
    title: string,
    type?: "outlined" | "text",
    color?: string,
    secondary?: boolean,
    underline?: boolean,
    fontsize?: number,
}

export default function ButtonConponent(props: Props) {
    const properties = { 
        color:  props.secondary ? theme.baseSecondaryColor : (props.color || theme.basePrimaryColor),
        isFlat: props.type === 'outlined' || props.type === 'text' ? false : true,
        underline: props.underline,
        fontsize: props.fontsize,
    };
    
    return (
        <TouchableOpacity
            style={buttonType(properties, props.type)}
            onPress={props.onPress}
        > 
            <Text style={styles(properties).buttonTitle}>{props.title}</Text>
        </TouchableOpacity>
    );
}