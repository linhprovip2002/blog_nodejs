const res = require('express/lib/response');

class NewController {
  // [Get => news]
  index(req, res) {
    res.render('news');
  }
  //[get]  / news/:slug  // bar dùng để chứa nhiều biến trong 1 đường dẫn
  show(req, res) {
    res.send('NEWS DETAIL!!!');
  }
}
module.exports = new NewController();
