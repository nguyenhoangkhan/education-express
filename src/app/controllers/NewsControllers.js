class NewsControllers {
  // [GET] /news
  index(req, res) {
    res.render("news");
  }
  //[GET] /news/:slug
  detail(req, res) {
    res.send("detail");
  }
}

module.exports = new NewsControllers();
