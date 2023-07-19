import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TextComponent from './src/components/Text';

import theme from './src/global/style/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.primaryColorWheel[700]} />

      <TextComponent type={'mainTitle'}>Título de destaque</TextComponent>
      <TextComponent type={'sectionTitle'} color={theme.basePrimaryColor}>Título de seção</TextComponent>
      <TextComponent type={'subtitle'} color={theme.baseSecondaryColor}>Subtitulo</TextComponent>
      <TextComponent light>Parágrafo</TextComponent>
      <TextComponent type={'smallText'} color={theme.baseErrorColor}>Legenda</TextComponent>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ccc',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
