function add()
{
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    let z = parseInt(x) + parseInt(y);
    console.log(z);
}
 function sub()
 {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    let z = parseInt(x) - parseInt(y);
    console.log(z);
 }
 function mul()
 {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    let z = parseInt(x) * parseInt(y);
    console.log(z);
 }
 function divi()
 {
    let x = document.getElementById('num1').value;
    let y = document.getElementById('num2').value;
    let z = parseFloat(x) + parseFloat(y);
    if (parseFloat(y) === 0) {
    console.log("Error: Division by zero");
} else {
    console.log(parseFloat(x) / parseFloat(y));
}


 }