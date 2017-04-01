/**
 * Created by chapeau on 24/03/17.
 */
module.exports = function(sequelize, DataTypes){
    var model = sequelize.define("Gauges",
        {
            name: {
                type: DataTypes.STRING
            }
        });

    return model;
};