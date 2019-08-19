var getNumbers = (num) =>{
    let getValue = document.getElementById("result");
    switch(num){
        case 1:
        getValue.value += '1';
        break;
        case 2:
        getValue.value += '2';
        break;
        case 3:
        getValue.value += '3';
        break;
        case 4:
        getValue.value += '4';
        break;
        case 5:
        getValue.value += '5';
        break;
        case 6:
        getValue.value += '6';
        break;
        case 7:
        getValue.value += '7';
        break;
        case 8:
        getValue.value += '8';
        break;
        case 9:
        getValue.value += '9';
        break;
        case 0:
        getValue.value += '0';
        break;
        case '+': 
        getValue.value += '+';
        break;
        case '-':
        getValue.value += '-';
        break;
        case '*':
        getValue.value += '*';
        break;
        case '/':
        getValue.value += '/';
        break;
        case '%':
        getValue.value += '%';
        break;
        case '.':
        getValue.value += '.';
        break;
        case '^':
        getValue.value += '^';
        break;
    }
}
var clean = () => {
    document.getElementById("result").value = "";
}
var backspace = () => {
    var back = document.getElementById("result").value;
    document.getElementById("result").value = back.substring(0, back.length - 1);

}
// calculate
var calculate = () => {
    let getValue = document.getElementById("result");
    let answer = Math.floor(+eval(getValue.value));
    document.getElementById("result").value=  answer;
}