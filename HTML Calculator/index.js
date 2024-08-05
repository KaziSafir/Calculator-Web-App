let display = document.getElementById("display");
function clearall(){
    display.value = "";
}
function buttonval(input){
    display.value += input;
}
function calculate(){
    try {
        display.value = eval(display.value);
    } catch (error) {
        display.value = "Error"
    }
}
function percent(){
    let total = display.value;
    if(isNaN(total)){
        display.value = "Error";
    }
    else{
        total /= 100;
        display.value = total;
    }
}
function posneg(){
    let total = display.value;
    if(isNaN(total)){
        display.value = "Error";
    }
    else{
        display.value = -display.value;
    }
}