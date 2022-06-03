const mongoose= require('mongoose');
const Schema = mongoose.Schema;
var slug = require('mongoose-slug-generator');
mongoose.plugin(slug);
const Course = new Schema({
   
     Name:{type:String,default:''},
    Description: {type:String,maxlength:255},
    image:  {type:String,maxlength:255},
    // createdAt:{type:Date , default:Date.now},
    // updatedAt:{type:Date , default:Date.now},
    slug: { type: String, slug: 'Name' ,unique:true},
    VideoID:{type:String}
  },{
        timestamps:true,
  });

  module.exports=mongoose.model('Course',Course);