const display = document.getElementById("display") ;
function appendToDisplay(input){
    display.value += input;
}

function clearDisplay(){
    display.value ="";
}
function deleteLast() {
    display.value = display.value.slice(0, -1);
}
function calculate(){
    try{
        display.value = eval(display.value)
    }
    catch(error){
        display.value = "Syntax Error";
    }
    
}
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' || e.key === '=') {
        e.preventDefault();
        calculate();
    }
    else if (e.key === 'Backspace') {
        deleteLast();
    }
    else if (e.key === 'Escape') {
        clearDisplay();
    }
    else if (/^[0-9.+\-*/]$/.test(e.key)) {
        appendToDisplay(e.key);
    }
});
