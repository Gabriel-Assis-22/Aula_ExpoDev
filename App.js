import { StatusBar } from 'expo-status-bar';
import { StyleSheet, View } from 'react-native';

// import Mensagem from './src/ex2';
// import Atividade1 from './src/atividade_1';
// import Exemplo_3 from './src/ex3';
// import Atividade_3 from './src/atividade 3';

import Exemplo4 from './src/exemplo4';


export default function App() {
  return (
    <View style={styles.container}>
      <Exemplo4/>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'orange',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 18,

  },
});