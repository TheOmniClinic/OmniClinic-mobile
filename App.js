import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TextComponent from './src/components/Text';

import theme from './src/global/style/theme';
import ButtonConponent from './src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.primaryColorWheel[700]} />

      <TextComponent type='l'>OmniClinic</TextComponent>
      <ButtonConponent title='Entrar' secondary />

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
