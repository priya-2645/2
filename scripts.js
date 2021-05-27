const { Sequelize, DataTypes } = require('sequelize');
const sequelize = new Sequelize('sqlite::memory:');

const db = new Sequelize('customer', 'root', 'Sairam3@', {
  host: 'localhost',
  dialect: 'mysql'
});
const User = db.define('User', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },
  lastName: {
    type: DataTypes.STRING
  },
  address: {
    type: DataTypes.STRING
  },
  age: {
    type: DataTypes.INTEGER
  },

},
);

const User1 = db.define('User1', {
  firstName: {
    type: DataTypes.STRING,
    allowNull: false
  },


});
User.hasOne(User, { foreignKey: "firstName" });
User1.belongsTo(User1);
db.sync()