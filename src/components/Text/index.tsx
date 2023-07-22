import React, { ReactNode } from "react";
import { Text } from "react-native";

import textType from "./lib";

interface Props {
    children: ReactNode,
    color?: string,
    light?: boolean,
    type?: 'xl' | 'l' | 'm' | 'xs',
}

export default function TextComponent(props: Props) {
    const properties = { color: props.light ? 'white'  : (props.color || 'black') };

    return (
        <Text style={textType(properties, props.type)}>
            {props.children}
        </Text>
    );
}