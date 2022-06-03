const res = require('express/lib/response');
const { Error } = require('mongoose');

const Course = require('../models/Course');
const {MongooseToObject} =require('../../util/mongoose');
class CourseController {
     show(req,res,next)
     {

      Course.findOne({ slug: req.params.slug }).then(course=>
        

          res.render('courses/show',{course:MongooseToObject(course)})
         
        ).catch(next);

      
     
     } 
     create(req,res,next)
     {
          res.render('courses/create')
     }
     store(req,res,next)
     { 
       const data = req.body;
       const course  = new Course(data);
       course.save();
       res.send('save').then(()=>res.redirect('/'))
       .catch(error=>
       {

       });
     }
     
}
module.exports = new CourseController();
