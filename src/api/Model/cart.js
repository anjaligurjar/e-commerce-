const cartShema = new mongoose.cartSchema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
  },
  type: {
    enum: [webdeplopment, AI],