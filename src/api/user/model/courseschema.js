const mongoose= require('mongoose')
const courseSchema= new mongoose.Schema({
  courseName:{
    type:String

  },
  title:{
    type:String
  },
  ImageUrl:{


  },
  lessonName:{
    type:String
  },
  quize:{
    type:String

  },
  Test:{
    type:String

  },
  fretril:{

  },
 price:{

 },
 duration:{

 },
 description:{

 },
CreatAt:{
  type:Date,
  default:Date.now

},
rating:{
  type:String
} })

 
 


module.exports =mongoose.model('coures',CourseSchema)