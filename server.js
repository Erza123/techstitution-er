const express = require('express');
var bodyparser = require('body-parser');
var path = require('path');

var app = express();
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
//use static files
app.use(express.static(__dirname +'/public'));
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({extended:false}));

const MongoClient= require('mongodb').MongoClient;
const mongoURL='mongodb://localhost:27017/techstitution';
const objectId=require('mongodb').ObjectId;

MongoClient.connect(mongoURL, function(err, database){

    if(err){
        console.log(err);
    }else{
      console.log('MongoDB Connected!');
    }
    qkmk=database.collection('qkmk');
});


app.get('/', function(req, res){
  var title='Forma e regjistrimit te pikave kufitare';
 	res.render('index',{title:title});
});

// app.get('/show', function(req, res){
//   var title='Lista me te dhena';
//  	res.render('show',{title:title});
// });

app.get('/show',function(req,res){
  var title="Lista me te dhena";
  qkmk.find({}).toArray(function(err,docs){
    if(err){
      console.log(err);
    }
  res.render('show',{title:title, docs:docs});
});
});

app.post('/add',function(req,res){
  var data=req.body;
  qkmk.insert(data,function(err,results){
    if(err){
      console.log(err);
    }
      res.redirect('/');
  });

});

app.get('/edit/:id',function(req,res){
  var title='Regjistrimi';
  var id = req.params.id;
  qkmk.findOne({_id: objectId(id)}, function(err,result){
    if(err){
      console.log(err);
    }
    res.render('edit', {title:title, doc:result});

  });

});

app.post('/update/:id',function(req,res){
  var data=req.body;
  var id = objectId(req.params.id);
  qkmk.updateOne({ _id:id}, {$set:data},
  function(err,result){
    if(err){
      console.log(err);
    }
  res.redirect('/show');
});
});

app.get('/delete/:id',function(req,res){
  res.redirect('/');
});

app.get('/exercise', function(req,res){
  var dataJson={
    "id":1,
    "project":"techstitution"

  };

  var projects=[
    {id:1, name:"techstitution"},
    {id:2, name:"techsperience"},
    {id:3, name:"techforpolicy"},
    {}

  ];
  res.render('exercise',{data:dataJson, projects:projects});

});


app.get('*',function(req,res){
  res.send("404 not found")
});

app.listen(3001, function()
{
  console.log('Navigate to http://localhost:3001')
});
