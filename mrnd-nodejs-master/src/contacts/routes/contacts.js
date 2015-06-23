var express = require('express');
var router = express.Router();
var request = require('C:/Program Files/nodejs/node_modules/npm/node_modules/request');
//var url = require('url');
var list1={};
var id=0;
//var path='../../../spec/tests/data/'+id+'-Contact.json';
/* GET contacts */
router.get('/:id', function(req, res, next) {
	//res.status(200);
	res.send(list1[req.params.id]);
	/*var url_contacts="http://localhost:3000/contacts";
	var url_message=url_contacts+"/"+req.params.id+"/message";
	var html2='<html>'+'<body>'+"firstName : "+list1[req.params.id]["firstName"]+'<br/>'+"lastName : "+list1[req.params.id]["lastName"]+'<br/>'+"phone : "+list1[req.params.id]["phone"]+'<br/>'
	+'<a href='+url_contacts+' />'+"Add a new contact??"+'<br/>'+'<a href='+url_message+'/>'+"Add a new message??"+'</body>'+'</html>';
	res.send(html2);*/

	//console.log(req.params.id);
});

router.post('/', function(req, res, next) {
   
	id++;
	list1[id]={};
	list1[id]["firstName"]=req.body.firstName;
	list1[id]["lastName"]=req.body.lastName;
	list1[id]["phone"]=req.body.phone;
	//res.status(200);
	//var html3 = '<html>' + '<body>'+ "id created is :"+ id + '</body>'+'</html>' ;
	
	var path='./routes/data/' + id + '-Contact.json';
	//var path='../../spec/tests/data/'+id+'-Contact.json'
	var fs = require('fs');
   fs.open(path, 'w+', function(err) {
		if(err) {
			console.log("file not created");
			//return console.log(err);
		}
		console.log("file is created")
	});
     fs.writeFile(path, JSON.stringify(list1[id]), function(err) {
		if(err) {
			console.log("file is not written");
		}

		console.log("The file was saved!");
    }); 
//fs.close(path);
    res.send(id+"");
}); 
	//res.send(html3);
    //console.log(list1[id]);
  //console.log(req.body);

/*router.post('/:id', function(req, res, next) {
	res.status(200); 
	var html2='<html>'+'<body>'+"firstname : "+list1[req.params.id]["firstName"]+'</body>'+'</html>';
	res.send(html2);
	//console.log(req.params.id);
});
*/
/*router.get('/', function(req, res, next) {
	var html1='<form action="/contacts" method="post">'+"firstname :" +'<input type="text" name="firstName">'+ '<br/>' + "lastName :" + '<input type="text" name="lastName">' + '<br/>' + "phone:"+'<input type="text" name="phone">'
	+'<br/>'+'<input type="submit" name="save">'+'</form>';
	//res.status(200);
	res.send(html1);
    //console.log(list1[id]);
  //console.log(req.body);
});*/

router.put('/:id', function(req, res, next) {
  //console.log(req.body);
  if(list1[req.params.id]["firstName"]!=req.body.firstName)
  list1[req.params.id]["firstName"]=req.body.firstName;
 var path='./routes/data/'+id+'-Contact.json';;
	var fs = require('fs');
	   fs.open(path, "w+", function(err) {
    if(err) {
        console.log("not open updateddd");
    }
	}); 
     fs.writeFile(path, JSON.stringify(list1[id]), function(err) {
    if(err) {
        console.log("not updatedd");
    }
	});
  //fs.close(path);
  res.send(list1[req.params.id]);


});

module.exports = router;
