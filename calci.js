function append(value){
    document.getElementById('result').innerHTML+=value;
}
function clearInput(){
    document.getElementById('result').innerHTML="";
}
function calculate(){
    var ans=eval(document.getElementById('result').innerHTML);
    document.getElementById('result').innerHTML=ans;
}
function backspace(){
    document.getElementById('result').innerHTML=document.getElementById('result').innerHTML.slice(0,(result.innerHTML.length-1))
}
