var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = process.env.PORT || 5000;
var doMath = require('./routes/do-math-stuff')



app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/do-math-stuff', doMath)


app.listen(port, function(){
    console.log('listening on port:', port)
});
