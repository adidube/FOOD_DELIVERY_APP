module.exports = (sequelize, Sequelize) => {
    const Organization = sequelize.define('organization', {
      id: {
        type: Sequelize.STRING,
        primaryKey: true,
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
      },
    });
  
    return Organization;
  };
  