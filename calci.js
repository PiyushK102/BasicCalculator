


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
