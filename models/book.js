// models/book.js
const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('library', 'root123', 'root123', {
  host: 'localhost',
  dialect: 'mysql'
});

const Book = sequelize.define('Book', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  taken_on: {
    type: DataTypes.DATE,
    allowNull: false
  },
  return_date: {
    type: DataTypes.DATE,
    allowNull: false
  },
  fine_charged: {
    type: DataTypes.INTEGER,
    allowNull: false
  }
});

module.exports = Book;
