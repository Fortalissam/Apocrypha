/**
 * Created by chapeau on 24/03/17.
 */
var gauges = require("./gauge.js");

module.exports = function(sequelize, DataTypes){
    var GaugeHistoryElement = sequelize.define("GaugeHistoryElements",
        {
            value: {
                type: DataTypes.INTEGER
            },
            reason: {
                type: DataTypes.STRING
            }
        });

    GaugeHistoryElement.belongsTo(gauges(sequelize, DataTypes));

    return GaugeHistoryElement;
};