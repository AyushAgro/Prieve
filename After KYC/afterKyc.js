function counter1(){
    var count=setInterval(function(){
        var c=document.getElementById("counter1"),
        int=parseInt(c.textContent);
        c.textContent=(++int).toString();
        if(int === 30){
            clearInterval(count);
        }
    },24)
}
counter1();

function counter2(){
    var count=setInterval(function(){
        var c=document.getElementById("counter2"),
        int=parseInt(c.textContent);
        c.textContent=(++int).toString();
        if(int == 25){
            clearInterval(count);
        }
    },15)
}
counter2();
function counter3(){
    var count=setInterval(function(){
        var c=document.getElementById("counter3"),
        int=parseInt(c.textContent);
        c.textContent=(int=9+int).toString();
        if(int == 900){
            clearInterval(count);
        }
    },0.00020)
}

counter3();