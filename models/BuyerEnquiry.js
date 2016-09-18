'use strict';
module.exports = function(sequelize, DataTypes) {
    var BuyerEnquiry = sequelize.define('BuyerEnquiry', {
        emailid: DataTypes.STRING,  
        name: DataTypes.STRING,
        organization: DataTypes.STRING,
        desingation: DataTypes.STRING,
        contactyn: DataTypes.BOOLEAN,
        tonnagepermonth: DataTypes.NUMERIC,
        currentprocess: DataTypes.STRING,
        buyingtime: DataTypes.NUMERIC,
        contactwhen: DataTypes.DATE,
        customertype: DataTypes.STRING,
        contactno: DataTypes.STRING,
        customertype: DataTypes.STRING
    }, {
        timestamps: false,
        freezeTableName: true,
        classMethods: {
            associate: function(models) {
                // associations can be defined here
            }
        }
    });
    return BuyerEnquiry;
};
