const mongoose = require("mongoose");

const connectToDatabase = async () => {
  await mongoose.connect(
    `mongodb+srv://${process.env.MONGODB_USERNAME}:${process.env.MONGODB_PASSWORD}@testenodejs.u3vxi1i.mongodb.net/?retryWrites=true&w=majority`
  );
};

module.exports = connectToDatabase;
