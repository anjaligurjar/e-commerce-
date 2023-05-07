const mongoose= require('mongoose')


const UserSchema= new mongoose.Schema({
  name:{
    type:String
  },
  surname:{
    type:String

  },
  phone:{
    type:String

  },
  address:{
    type:String

  },
  email:{

    type:String
  },
  password:{
    type:String

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
module.exports=mongoose.model('User',UserSchema)