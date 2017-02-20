/**
 * Created by francois.drouin on 2/19/2017.
 */
var bcrypt = require("bcrypt-nodejs");

module.exports = function(sequelize, DataTypes){
    var model = sequelize.define("Users",
    {
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING,
            set: function(password){
                this.setDataValue('password',bcrypt.hashSync(password, bcrypt.genSaltSync(8)));
            }
        }
    },
  {
    instanceMethods: {
      validatePassword: function(password){
        return bcrypt.compareSync(password, this.password);
      }
    }
  }
  );

    return model;
};
