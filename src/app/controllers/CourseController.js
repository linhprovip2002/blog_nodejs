const res = require('express/lib/response');
const { Error } = require('mongoose');

const Course = require('../models/Course');
const {mutupleMongooseToObject} =require('../../util/mongoose');
class CourseController {
     show(req,res,next)
     {

      Course.findOne({ slug: req.params.slug }).then(course=>
        {
          res.json(course);
          return;
        }).catch(next);

      
     
     } 
     
}
module.exports = new CourseController();
