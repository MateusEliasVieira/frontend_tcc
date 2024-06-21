const converterImagemEmBase64 = async (image) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64 = reader.result;
      if (base64.split("").length <= 65343434) {
        resolve(base64);
      } else {
        reject(new Error("O tamanho da imagem excede o limite permitido."));
      }
    };
    reader.onerror = (error) => reject(error);
    reader.readAsDataURL(image);
  });
};

export { converterImagemEmBase64 };
