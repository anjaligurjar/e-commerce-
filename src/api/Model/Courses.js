import mongoose from 'mongoose'

const CourseShema = new mongoose.UserSchema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  type: {
    enum: [webdeplopment, AI],
  },
  orders: {},
  rating: {
    type: Number,
    required: true,
  },
});
module.export = moggose.model('courses', CourseShema);