import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TextComponent from './src/components/Text';

import theme from './src/global/style/theme';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.primaryColorWheel[700]} />
      <TextComponent>OmniClinic</TextComponent>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
