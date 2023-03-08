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
