const res = require('express/lib/response');
const { Error } = require('mongoose');

const Course = require('../models/Course');
const {mutupleMongooseToObject} =require('../../util/mongoose');
class SiteController {
  // [Get => news]
  index(req, res,next) {
    // res.render('home');
   
    Course.find({}).then(courses=>{
     
      res.render('home',{
        courses:mutupleMongooseToObject(courses)
      });
    })
    .catch(next);

  }
  //[get]  / news/:slug  // bar dùng để chứa nhiều biến trong 1 đường dẫn
  search(req, res) {
    res.render('search');
  }
}
module.exports = new SiteController();
