let btn1 = document.getElementById("d4a");
let btn2 = document.getElementById("d5a");


btn1.addEventListener("click", function(){
    let d = document.getElementById("d4");
   d.setAttribute("class", "bt1");
});


btn2.addEventListener("click", function(){
    let d = document.getElementById("d5");
   d.setAttribute("class", "bt2");
});
