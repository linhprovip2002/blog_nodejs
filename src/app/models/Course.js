const mongoose= require('mongoose');
const Schema = mongoose.Schema;

const Course = new Schema({
   
     Name:{type:String,default:''},
    Description: {type:String,maxlength:255},
    image:  {type:String,maxlength:255},
    createdAt:{type:Date , default:Date.now},
    updatedAt:{type:Date , default:Date.now},
    slug: { type: String, maxlength: 255 }

  });

  module.exports=mongoose.model('Course',Course);