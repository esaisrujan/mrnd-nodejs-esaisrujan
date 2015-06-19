var express = require('express');
var router = express.Router();
//var url = require('url');
var list1={}
var id=199
/* GET contacts */
router.get('/:id', function(req, res, next) {
	res.status(200);
	res.send(list1[req.params.id]);
});

router.post('/', function(req, res, next) {
	id++;
	list1[id]={}
	list1[id]["firstName"]=req.body.firstName;
	list1[id]["lastName"]=req.body.lastName;
	list1[id]["phone"]=req.body.phone;
	res.status(200);
	res.send(id+"");
    console.log(list1[id]);
  //console.log(req.body);
});

router.put('/:id', function(req, res, next) {
  //console.log(req.body);
  if(list1[req.params.id]["firstName"]!=req.body.firstName)
  list1[req.params.id]["firstName"]=req.body.firstName;
  res.status(200);
  res.send(list1[req.params.id]);

});

module.exports = router;
