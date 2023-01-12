// What is currently displayed
let value = "";
// Stores the first value, so the 2nd can be created
let value1 = 0
// Maths sign like + -...
let sign = "";
// Permission to change value to the only symbol. Allows numbers with 2+ digits
let perm = true;
// Change current values to initial ones
let restart = false;
// Changes the number which is displayed
function New(symbol) {
    // Restarts everything
    if (restart === true){
        restart = false;
        value1 = 0;
        sign = "";
        perm = true;
    }
    if (typeof symbol === "number"){
        // Convert number to string
        symbol = symbol.toString();  
        // If there's nothing displayed/no signs/permission is given
        if (value === "" || sign !== "" && perm === true){
            // Change value to symbol
            value = symbol;
            // If stored value exists, set perm to false, so 2+ digits can be added
            if (value1 !== 0){
                perm = false;
            }
            else{
                perm = true;
            }
        }
        // If value is not empty and its length is less than 9(to prevent overflow)
        else if (value !== "" && value.length < 9){ 
            value += symbol;  
            if (value1 !== 0){
                perm = false;
            }
            else{
                perm = true;
            }
        } 
        // Change the value which is to be displayed
        document.getElementById("text").innerHTML = value;
       
    // If the clicked button is a sign/etc
    } else{
        switch(symbol){
            case "AC":
                restart = true;
                value = "";
                value1 = 0;
                sign = "";
                perm = true;
                document.getElementById("text").innerHTML = value;
                break;
            case "negative":
                value *= -1
                document.getElementById("text").innerHTML = value;
                break;
            case "dot":
                if (!value.includes(".")){
                    value += ".";
                }
                break;
            case "divide":
                value1 = parseFloat(value);
                sign = "//";
                break;
            case "multiply":
                value1 = parseFloat(value);
                sign = "*";
                break;
            case "subtract":
                sign = "-";
                value1 = parseFloat(value);
                break;
            case "add":
                sign = "+";
                value1 = parseFloat(value);
                break;
            case "solve":
                value = Solve(parseFloat(value), sign, value1);
                break;
            case "percent":
                sign = "%";  
                value = Solve(parseFloat(value), sign);
                break;
        }
    }
    console.log(value, value1, sign, perm)
    document.getElementById("text").innerHTML = value;
}
// Solves a maths problem
function Solve(value, sign = "0", value1 = 0) {
    switch (sign) {
        case "//":
            value = value1 / value
            value = parseFloat(value.toFixed(7));
            break;
        case "*":
            value = value1 * value
            break;
        case "+":
            value = value1 + value
            break;
        case "-":
            value = value1 - value
            break;
        case "%":
            value /= 100;
    }
    restart = true;
    value1 = 0;
    sign = "";
    perm = true;
    return value
}