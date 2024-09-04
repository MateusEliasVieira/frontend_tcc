const converterImagemEmBase64 = async (image) => {
  return new Promise((resolve, reject) => {
    const extensoesValidas = ['image/jpeg', 'image/png', 'image/jpg'];

    if (image.type.split("/")[0] !== "image") {
      reject('O arquivo selecionado não é uma imagem! São permitidos apenas formatos .jpeg, .png e .jpg!');
      return;
    }

    if (!extensoesValidas.includes(image.type)) {
      reject('O arquivo deve ser uma imagem no formato .jpg, .jpeg ou .png.');
      return;
    }

    const maxSizeInBytes = 8 * 1024 * 1024;
    if (image.size > maxSizeInBytes) {
      const imageSizeInMB = (image.size / 1048576).toFixed(2); // Convertendo para MB e limitando a 2 casas decimais
      reject(`O tamanho da imagem selecionada é de ${imageSizeInMB}MB e portanto excede o limite permitido de 8MB.`);
      return;
    }

    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      resolve(base64);
    };

    reader.onerror = (error) => reject(error);

    reader.readAsDataURL(image);
  });
};

export { converterImagemEmBase64 };
