const Products = require("../models/Products");
const Sequelize = require("sequelize");

module.exports = {
  getAll(req, res) {
    const { query } = req;
    if (Object.keys(query).length > 0) {
      if (query.hasOwnProperty("id")) {
        console.log(query);
        const id = +query.id;
        Products.findByPk(id)
          .then(product => res.status(200).json(product))
          .catch(err => res.status(400).json(err));
      } else {
        const Op = Sequelize.Op;
        const name = query.name;
        Products.findAll({
          where: {
            [Op.like]: `%${name}%`
          }
        })
          .then(product => res.status(200).json(product))
          .catch(err => res.status(400).json(err));
      }
    } else {
      Products.findAll()
        .then(products => res.status(200).json(products))
        .catch(err => res.status(400).json(err));
    }
  },
  create(req, res) {
    const {
      code,
      name,
      scale,
      vendor,
      description,
      quantityInStock,
      buyPrice,
      MSRP,
      productlineId
    } = req.body;
    Products.build({
      code,
      name,
      scale,
      vendor,
      description,
      quantityInStock,
      buyPrice,
      MSRP,
      productlineId: productlineId
    })
      .save()
      .then(product => res.status(200).json(product))
      .catch(err => res.status(400).json(err));
  },

  update(req, res) {
    const id = req.params.id;
    const {
      code,
      name,
      scale,
      vendor,
      description,
      quantityInStock,
      buyPrice,
      MSRP,
      productlineId: productlineId
    } = req.body;

    Products.update(
      {
        name,
        contactLastName,
        contactFirstName,
        phone,
        addressLine1,
        addressLine2,
        city,
        state,
        postalCode,
        country,
        salesRepEmployeeId,
        creditLimit
      },
      { where: { id } }
    )
      .then(products => {
        res.status(200).json(products);
      })
      .catch(err => res.status(400).json(err));
  },
  remove(req, res) {
    const id = +req.query.id;
    Products.destroy({ where: { id } })
      .then(product => res.status(200).json(product))
      .catch(err => res.status(400).json(err));
  }
};