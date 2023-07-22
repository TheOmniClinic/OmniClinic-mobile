import sytles from "./style";

function textType(properties: any, type?: string) {
    switch(type) {
        case 'xl': return sytles(properties).mainTitle;
        case 'l': return sytles(properties).sectionTitle;
        case 'm': return sytles(properties).subtitle;
        case 'xs': return sytles(properties).smallText;
        default: return sytles(properties).mainText;
    }
};

export default textType;