const mongoose = require("mongoose");

const connect = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/education_dev");
    console.log("Connect Successfully");
  } catch (err) {
    console.log("Connect Failed: ", err);
  }
};

module.exports = { connect };
