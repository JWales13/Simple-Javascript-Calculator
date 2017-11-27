var express = require('express');
var router = express.Router();
var pool = require('../modules/pool.js')


var package = {}
router.post('/', function (req,res){
    package.num1 = req.body.package.num1;
    package.num2 = req.body.package.num2;
    package.operation = req.body.package.operation;
    console.log('package constructed', package);
    res.sendStatus(200);
})






var history = []
 answer = {};


router.get('/', function (req,res){
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
        

    }//end switch
    console.log('the result is ' , answer);
    package.answer = answer.number;
    storeToHistory();
    res.send(answer, history);

});//end get

function storeToHistory(){
    history.push(package);
}

module.exports = router