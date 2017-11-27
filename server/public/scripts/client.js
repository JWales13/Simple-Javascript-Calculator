$(document).ready(readyNow);
function readyNow (){
    $('.addition').on('click',additionFunction);
    $('.subtraction').on('click',subtractionFunction);
    $('.multiply').on('click',multiplyFunction);
    $('.divide').on('click', divisionFunction);
    $('.getResults').on('click', postData);
    $('.clearButton').on('click', clearEverything);
    appendHistoryToDom();
} //end readyNow

var operator = "";
var num1 = 0;
var num2 = 0;
package = {};
var result = 0;
answer = {}


function additionFunction (){
    operator = "+";
    return operator;
}

function subtractionFunction (){
    operator = "-";
    return operator;
}

function multiplyFunction(){
    operator = "*";
    return operator;
}

function divisionFunction(){
    operator = "/";
    return operator;
}

function postData(){
    var numberOne = $('#firstNumber').val();
    var numberTwo = $('#secondNumber').val();

    var package = {
        num1: numberOne,
        num2: numberTwo,
        operation: operator
    }//end contructor

    console.log('package: ' , package)
    $.ajax({
        method: 'POST',
        url: '/do-math-stuff',
        data: {package},
        success: function(response){
            $.ajax({
                method: 'GET',
                url: '/do-math-stuff',
                data: {answer},
                success: function(response){
                    result = response.number
                    console.log(result);
                    appendResult(result);
                    
                }//end success function
        }) //end ajax result
        }//end success
    })//end ajax post
    
}//end postData



function appendResult(result){
    $('#resultsDiv').append('<p>' + package.num1 + package.operation + package.num2 + '=' + result +'</p>');
    $('input').val('');
    
};//end appendResults

function clearEverything(){
    $('input').val('');
    $('#resultsDiv').html('');
}//end clear everything

function appendHistoryToDom (){
    $.ajax({
        method: 'GET',
        url: '/do-math-stuff',
        data: history,
        success: function (response){
            console.log('history came back');
        }//end success
    })//end ajax get

    
    for(i=0;i<history.length;i++){
        $('#resultsDiv').html('<p>' + package[i].num1 + package[i].operation + package[i].num2 + '=' + package[i].answer +'</p>')
    }//end for loop


}//end append history
