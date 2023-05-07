import mongoose from 'mongoose';
const CourseShema = new mongoose.UserSchema(
  {
    firstname: {
      type: String,
      match: [/^[a-z,a-z]+/, 'please enter valid first name'],
    },
    lastname: {
      type: String,
      match: [/^[a-z,a-z]+/, 'please enter valid first name'],
    },
    email: {
      type: String,
      trim: true,
      lowercase: true,
      unique: true,
      match: [
        `/^[^\s@]+@[^\s@]
    +\.[^\s@]+$/`,
        'please enter valid email',
      ],
      required: 'Email address is required',
      validator: [validate.isEmail(), 'this email fformatis required'],
    },
    password: {
      type: String,
    },
    country: {
      type: String,
      required: true,
      validate: {
        validator: async function (v) {
          const country = await userSchema.findone({ name: v });
          return country !== null;
        },
        message: 'invalid country',
      },
    },

    Token: {
      type: String,
      default: ' ',
    },
    age: { type: Number, min: 18, max: 65 },
  },
  {
    state: {
      type: String,
      required: true,
      validate: {
        validator: async function (v) {
          const country = await Country.findone({ name: this.country });
          return country && country.state.some((state) => state.name == v);
        },
        mesaage: 'invalid state',
      },
    },
  }
);

const user = moggose.model('user', userSchema);
