
module.exports = (sequelize, Sequelize) => {
    const Pricing = sequelize.define('pricing', {
      base_distance_in_km: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
      km_price: {
        type: Sequelize.FLOAT,
        allowNull: false,
      },
      fix_price: {
        type: Sequelize.INTEGER,
        allowNull: false,
      },
    });
  
    Pricing.associate = (models) => {
      Pricing.belongsTo(models.Organization, {
        foreignKey: 'organization_id',
      });
      Pricing.belongsTo(models.Item, {
        foreignKey: 'item_id',
      });
    };
  
    return Pricing;
  };
  