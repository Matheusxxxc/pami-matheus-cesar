import { Text } from 'react-native';

const MeuTexto = ({ conteudo, cor, tamanho }) => {

  const textoStyle = {
    color: cor,
    fontSize: tamanho,
    margin: 5,
  };

  return (
    <Text style={textoStyle}>
      {conteudo}
    </Text>
  );
};

export default MeuTexto;