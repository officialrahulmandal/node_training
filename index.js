const express = require('express');
const path = require('path');

const app = express();

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');


app.get('/', function(req, res){
  res.render('index', {
    title: 'Hello'
  });
})

app.listen(3000, function(){
  console.log("Listning to port 3000")
})
