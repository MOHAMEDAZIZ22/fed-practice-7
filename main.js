let button = document.querySelectorAll(".button");
let unit = document.querySelectorAll(".unit");
let quantity = document.querySelectorAll(".qty");

button.forEach(calculate)
function calculate(calc){
    calc.addEventListener("click",price)
}
function price(){
    
    let a = this.parentNode.parentNode;
    let u = a.querySelector("td .unit");
    let x = u.value;
    console.log(x)

    let b = this.parentNode.parentNode;
    let v = b.querySelector("td .qty");
    let y = v.value;
    console.log(y)

    let p = x * y;
    console.log(p)
    let result = this.parentNode.nextElementSibling;
    result.innerText=p;
    
}
