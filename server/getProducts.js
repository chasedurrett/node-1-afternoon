const products = require("../products.json");

const getProducts = (req, res) => {
  const { price } = req.query;
  if (price) {
    const items = products.filter((element) => element.price >= +price);
    {
      res.status(200).send(items);
    }
  } else {
    res.status(404).send(products);
  }
};

module.exports = getProducts;
