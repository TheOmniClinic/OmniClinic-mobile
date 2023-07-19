import React, { ReactNode } from "react";
import { Text } from "react-native";

interface Props {
    children: ReactNode
}

export default function TextComponent({ children }: Props) {
    return <>
        <Text>{children}</Text>
    </>
}