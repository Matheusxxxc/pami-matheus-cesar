import { View, Image, Text } from 'react-native';

const MeuCard = ({ urlImagem, nome, descricao }) => {

  const containerStyle = {
    alignItems: 'center',
    padding: 10,
    margin: 10,
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
  };

  const imagemStyle = {
    width: 100,
    height: 100,
    borderRadius: 50,
  };

  const nomeStyle = {
    fontSize: 18,
    fontWeight: 'bold',
    marginTop: 5,
  };

  const descStyle = {
    fontSize: 14,
    color: 'gray',
  };

  return (
    <View style={containerStyle}>
      <Image
        source={{ uri: urlImagem }}
        style={imagemStyle}
      />

      <Text style={nomeStyle}>
        {nome}
      </Text>

      <Text style={descStyle}>
        {descricao}
      </Text>
    </View>
  );
};

export default MeuCard;