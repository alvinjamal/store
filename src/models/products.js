const Pool = require("./../config/db");

const selectData = () => {
  return Pool.query(
    `SELECT products.name,products.stock,  products.price, category.name as category, products.photo FROM products  JOIN category ON products.category_id = category.id `
  );
};

const selectDatabyId = (id) => {
  return Pool.query(
    `SELECT products.name,products.stock,  products.price, category.name as category FROM products  INNER JOIN category ON products.category_id = category.id WHERE products.id='${id}' `
  );
};

const insertData = (data) => {
  const { name, stock, price, photo } = data;
  console.log("data", data);
  return Pool.query(
    `INSERT INTO products(name,stock,price,photo) VALUES('${name}',${stock},${price},'${photo}')`
  );
};

const updateData = (id, data) => {
  const { name, stock, price } = data;
  return Pool.query(
    `UPDATE products SET name='${name}',stock='${stock}',price='${price}' WHERE id='${id}'`
  );
};

const deleteData = (id) => {
  return Pool.query(`DELETE FROM products where id='${id}'`);
};

module.exports = {
  selectData,
  insertData,
  deleteData,
  updateData,
  selectDatabyId,
};
