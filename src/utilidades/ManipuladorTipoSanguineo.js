const formatarTipoSanguineo = (tipo) => {
  if (tipo) {
    switch (tipo) {
      case "A_POSITIVO":
        return "A+"
      case "A_NEGATIVO":
        return "A-"
      case "B_POSITIVO":
        return "B+"
      case "B_NEGATIVO":
        return "B-"
      case "AB_POSITIVO":
        return "AB+"
      case "AB_NEGATIVO":
        return "AB-"
      case "O_POSITIVO":
        return "O+"
      case "O_NEGATIVO":
        return "O-"
      default:
        return ""
    }
  }
}
export {formatarTipoSanguineo}
