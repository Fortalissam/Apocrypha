/**
 * Created by chapeau on 24/03/17.
 */
module.exports = function(sequelize, DataTypes){
    var model = sequelize.define("Gauges",
        {
            name: {
                type: DataTypes.STRING
            }
        },
        {
            classMethods: {
                associate: function(models){
                    model.hasMany(models.GaugeHistoryElements);
                    model.hasMany(models.GaugeTresholds)
                }
            }
        });

    return model;
};