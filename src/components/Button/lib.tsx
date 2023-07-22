import styles from "./style";

function buttonType(properties: any, type?: string) {
    if (type === 'outlined') {
        return styles(properties).outlinedButton;
    } else if(type === 'text') {
        return styles(properties).textButton;
    } else {
        return styles(properties).flatButton;
    }
}

export default buttonType