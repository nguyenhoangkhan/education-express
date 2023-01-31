const Courses = require("../models/Course");
const { mutipleMongooseToObjects } = require("../../utils/mongoose");

class SiteControllers {
  index(req, res, next) {
    Courses.find({})
      .then((courses) => {
        const coursesObject = mutipleMongooseToObjects(courses);
        res.render("home", { courses: coursesObject });
      })
      .catch(next);
  }
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteControllers();
