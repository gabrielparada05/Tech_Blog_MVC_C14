const { Post } = require('../models');

const postsSeed = [
  {
    title: 'First Post',
    comment: 'This is the first post.',
    post_date: new Date(),
    user_id: 1,
  },
  {
    title: 'Second Post',
    comment: 'This is the second post.',
    post_date: new Date(),
    user_id: 2,
  },
  {
    title: 'Third Post',
    comment: 'This is the third post.',
    post_date: new Date(),
    user_id: 1,
  },
  {
    title: 'Fourth Post',
    comment: 'This is the fourth post.',
    post_date: new Date(),
    user_id: 3,
  },
  {
    title: 'Fifth Post',
    comment: 'This is the fifth post.',
    post_date: new Date(),
    user_id: 2,
  },
];


const seedPost = () => Post.bulkCreate(postData);

module.exports = seedPost;
