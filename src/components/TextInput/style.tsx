import { StyleSheet } from "react-native";
import theme from "../../global/style/theme";

interface Props {
    error?: boolean,
}

const styles = ({ error }: Props) => StyleSheet.create({
    div: {
        flexDirection: "row",
        justifyContent: "space-between",
        backgroundColor: "white",
        borderRadius: 8,
        borderColor: error ? theme.baseErrorColor : "white",
        borderWidth: 3,
        width: 328,
        padding: 16,
    },
    inputContainer: {
        fontSize: 16,
        paddingRight: 4,
        flex: 1,
    },
    alert: {
        backgroundColor: theme.baseErrorColor,
        width: 328,
        marginTop: -8,
        paddingVertical: 12,
        borderBottomLeftRadius: 8,
        borderBottomRightRadius: 8,
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
    },
    alertText: {
        color: "white",
        marginLeft: 8,
        fontSize: 13,
    },
});

export default styles;