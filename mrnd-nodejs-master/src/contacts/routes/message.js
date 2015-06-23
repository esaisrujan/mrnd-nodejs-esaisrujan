var express = require('express');
var router = express.Router();
//var url = require('url');
var list={};
var id=0;
/* GET contacts */
router.get('/:id', function(req, res, next) {
	//console.log(list[req.params.id]);
	//res.status(200);
	//var html9='<html>'+'<body>'+ "Your text is :  "+list[req.params.id]["text"]+'</body>'+'</html>';
	//res.send(html9);
	res.send(list[req.params.id]);
});

router.post('/', function(req, res, next) {
	id++;
	list[id]={};
	list[id]["text"]=req.body.text;
	//var html7= '<body>'+"id created is : "+ id+'</body>';
	//res.status(200);
	var path='./routes/data/'+id+'-Message.json';
	var fs1 = require('fs');
	   fs1.open(path, 'w+', function(err) {
    if(err) {
        console.log("msg file not opened");
    }
	console.log("mesg file opened");
	});
     fs1.writeFile(path, JSON.stringify(list[id]), function(err) {
    if(err) {
        return console.log(err);
    }

    console.log("The msg file was saved!");
});
//fs1.close(path,callback);
	res.send(id+"");
	//res.send(html7);
	     //console.log(list[id]);
  
});
/*router.post('/:id', function(req, res, next) {
	res.status(200); 
	var html6='<html>'+'<body>'+"text : "+list[req.params.id]+'</body>'+'</html>';
	res.send(html6);
	//console.log(req.params.id);
});


router.get('/', function(req, res, next) {
	id++;
	var html5='<form action="/contacts/'+id+'/message" method="post">'+"text :" +'<input type="text" name="text">'+'<br/>'+'<input type="submit" name="save">'+'</form>';
	//res.status(200);
	res.send(html5);
    //console.log(list1[id]);
  //console.log(req.body);
});
*/



module.exports = router;
