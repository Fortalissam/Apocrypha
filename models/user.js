/**
 * Created by francois.drouin on 2/19/2017.
 */
module.exports = function(sequelize, DataTypes){
    return sequelize.define("Users", {
        username: {
            type: DataTypes.STRING
        },
        password: {
            type: DataTypes.STRING
        }
    })
};