const formatarDataParaDiaMesAno = (item) => {
  let data = item.split("T")[0];
  let data_array = data.split("-");
  let data_ok = `${data_array[2]}/${data_array[1]}/${data_array[0]}`;
  return data_ok;
}
const formatarDataPadraoAnoMesDia = (item) => {
  return item.split("T")[0]
}

export {formatarDataParaDiaMesAno, formatarDataPadraoAnoMesDia}
