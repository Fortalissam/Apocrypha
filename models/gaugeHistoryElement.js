/**
 * Created by chapeau on 24/03/17.
 */
module.exports = function(sequelize, DataTypes){
    var GaugeHistoryElement = sequelize.define("GaugeHistoryElements",
        {
            value: {
                type: DataTypes.INTEGER
            },
            reason: {
                type: DataTypes.STRING
            }
        },
        {
            classMethods: {
                associate: function(models){
                    GaugeHistoryElement.belongsTo(models.Gauges);
                    GaugeHistoryElement.belongsTo(models.Users);
                }
            }
        });

    return GaugeHistoryElement;
};