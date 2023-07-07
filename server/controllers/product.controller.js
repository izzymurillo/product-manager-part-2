// vvvvv FROM THE LEARN PLATFORM vvvvv //
const { Product } = require("../models/product.model");

module.exports.index = (request, response) => {
  response.json({
    message: "Hello World!!!",
  });
};

module.exports.findAllProducts = (req, res) => {
  Product.find({})
    .then(products =>res.json(products))
    .catch(err => res.json(err))
};

// The method below is new
module.exports.createProduct = (request, response) => {
  const { title, price, description } = request.body;
  Product.create({
    title,
    price,
    description,
  })
    .then((product) => response.json(person))
    .catch((err) => response.json(err));
};

// Find One Product
module.exports.getProduct = (request, response) => {
  Product.findOne({_id:request.params.id})
      .then(product => response.json(product))
      .catch(err => response.json(err))
}







// --------------------------------------------------- //
// // vvvvvv CISO'S WAY vvvvvv //
// const Product = require("../models/product.model");

// const message = (req, res) => {
//   res.json("Hello World");
// };

// const create = (req, res) => {
//   Product.create(req.body)
//     .then(product => res.status(201).json(product))
//     .catch(err => res.status(400).json(err));
// };

// module.exports = { message, create };
