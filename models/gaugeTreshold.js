/**
 * Created by chapeau on 28/03/17.
 */

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
        },
        {
            classMethods: {
                associate: function(models){
                    model.belongsTo(models.Gauges);
                }
            }
        });



    return model;
};