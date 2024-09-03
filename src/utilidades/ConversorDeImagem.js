const converterImagemEmBase64 = async (image) => {
  return new Promise((resolve, reject) => {
    const extensoesValidas = ['image/jpeg', 'image/png', 'image/jpg'];

    if (image.type.split("/")[0] !== "image") {
      reject(new Error('O arquivo selecionado não é uma imagem!'));
      return;
    }

    if (!extensoesValidas.includes(image.type)) {
      reject(new Error('O arquivo deve ser uma imagem no formato .jpg, .jpeg ou .png.'));
      return;
    }

    const maxSizeInBytes = 8 * 1024 * 1024;
    if (image.size > maxSizeInBytes) {
      reject(new Error('O tamanho da imagem excede o limite permitido de 8MB.'));
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
