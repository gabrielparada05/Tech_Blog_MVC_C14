const { User } = require('../models');

const usersSeed = [
  {
    username: 'john_doe',
    email: 'john@example.com',
    password: bcrypt.hashSync('password1', 10),
  },
  {
    username: 'jane_smith',
    email: 'jane@example.com',
    password: bcrypt.hashSync('password2', 10),
  },
  {
    username: 'alex_wilson',
    email: 'alex@example.com',
    password: bcrypt.hashSync('password3', 10),
  },
  {
    username: 'emma_johnson',
    email: 'emma@example.com',
    password: bcrypt.hashSync('password4', 10),
  },
  {
    username: 'michael_brown',
    email: 'michael@example.com',
    password: bcrypt.hashSync('password5', 10),
  },
];

const seedUser = () => User.bulkCreate(userData);

module.exports = seedUser;
