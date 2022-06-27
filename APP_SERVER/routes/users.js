var express = require('express');
var users = require('../model/users');

var router = express.Router();

router.get('/', (req, res) => {
  users.usersModel.find().populate('cartItems').exec(function(err, users){
    if (err)
    {
        res.status(404).json(err);
        return;
    }
    res.status(200).json(users);
  });
});



router.get('/:id', (req, res) => {
  users.usersModel.findById(req.params.id).populate('cartItems').exec(function(err, user){
    if (err)
    {
        res.status(404).json(err);
        return;
    }
    res.status(200).json(user);
  });
});

router.post('/login', (req, res) => {
  users.usersModel.find({email: req.body.email, password: req.body.password}).populate('cartItems').exec(function(err, user){
    if (err)
    {
        res.status(404).json(err);
        return;
    }
    if(user.length){
      res.status(200).json(user);
    }else{
      res.status(404).json({"message": "User Not Found!"});
    }
  });
});

router.post('/', (req, res) => {
  users.usersModel.create({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  }, function(err, user){
   if (err)
    {
        res.status(404).json(err);
        return; 
    }
    res.status(200).json(user);
  });
});

router.put('/:id', (req, res) => {
  users.usersModel.findOneAndUpdate({_id: req.params.id}, {cartItems: req.body.cartItems},function(err, user){
   if (err)
    {
        res.status(404).json(err);
        return; 
    }
    res.status(200).json(user);
  });
});

router.delete('/:id', (req, res) => {
  users.usersModel.findByIdAndRemove(req.params.id, function(err, user){
   if (err)
    {
        res.status(404).json(err);
        return; 
    }
    res.status(200).json(user);
  });
});


module.exports = router;
