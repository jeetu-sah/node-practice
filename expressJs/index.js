const path = require('path');
const express = require('express');
const app = express();
const hbs = require('hbs');
const request = require('request');


//define static path of variable of web pages.
const staticPath = path.join(__dirname , 'front-webu');
const staticPath2 = path.join(__dirname , '../front-webu');
//define absolute path of resource file 
const resourcePath = path.join(__dirname , 'resources');
//define absolute path of partial and common files
const commonFilePath = path.join(__dirname , 'resources/includes');



//set templating engine
app.set('view engine', 'hbs');
//set resource file or view file path.
app.set('views',resourcePath);
hbs.registerPartials(commonFilePath);

//built in middleeare
app.use(express.static(staticPath));
app.use(express.static(staticPath2));

//app.use(express.static(__dirname));

app.get('/', function (req, res) {
  res.render('index');
});


app.get('/about/:id', function (req, res) {
  var userId = req.params.id;
    //res.send('Working');
    res.render('about');
});

app.get('/contact-us', function (req, res) {
  res.send('Contact Us page')
});
app.get('*', function (req, res) {
  res.render('404',{pagename:"404"})
});

app.listen(8000 , ()=>{
    console.log("Server listen")
});

