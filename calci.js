
function append(value){
    document.getElementById('result').innerHTML+=value;
}
function clearInput(){
    document.getElementById('result').innerHTML="";
}
function calculate(){
    if(document.getElementById('result').innerHTML.includes("^"))
    {
       var cal= document.getElementById('result').innerHTML.replace("^","**");
        document.getElementById('result').innerHTML=eval(cal)
    }
    else{
        var ans=eval(document.getElementById('result').innerHTML);
        document.getElementById('result').innerHTML=ans;
    }
}
function backspace(){
    document.getElementById('result').innerHTML=document.getElementById('result').innerHTML.slice(0,(result.innerHTML.length-1))
}
function sqrt(){
    document.getElementById('result').innerHTML=Math.sqrt(document.getElementById('result').innerHTML);
}

///////////////////////////////////////////////////------------Keyboard Control------------/////////////////////////////////////////////////////////////////
document.addEventListener("keydown", e =>{
    switch(e.key.toLowerCase()){
        case "1":
            append(1)
            break
        case "2":
            append(2)
            break 
        case "3":
            append(3)
            break
        
        case "4":
            append(4)
            break
        case "5":
            append(5)
            break
        case "6":
            append(6)
            break
        case "7":
            append(7)
            break
        case "8":
            append(8)
            break
        case "9":
            append(9)
            break
        case "0":
            append(0)
            break
        case "=":
            case "enter":
            calculate()
            break
        case "+":
            append("+")
            break
        case "-":
            append("-")
            break
        case "*":
            append("*")
            break
        case "/":
            append("/")
            break
        case "^":
            append("^")
            break
        case "backspace":
            backspace()
            break
        case "c":
            clearInput()
            break
        case "s":
            sqrt()
            break
        case ".":
            append(".")
            break
        case "(":
            append("(")
            break
        case ")":
            append(")")
            break
    }   
})