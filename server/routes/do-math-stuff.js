var express = require('express');
var router = express.Router();
// var mathDone = require('./modules/doesTheMath');


var package = {}
router.post('/', function (req,res){
    console.log('req: ', package);
    package.num1 = req.body.package.num1;
    package.num2 = req.body.package.num2;
    package.operation = req.body.package.operation;
    console.log('package constructed', package);
    res.sendStatus(200);
})







 answer = {};
router.get('/', function (req,res){
    console.log('doing math');
    console.log('package operator: ', package.operation)
    switch (package.operation) {
        case "+":
        answer.number = (Number(package.num1) + Number(package.num2));
        break;
        case "-":
        answer.number = (package.num1 - package.num2);
        break;
        case "*":
        answer.number = (package.num1 * package.num2);
        break;
        default: 
        answer.number = (package.num1 / package.num2);
        

    }
    console.log('the result is ' , answer);
    res.send(answer);
});


module.exports = router