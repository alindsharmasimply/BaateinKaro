const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDB Connected : ${conn.connection.host}`.cyan.bold);
  } catch (error) {
    console.log(`Error message: ${error.message}`.red.bold);
    //process.exit();
    process.kill(process.pid, "SIGTERM");
  }
};

module.exports = connectDB;
