
// VARIABLES

let operator='';
let previousValue='';
let currentValue='';

//symbols 
let clear=document.querySelector("#clear-btn");
let equal=document.querySelector(".equalsbtn");


//numbers and decimal 
let decimal=document.querySelector(".decimalBtn");
let operators=document.querySelectorAll(".operator");
let allNumbers=document.querySelectorAll(".number");

//screen
let calcScreen=document.querySelector("#screen");



//NUMBERS

function getNumberContent(number){
    if(currentValue.length <= 10){
        currentValue +=number;
    }   
}

allNumbers.forEach((number) => number.addEventListener("click", function(e){
    getNumberContent(e.target.textContent);
    calcScreen.textContent = currentValue;

}));




//OPERATORS

function getOperatorContent(op){
   
    previousOperator=operator;
    operator = op;
    if(previousValue != "" && currentValue !=""){
        calculate();
    }
    previousValue=currentValue;
    currentValue=''
          
}

operators.forEach((op) => op.addEventListener("click", function(e){
    getOperatorContent(e.target.textContent);  
     calcScreen.textContent= previousValue + " " + operator;
      
}));




//CLEAR BUTTON
clear.addEventListener("click", function(){
    previousValue='';
    currentValue='';
    operator='';
   calcScreen.textContent=currentValue;

});


//DECIMAL

function addDecimal(){
    if(!currentValue.includes(".")){
        calcScreen.textContent= currentValue += ".";
        
    }
}

decimal.addEventListener("click",function(){
    addDecimal();
});





//EQUAL

equal.addEventListener("click",function(){
    calculate()
        calcScreen.textContent=previousValue;
        currentValue=''

})

function calculate(){
    previousValue=Number(previousValue);
    currentValue=Number(currentValue);
    
    if(operator==="+"){
        previousValue += currentValue;
        currentValue = previousValue;
    }else if(operator === "-"){
        previousValue -= currentValue;
        currentValue = previousValue;

    }else if(operator === "/"){
        previousValue /= currentValue;
        currentValue = previousValue;
        
    }else if(operator === "*"){
        previousValue *= currentValue;
        currentValue = previousValue;  
    }
    previousValue=previousValue.toString();
    currentValue=currentValue.toString();
    
    
}






