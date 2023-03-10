function append(value){
    document.getElementById('result').value+=value;
}
function clearInput(){
    document.getElementById('result').value="";
}
function calculate(){
    var ans=eval(document.getElementById('result').value);
    document.getElementById('result').value=ans;
}
function backspace(){
    document.getElementById('result').value=document.getElementById('result').value.slice(0,(value.length-1))
}
