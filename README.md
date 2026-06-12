# pami-matheus-cesar
Repositório para as aulas de Programação de Aplicativos Mobile I com o prof. João Siles

Olá tudo bom?

# StickerSmash

## Descrição

O StickerSmash é um aplicativo desenvolvido com React Native e Expo que permite ao usuário selecionar uma imagem da galeria do dispositivo, adicionar stickers personalizados e compartilhar o resultado final. O projeto foi desenvolvido com o objetivo de praticar conceitos de desenvolvimento mobile, manipulação de imagens e utilização de bibliotecas do ecossistema Expo.

---

## Como o Projeto Foi Desenvolvido

### 1. Criação do Projeto

O projeto foi iniciado utilizando o Expo, que forneceu toda a estrutura necessária para o desenvolvimento da aplicação. Após a criação do ambiente, foram instaladas as dependências utilizadas durante o projeto.

### 2. Construção da Interface

Foi criada uma interface simples contendo:

- Área de visualização da imagem.
- Botões de interação.
- Menu para seleção de stickers.
- Opções para compartilhar a imagem final.

A estrutura foi organizada em componentes reutilizáveis para facilitar a manutenção do código.

### 3. Exibição de Imagens

Inicialmente, uma imagem padrão foi adicionada ao aplicativo para servir como exemplo. Em seguida, foi criado um componente responsável por exibir imagens na tela.

### 4. Seleção de Imagens da Galeria

Utilizando a biblioteca Expo Image Picker, foi implementada a funcionalidade que permite ao usuário selecionar imagens diretamente da galeria do dispositivo.

Durante esse processo:

- O aplicativo solicita permissão para acessar a galeria.
- O usuário escolhe uma imagem.
- A imagem selecionada é exibida automaticamente na interface.

### 5. Implementação dos Stickers

Foram criados componentes responsáveis pela exibição dos stickers sobre a imagem selecionada.

Os stickers são carregados a partir dos recursos do projeto e podem ser adicionados à composição criada pelo usuário.

### 6. Modal de Seleção

Foi desenvolvido um modal que exibe os stickers disponíveis para seleção.

Essa funcionalidade permite que o usuário escolha rapidamente o sticker desejado sem alterar a tela principal da aplicação.

### 7. Movimentação dos Stickers

Utilizando bibliotecas de gestos e animações, foi implementada a funcionalidade de movimentação dos stickers.

O usuário pode:

- Arrastar stickers pela tela.
- Posicioná-los livremente sobre a imagem.
- Ajustar a composição de acordo com sua preferência.

### 8. Captura da Imagem Final

Após a edição, o aplicativo captura o conteúdo exibido na tela e gera uma nova imagem contendo:

- A foto selecionada.
- Os stickers adicionados.
- O posicionamento definido pelo usuário.

### 9. Compartilhamento

A imagem final pode ser compartilhada utilizando os recursos nativos do dispositivo através da biblioteca Expo Sharing.

---

## Tecnologias Utilizadas

- React Native
- Expo
- JavaScript
- Expo Image Picker
- Expo Sharing
- React Native Gesture Handler
- React Native Reanimated
- React Native View Shot

---

## Funcionalidades

- Seleção de imagens da galeria.
- Visualização de imagens.
- Adição de stickers.
- Escolha de stickers através de modal.
- Movimentação dos stickers.
- Captura da composição final.
- Compartilhamento da imagem gerada.

---

## Aprendizados

Durante o desenvolvimento deste projeto foram praticados conceitos importantes de React Native e Expo, incluindo:

- Criação de componentes reutilizáveis.
- Gerenciamento de estado.
- Manipulação de imagens.
- Uso de permissões do dispositivo.
- Implementação de gestos e animações.
- Compartilhamento de arquivos.
- Organização de projetos mobile.

---

## Resultado

O StickerSmash é uma aplicação funcional que permite personalizar imagens através da adição de stickers e compartilhá-las facilmente, demonstrando na prática o uso das principais ferramentas oferecidas pelo ecossistema Expo.
