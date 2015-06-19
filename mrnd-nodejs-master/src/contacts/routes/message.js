var express = require('express');
var router = express.Router();
//var url = require('url');
var list={}
var id=199
/* GET contacts */
router.get('/:id', function(req, res, next) {
	console.log(list[req.params.id]);
	res.status(200);
	res.send(list[req.params.id]);
	console.log(list[req.params.id]);
});

router.post('/', function(req, res, next) {
	id++;
	list[id]={}
	list[id]["text"]=req.body.text;
	
	res.status(200);
	res.send(id+"");
     console.log(list[id]);
  //console.log(req.body);
});


module.exports = router;
