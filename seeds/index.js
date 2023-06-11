const sequelize = require('../config/connection');
const seedPost = require('./postData');
const seedUser = require('./userData');

const seedAll = async () => {
  await sequelize.sync({ force: true });

  await seedPost();

  await seedUser();

  process.exit(0);
};

seedAll();
