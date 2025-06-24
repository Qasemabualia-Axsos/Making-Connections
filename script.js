function changeName(elemenyt){
    var a =document.querySelector("#jane")
    a.innerText="Qassim Aboalia";
}
function remove1(){
    var h1=document.querySelector("#todd");
    var p1=document.querySelector(".first-accept");
    h1.remove();
    p1.remove()

    var span=document.querySelector("#number-2")
    span.innerText=Number(span.innerText)-1;
}
function remove2(){
    var h1=document.querySelector("#phil");
    var p2=document.querySelector(".second-accept");
    h1.remove();
    p2.remove();

    var span=document.querySelector("#number-2")
    span.innerText=Number(span.innerText)-1;
}
function increaseNumber(){
    var span2=document.querySelector("#number-500")
    span2.innerText=Number(span2.innerText)+1;
}