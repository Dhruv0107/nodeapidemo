var express = require('express');
var user = require('../model/user');
var router = express.Router();

/* GET home page. */
router.post('/', function(req, res, next) {

  user.create(req.body);

  res.status(200).json({
    status:"success",
  })

});

router.get('/select_Data', async function(req, res, next) {

 var data = await user.find();

  res.status(200).json({
    status:"success",
    data
  })
});

router.get('/select_Data/:id', async function(req, res, next) {

  var id = req.params.id;
  
  var data = await user.findById({_id:id});
 
   res.status(200).json({
     status:"success",
     data
   })
 });

 router.get('/delete/:id', async function(req, res, next) {

  var id = req.params.id;
  
   await user.findByIdAndDelete({_id:id});
 
   res.status(200).json({
     status:"success",
   })
 });



router.patch('/updatedata/:id', async function(req ,res ,next) {
  try{
    data = await user.findByIdAndUpdate(req.params.id,req.body);
    console.log(data)
    res.status(201).json({
      status:'success',
      data
    })
  }
  catch(error){
    console.log(error)
  }
});


 
module.exports = router;
