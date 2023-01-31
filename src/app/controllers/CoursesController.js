const Courses = require("../models/Course");
const { mongodbToObject } = require("../../utils/mongoose");
class CoursesController {
  show(req, res, next) {
    Courses.findOne({ slug: req.params.slug })
      .then((course) => {
        res.render("courses/show", { course: mongodbToObject(course) });
      })
      .catch(next);
  }
  create(req, res, next) {
    res.render("courses/create");
  }
  store(req, res, next) {
    const formData = req.body;
    formData.thumbnail = `https://i.ytimg.com/vi/${req.body.videoId}/hqdefault.jpg?sqp=-oaymwEXCOADEI4CSFryq4qpAwkIARUAAIhCGAE=&rs=AOn4CLBw187s2v4Wmg7RgjunVIcAIizHJw`;
    const Course = new Courses(formData);
    Course.save().then(() => res.redirect("/"));
  }
  edit(req, res, next) {
    Courses.findById(req.params.id)
      .lean()
      .then((course) => {
        res.render("courses/edit", { course });
      })
      .catch(next);
  }
  update(req, res, next) {
    Courses.updateOne({ _id: req.params.id }, req.body)
      .then(() => res.redirect("/me/stored/courses"))
      .catch(next);
  }
  delete(req, res, next) {
    Courses.delete({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  forceDelete(req, res, next) {
    Courses.deleteOne({ _id: req.params.id })
      .then(() => {
        res.redirect("back");
      })
      .catch(next);
  }
  restore(req, res, next) {
    Courses.restore({ _id: req.params.id })
      .then(() => res.redirect("back"))
      .catch(next);
  }
}
module.exports = new CoursesController();
