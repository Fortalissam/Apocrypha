/**
 * Created by chapeau on 28/03/17.
 */
var gauge = require("./gauge.js");

module.exports = function(sequelize, DataTypes){
    var model = sequelize.define("GaugeTresholds",
        {
            name: {
                type: DataTypes.STRING
            },
            description: {
                type: DataTypes.STRING
            },
            value: {
                type: DataTypes.INTEGER
            }
        });

    model.belongsTo(gauge(sequelize, DataTypes));

    return model;
};