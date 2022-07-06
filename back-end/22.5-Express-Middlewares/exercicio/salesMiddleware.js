function salesMiddleware (req, res, next) {
  const { productName, infos } = req.body;

  // if (!product) {
  //   res.status(400).json({ message: "Nenhum produto enviado!" });
  //   return
  // }

  if (!productName) {
    res.status(400).json({ message: "O campo productName é obrigatório!" });
    return
  }

  if (productName.length < 4) {
    res.status(400).json({ message: "O campo productName deve ter pelo menos 4 caracteres!" });
    return
  }
  
  if (!infos) {
    res.status(400).json({ message: "O campo infos é obrigatório!" });
    return
  }

  if (!infos.saleDate) {
    res.status(400).json({ message: "O campo saleDate é obrigatório!" });
    return
  }

  const date = infos.saleDate.split('/');
  const newDate = new Date(`${date[2]}-${date[1]}-${date[0]}`);
  if (newDate == 'Invalid Date') {
    res.status(400).json({ message: "O campo saleDate não é uma data válida!" });
    return
  }

  if (!infos.warrantyPeriod) {
    res.status(400).json({ message: "O campo warrantyPeriod é obrigatório!" });
    return
  }

  if (infos.warrantyPeriod > 3 || infos.warrantyPeriod < 0) {
    res.status(400).json({ message: "O campo warrantyPeriod precisa estar entre 1 e 3!" });
    return
  }

  next();

}

module.exports = salesMiddleware;