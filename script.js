let screen = document.getElementById("screen");
let del = document.getElementById("delate");
let clear = document.getElementById("clear");
let elements = document.querySelectorAll(".btn");
for(let i = 0 ; i < elements.length ; i++){
    elements[i].addEventListener("click" ,function(){
        screen.innerText += elements[i].innerText;
    } )
}

del.onclick =()=>{
   screen.innerText = screen.innerText.slice(0,-1);

}
clear.onclick = ()=>{
    screen.innerText = "";

}
function calc(value){
    let num = "";
    let operator = "";
    let result = 0;
    for (let i = 0; i < value.length; i++) {
        if (!isNaN(value[i]) || value[i] === ".") {
            num += value[i];
        } else {
            if (num !== "") {
                num = parseFloat(num);
                if (operator === "") {
                    result = num;
                } else {
                    if (operator === "+") result += num;
                    else if (operator === "-") result -= num;
                    else if (operator === "*") result *= num;
                    else if (operator === "/") result /= num;
                    else if (operator === "%") result %= num;
                }
                num = "";
            }
            operator = value[i];
        }
    }
    return result;

}

let equal = document.getElementById("equal")
equal.onclick = ()=>{
    screen.innerText = calc(screen.innerText);
}