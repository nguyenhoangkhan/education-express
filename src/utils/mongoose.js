module.exports = {
  mutipleMongooseToObjects: (mongooseArray) => {
    return mongooseArray.map((course) => course.toObject());
  },
  mongodbToObject: (mongoose) => {
    return mongoose ? mongoose.toObject() : mongoose;
  },
};
