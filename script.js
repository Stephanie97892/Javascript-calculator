
// VARIABLES

//these are blank because they  will be redefined .
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
// this function selects the number and creates it by concatenation 
function getNumberContent(number){  // take a number as a paramenter, 
    if(currentValue.length <= 10){ // if the current value is less than 10 , can only have a max of 10 number  
        currentValue +=number; // add number to currentvalue to make a string of number on the sreen 
        updateScreen(); 
    }   
}

allNumbers.forEach((number) => number.addEventListener("click", function(e){  // for each element add a click eventlistener 
    getNumberContent(e.target.textContent); //calling the function and  passing the textcontent as the argument.  this will add the cumber to the current value 
}));


function updateScreen(){     //! created a new function 
        if (previousValue !== '' && operator !== ''){   // the if statement used depending on the calculation 
            calcScreen.textContent =  `${previousValue} ${operator} ${currentValue}`;
        } else {
            calcScreen.textContent = currentValue;    // makes the text content of the calc screen the same as the current value .
    }
}


//OPERATORS
//! This function fixed the issuse of creating cotinuous sums 
function getOperatorContent(op){    // function declared takes parameter - op 
    if (currentValue !== '') {
        if (previousValue !== '') {  // nesting the if statements evaluated them seprately 
            calculate();
        } else {
            previousValue = currentValue;
        }
        currentValue = '';
        operator = op;
        updateScreen(); 
    }
     
}

// when you select multiple elements using a class name, the variable holding these elements is seen as an object.
// for each is a method on the variable it has (parameter)
//arrow function after => is the code block 
operators.forEach((op) => op.addEventListener("click", function(e){ // for each op run the code block , add event event listener on eah op, the function is on the click (e) 
    getOperatorContent(e.target.textContent); // function block : calls function and gets operator value 
       
}));




//CLEAR BUTTON
clear.addEventListener("click", function(){  // add event listner on the clear buttnon , once run it will clear all valus. 
    previousValue='';
    currentValue='';
    operator='';
   calcScreen.textContent=currentValue; // clears the screen 
});


//DECIMAL
decimal.addEventListener("click",function(){ // actiavtes the function above only when the decimal is clicked.
    if(!currentValue.includes(".")){  // if the current value doesnt included a decimal run the code block
        calcScreen.textContent= currentValue += "."; // concatenates it to the current value on the screen.
        
    }
});


//EQUAL

equal.addEventListener("click",function(){ // add eventlistener to the = button , when clicked run calculate function 
    if (previousValue !== '' && currentValue !== '') {
        calculate(); // Perform the calculation
        calcScreen.textContent = previousValue; // Display the result
        currentValue = previousValue; // Use result for next calculation
        previousValue = ''; // Clear previousValue to prepare for next operation
        operator = '';}
  
})

function calculate(){  // calculate function 
    previousValue=parseFloat(previousValue); // convert values to numbers 
    currentValue=parseFloat(currentValue); // '' 
    
    if(operator==="+"){     // if the operator matches run code
        previousValue += currentValue; // previous values + current value sum - short for previous value = previous value + current value
    }else if(operator === "-"){
        previousValue -= currentValue;   

    }else if(operator === "/"){
        previousValue /= currentValue;        
        
    }else if(operator === "x"){
        previousValue *= currentValue;         
    }
    previousValue=previousValue.toString(); // covert to string so it can be shows in the screen 
    currentValue='';   
    
}

 

  






