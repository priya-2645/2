const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const db = new Sequelize('customer', 'root', 'Sairam3@', {
  host: 'localhost',
  dialect: 'mysql'
});


const User = db.define('User', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  address: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },

}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User === sequelize.models.User); // true
const User1 = db.define('User1', {
  // Model attributes are defined here
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
    // allowNull defaults to true
  },
  address: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },

}, {
  // Other model options go here
});

// `sequelize.define` also returns the model
console.log(User1 === sequelize.models.User1); // true


// db.authenticate()
//   .then(() => {
//     console.log('connection success')
//   })
module.exports - {
  db
}