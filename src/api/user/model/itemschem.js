const UserSchema= new mongoose.Schema({
  name:{

  },
  surname:{

  },
  phone:{

  },
  address:{

  },
  email:{

  },
  password:{

  },
  Token:{

  },
  country:{

  },
  state:{

  },
  city:{

  },
  pincode:{

  }

})
const User=mongoose.model('User',UserSchema)