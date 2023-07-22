import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';
import TextComponent from './src/components/Text';

import theme from './src/global/style/theme';
import ButtonConponent from './src/components/Button';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar barStyle={'light-content'} backgroundColor={theme.primaryColorWheel[700]} />

      <TextComponent type={'subtitle'}>OmniClinic</TextComponent>
      <ButtonConponent 
        onPress={() => { console.log('click') }}
        title='Botão'
      />
      <ButtonConponent 
        onPress={() => { console.log('click') }}
        title='Botão'
        type='outlined'
        secondary
      />
      <ButtonConponent 
        onPress={() => { console.log('click') }}
        title='Botão'
        type='text'
        secondary
      />
      <ButtonConponent 
        onPress={() => { console.log('click') }}
        title='Botão'
        type='text'
        color='#f00'
        underline
      />

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
