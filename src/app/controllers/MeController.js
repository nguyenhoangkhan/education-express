const Courses = require("../models/Course");

class Me {
  courses(req, res, next) {
    Promise.all([
      Courses.find({}).lean(),
      Courses.countDocumentsDeleted({}),
    ]).then(([courses, count]) => {
      res.render("me/courses", { courses, count });
    });
  }
  news(req, res) {
    res.send("news");
  }
  trash(req, res, next) {
    Courses.findDeleted({})
      .lean()
      .then((course) => {
        res.render("me/trash", { courses: course });
      })
      .catch(next);
  }
}
module.exports = new Me();
