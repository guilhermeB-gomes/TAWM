import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  // ADICIONE ESTE ESTILO:
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20
  },
  botao: {
    backgroundColor: '#000',
    padding: 15,
    margin: 10
  },
  textoBotao: {
    color: '#fff'
  }
});