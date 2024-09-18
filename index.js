function data(){
var a=document.getElementById("n1").value;
var b=document.getElementById("n2").value;
var c=document.getElementById("n3").value;
var d=document.getElementById("n4").value;

if(a==""||b==""||c==""||d==""){
    alert("All Fields Are Mandatory");
    return false;
}

else if(b.length<10||b.length>10){
    alert("Number should be of 10 didgits , please enter a valid number");
    return false;
}
else if(isNaN(b)){
    alert("only Numbers should be entered");
    return false;
}
else if(c!=d){
    alert("Please confirm Password");
    return false;
}
else{
    true;
}

}