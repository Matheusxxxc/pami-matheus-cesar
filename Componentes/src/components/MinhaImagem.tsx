import { Image } from 'react-native';

const MinhaImagem = ({ urlImagem, largura, altura }) => {

  const imagemStyle = {
    width: largura,
    height: altura,
  };

  return (
    <Image
      source={{ uri: urlImagem }}
      style={imagemStyle}
    />
  );
};

export default MinhaImagem;