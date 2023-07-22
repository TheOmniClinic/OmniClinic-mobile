import { ColorValue, StyleSheet } from "react-native";

interface Props {
    color: ColorValue,
    isFlat?: boolean,
    underline?: boolean,
    fontsize?: number,
}

const styles = ({ color, isFlat, underline, fontsize }: Props) => StyleSheet.create({
    buttonTitle: {
        color: isFlat ? 'white' : color,
        fontSize: fontsize || 20,
        textDecorationLine: underline ? 'underline' : 'none',
    },
    flatButton: {
        paddingHorizontal: 33,
        paddingVertical: 12,
        borderRadius: 5,
        backgroundColor: color,
    },
    outlinedButton: {
        paddingHorizontal: 33,
        paddingVertical: 12,
        borderRadius: 5,
        borderColor: color,
        borderWidth: 2,
    },
    textButton: {
        padding: 0,
        color: color,
    },

});

export default styles;