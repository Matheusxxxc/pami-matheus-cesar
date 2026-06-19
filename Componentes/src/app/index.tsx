import { View, StyleSheet } from 'react-native';

import MeuBotaozinho from '../components/MeuBotaozinho';
import MinhaImagem from '../components/MinhaImagem';
import MeuTexto from '../components/MeuTexto';
import MeuCard from '../components/MeuCard';

export default function Home() {

  const teste = () => {
    console.log('Entenderam?');
  };

  const testeii = () => {
    console.log('Outro teste');
  };

  const testeiii = () => {
    console.log('Teste final');
  };

  return (
    <View style={styles.container}>

      
      <MinhaImagem
        urlImagem="https://reactnative.dev/img/tiny_logo.png"
        largura={120}
        altura={120}
      />

      
      <MeuTexto
        conteudo="React Native"
        cor="blue"
        tamanho={22}
      />

      <MeuTexto
        conteudo="Clique abaixo"
        cor="green"
        tamanho={18}
      />

      
      <MeuBotaozinho
        etiqueta="Botão UM"
        corFundo="green"
        funcao={teste}
      />

      <MeuBotaozinho
        etiqueta="Clique pra testar"
        corFundo="red"
        funcao={teste}
      />

      <MeuBotaozinho
        etiqueta="Último botão"
        corFundo="pink"
        funcao={testeii}
      />

      <MeuBotaozinho
        etiqueta="Entrar"
        corFundo="cyan"
        funcao={testeiii}
      />

      
      <MeuCard
        urlImagem="https://reactnative.dev/img/tiny_logo.png"
        nome="Matheus Cesar"
        descricao="Desenvolvedor"
      />

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});