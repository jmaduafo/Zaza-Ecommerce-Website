const db = require('../config/connections');
const { User } = require('../models');
const userData = require('./userData.json');
// const thoughtSeeds = require('./thoughtSeeds.json');

db.once('open', async () => {
  try {
    // await Thought.deleteMany({});
    await User.deleteMany({});
    await User.create(userData);

    // for (let i = 0; i < thoughtSeeds.length; i++) {
    //   const { _id, thoughtAuthor } = await Thought.create(thoughtSeeds[i]);
    //   const user = await User.findOneAndUpdate(
    //     { username: thoughtAuthor },
    //     {
    //       $addToSet: {
    //         thoughts: _id,
    //       },
    //     }
    //   );
    // }

    console.log('all done!');
    process.exit(0);

  } catch (err) {
    console.error(err);
    process.exit(1);
  }

});
