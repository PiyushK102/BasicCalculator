function append(value){
    if(value!='^'){
        
        document.getElementById('result').innerHTML+=value;
        var show=document.getElementById('result').innerHTML
        var cal=document.getElementById('result').innerHTML
    }
    else{
        var show=document.getElementById('result').innerHTML+='^'
        var cal=document.getElementById('result').innerHTML+='**'
    }
}
function clearInput(){
    document.getElementById('result').innerHTML="";
}
function calculate(){
    var ans=eval(cal);
    document.getElementById('result').innerHTML=ans;
}
function backspace(){
    document.getElementById('result').innerHTML=document.getElementById('result').innerHTML.slice(0,(result.innerHTML.length-1))
}
function sqrt(){
    document.getElementById('result').innerHTML=Math.sqrt(document.getElementById('result').innerHTML);
}
function cbrt(){
    document.getElementById('result').innerHTML=Math.cbrt(document.getElementById('result').innerHTML);
}