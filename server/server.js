var express = require('express');
var bodyParser = require('body-parser');
var app = express();
var port = 5000;
var doMath = require('./routes/do-math-stuff')



app.use(express.static('server/public'));
app.use(bodyParser.urlencoded({extended: true}));
app.use('/do-math-stuff', doMath)


app.listen(port, function(){
    console.log('listening on port:', port)
});

// app.get('/doMathStuff', function(req,res){
//     console.log('got to doMathStuff');
//     res.send(package);
    
// });
