import { StyleSheet } from "react-native";
import theme from "../../global/style/theme";

interface Props {
    color?: string,
    dark?: boolean,
    warn?: boolean,
}

const styles = ({ color, dark, warn }: Props) => StyleSheet.create({
    centeredView: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    modalView: {
        backgroundColor: warn ? theme.baseWarnColor : (color || theme.baseErrorColor),
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        borderTopLeftRadius: 8,
        borderTopRightRadius: 8,
        paddingVertical: 16,
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5,
    },
    modalIcon: {
        marginRight: 16,
    },
    modalText: {
        textAlign: 'center',
        color: dark ? 'black' : 'white',
        fontSize: 16,
    },
});

export default styles;