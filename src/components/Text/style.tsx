import { ColorValue, StyleSheet } from "react-native";

interface Props {
    color?: ColorValue,
}

const sytles = ({ color }: Props) => StyleSheet.create({
    mainTitle: {
        fontSize: 48,
        fontWeight: "bold",
        color: color,
    },
    sectionTitle: {
        fontSize: 33,
        fontWeight: "bold",
        color:color,
    },
    subtitle: {
        fontSize: 28,
        fontWeight: "700",
        color:color,
    },
    mainText: {
        fontSize: 16,
        color:color,
    },
    smallText: {
        fontSize: 13,
        color:color,
    },
});

export default sytles;