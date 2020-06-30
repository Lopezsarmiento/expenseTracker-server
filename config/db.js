const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.PROD_MONGO_URI, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });

    console.log(
      `MongoDB connected: ${conn.connection.host}`.cyan.underline.bold
    );
  } catch (error) {
    console.log(`Error when connecting to DB: , ${error.message}`.red);
    process.exit(1);
  }
};

module.exports = connectDB;
