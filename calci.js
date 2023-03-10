function append(value){
    document.getElementById('result').innerHTML+=value;
}
function clearInput(){
    document.getElementById('result').value="";
}
function calculate(){
    var ans=eval(document.getElementById('result').innerText);
    document.getElementById('result').value=ans;
}
function backspace(){
    document.getElementById('result').innerHTML=document.getElementById('result').innerText.slice(0,(result.innerText.length-1))
}
