module.exports = (sequelize, Sequelize) => {
    const UserVerification = sequelize.define("UserVerification", {
      userid: {
        type: Sequelize.STRING
      },
      uniqueStrings: {
        type: Sequelize.STRING
      },
      createdAt: {
        type: Sequelize.DATE
      },
      expiresAt: {
        type: Sequelize.DATE
      }
    });
  
    return UserVerification;
  };
  