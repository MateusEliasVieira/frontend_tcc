const converterImagemEmBase64 = async (image) => {
  return new Promise((resolve, reject) => {
    // Verifica se o tipo de arquivo é .jpg, .png ou .jpeg
    const extensoesValidas = ['image/jpeg', 'image/png', 'image/jpg'];

    // verifica se não é imagem
    if(image.type.split("/")[0] !== "image"){
      reject(new Error('O arquivo selecionado não é uma imagem!'));
      return;
    }

    if (!extensoesValidas.includes(image.type)) {
      reject(new Error('O arquivo deve ser uma imagem no formato .jpg, .jpeg ou .png.'));
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;

      // Verifica o tamanho da imagem
      if (base64.split('').length <= 65343434) {
        resolve(base64);
      } else {
        reject(new Error('O tamanho da imagem excede o limite permitido.'));
      }
    };

    reader.onerror = (error) => reject(error);

    // Converte a imagem para Base64
    reader.readAsDataURL(image);
  });
};

export { converterImagemEmBase64 };

