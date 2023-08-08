function fun1(){

    var x=Number(document.getElementById("input").value);
    var y=document.getElementById("output");

    if(isNaN(x)){
        y.innerHTML="Enter valid Number";

    }
    else if(x%2==0){
        y.innerHTML=x+"is Even Number";

    }
    else{
        y.innerHTML=x+"is Odd valid Number";
    }
}