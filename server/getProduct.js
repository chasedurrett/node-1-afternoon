const products = require("../products.json");

const getProduct = (req, res) => {
  const { id } = req.params;
  const product = products.find((element) => element.id === +id);

  if (product) {
    res.status(200).send(product);
  } else {
    res.status(404).send("Item not in the list");
  }
};

module.exports = getProduct;
