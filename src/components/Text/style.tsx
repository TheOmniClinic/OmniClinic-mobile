import { ColorValue, StyleSheet } from "react-native";

interface Props {
    light?: Boolean,
    color?: ColorValue,
}

const sytles = (prop: Props) => StyleSheet.create({
    mainTitle: {
        fontSize: 48,
        fontWeight: "bold",
        color: prop.light ? 'white' 
        : (prop.color ? prop.color : 'black'),
    },
    sectionTitle: {
        fontSize: 33,
        fontWeight: "bold",
        color: prop.light ? 'white' 
        : (prop.color ? prop.color : 'black'),
    },
    subtitle: {
        fontSize: 28,
        fontWeight: "700",
        color: prop.light ? 'white' 
        : (prop.color ? prop.color : 'black'),
    },
    mainText: {
        fontSize: 16,
        color: prop.light ? 'white' 
        : (prop.color ? prop.color : 'black'),
    },
    smallText: {
        fontSize: 13,
        color: prop.light ? 'white' 
        : (prop.color ? prop.color : 'black'),
    },
});

export default sytles;