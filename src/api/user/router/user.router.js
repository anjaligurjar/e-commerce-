const express = require('express');
const userschema = require('../model/userschema.JS');
const courseschema = require('../model/dbconnection.JS');

const router = express.Router();
router.use(express.json)
router.post('/registration',(req,res)=>{
  const user=new userschema({
  name:req.body.name,
  surname:req.body.surname,
  email:req.body.email,
  password:req.body.password
})
user.save().then()

router.get('/users', async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).send(error);
  }
});

router.post('/users', async (req, res) => {
  try {
    const user = new userschema(data);
    await user.save();
    res.json(user);
  } catch (error) {
    res.status(500).send(error);
  }
});

module.exports = router;