var express = require('express');
var bodyParser = require('body-parser');
var path = require('path');
var app = express();
app.set('views',path.join(__dirname,'views'));
app.set('view engine','ejs');

app.use(bodyParser.urlencoded({extended : true}));
app.use(bodyParser.json());

var router = express.Router();
app.use(express.static(__dirname+'/public'))
router.get('/',function(req,res){	
res.json({data : 'All is well'})
});

router.get('/users',function(req,res,next){
	res.render('index')
});


app.use('/api', router);
app.listen(8080);