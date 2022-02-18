let heldValue = null,
heldOperation = null,
nextValue = null;

// ----- FUNCTIONS -----

function add(x, y){
    return Number(x) + Number(y);
}

function subtract(x, y){
    return Number(x) - Number(y);
}

function multiply(x, y){
    return Number(x) * Number(y);
}

function divide(x, y){
    return Number(x) / Number(y);
}

function toPower(x, y){
    return Math.pow(x, y);
}

function toRootPower(x, y){
    // * y root x (take the hold number to the power of 1/current value)
    return Math.pow(y, 1/x);
}

function pi(){
    nextValue = Math.PI;
}

function switchSign(){
    nextValue = Number(nextValue) * -1;
}

function square(){
    heldValue = nextValue * nextValue;
    nextValue = null;
}

function cube(){
    heldValue = nextValue * nextValue * nextValue;
    nextValue = null;
}

function inverse(){
    heldValue =  1 / nextValue;
    nextValue = null;
}

function squareRoot(){
    heldValue = Math.sqrt(Number(nextValue));
    nextValue = null;
}

function cubeRoot(){
    heldValue = Math.cbrt(Number(nextValue));
    nextValue = null;
}

function sine(){
    heldValue = Math.sin(Number(nextValue));
    nextValue = null;
}

function cosine(){
    heldValue = Math.cos(Number(nextValue));
    nextValue = null;
}

function tangent(){
    heldValue = Math.tan(Number(nextValue));
    nextValue = null;
}

function arcSine(){
    heldValue = Math.asin(Number(nextValue));
    nextValue = null;
}

function arcCosine(){
    heldValue = Math.acos(Number(nextValue));
    nextValue = null;
}

function arcTangent(){
    heldValue = Math.atan(Number(nextValue));
    nextValue = null;
}

function memoryStore(){
    $(".stored-number").text(heldValue);
}

function memoryRecover(){
    const storedNum = $(".stored-number").text();
    $(".next-value").text(storedNum);
    nextValue = storedNum;
}

function memoryClear(){
    $(".stored-number").text("");
}

function clearAll(){
    heldValue = null;
    heldOperation = null;
    nextValue = null;
}

function clearEntry(){
    nextValue = null;
}

function showValue(location, value){
    if(value === null){
        $(location).text("");
    }else{
        $(location).text(Number(value));
    }
}

function setHeldOperation(operation) {

    if(heldOperation !== null){

        heldValue = heldOperation(heldValue, nextValue);

    }else if(nextValue !== null){
        heldValue = nextValue;
    }

    nextValue = null;
    heldOperation = operation;
}

function noNextNum(){
    if(nextValue === null){
        nextValue = heldValue;
    }
}

function updateDisplay(){
    showValue('.held-value', heldValue);
    showValue('.next-value', nextValue);
}

// ----- ON ACTION -----






$(".sine").on("click", function(){
    noNextNum();
    sine();
    updateDisplay();
});

$(".cosine").on("click", function(){
    noNextNum();
    cosine();
    updateDisplay();
});

$(".tangent").on("click", function(){
    noNextNum();
    tangent();
    updateDisplay();
});

$(".arcSine").on("click", function(){
    noNextNum();
    arcSine();
    updateDisplay();
});

$(".arcCosine").on("click", function(){
    noNextNum();
    arcCosine();
    updateDisplay();
});

$(".arcTangent").on("click", function(){
    noNextNum();
    arcTangent();
    updateDisplay();
});

$(".memory-store").on("click", function(){
    memoryStore();
    updateDisplay();
});

$(".memory-recover").on("click", function(){
    memoryRecover();
    updateDisplay(true);
});

$(".memory-clear").on("click", function(){
    memoryClear();
    updateDisplay();
});

$(".pi").on("click", function(){
    pi();
    updateDisplay();
});

$(".square").on("click", function(){
    noNextNum();
    square();
    updateDisplay();
});

$(".cube").on("click", function(){
    noNextNum();
    cube();
    updateDisplay();
});

$(".sign").on("click", function(){
    switchSign();
    updateDisplay();
});

$(".inverse").on("click", function(){
    noNextNum();
    inverse();
    updateDisplay();
});

$(".squareRoot").on("click", function(){
    noNextNum();
    squareRoot();
    updateDisplay();
});

$(".cubeRoot").on("click", function(){
    noNextNum();
    cubeRoot();
    updateDisplay();
});

$(".equals").on("click", function(){

    noNextNum();

    if(heldOperation === divide && (heldValue == 0 || nextValue == 0)){

        alert("You can't divide by zero");
        nextValue = null;
        updateDisplay();

    }else{

        setHeldOperation(null);
        $(".next-operation").text("");
        updateDisplay();
    }

});

$(".toPower").on("click", function(){

    setHeldOperation(toPower);
    $(".next-operation").text("x^y");
    updateDisplay();
});


$(".add").on("click", function(){

    setHeldOperation(add);
    $(".next-operation").text("+");
    updateDisplay();
});

$(".subtract").on("click", function(){

    setHeldOperation(subtract);
    $(".next-operation").text("-");
    updateDisplay();
});

$(".multiply").on("click", function(){
    
    setHeldOperation(multiply);
    $(".next-operation").text("*");
    updateDisplay();
});

$(".divide").on("click", function(){

    setHeldOperation(divide);
    $(".next-operation").text("/");
    updateDisplay();
});

$(".digits button").on("click", function(){

    let valueToAppend = $(this).text();

    if(nextValue === null){
        nextValue = "0";
    // More than one "."
    }else if(valueToAppend === "." && nextValue.indexOf(".") > -1){
        valueToAppend = "";
    }

    nextValue += valueToAppend;
    updateDisplay();
});

$(".clear-all").on("click", function(){

    clearAll();
    updateDisplay();
});

$(".clear-entry").on("click", function(){

    clearEntry();
    updateDisplay();
});


$(".root").on("click", function(){
    setHeldOperation(toRootPower);
    $(".next-operation").text("temp");
    updateDisplay();
});