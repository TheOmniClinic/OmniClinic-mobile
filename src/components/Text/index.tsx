import React, { ReactNode } from "react";
import { ColorValue, Text } from "react-native";
import sytles from "./style";

interface Props {
    children: ReactNode,
    color?: ColorValue,
    light?: Boolean,
    type?: String,
}

export default function TextComponent(props: Props) {
    const properties = {light: props.light, color: props.color};
    const textStyle = () => {
        switch(props.type) {
            case 'mainTitle': return sytles(properties).mainTitle;
            case 'sectionTitle': return sytles(properties).sectionTitle;
            case 'subtitle': return sytles(properties).subtitle;
            case 'smallText': return sytles(properties).smallText;
            default: return sytles(properties).mainText;
        }
    };

    return <>
        <Text style={textStyle()}>
            {props.children}
        </Text>
    </>
}