function delecte () {
    let value = confirm ("Are you sure notification is on?");
    if (value){
        console.log ("deleted");

    }
    else {
        console.log("not delected")
    }
    


}
delecte();




const input =document.querySelector("#focus")

input.addEventListener("focus",function(){
    input.style.backgroundColor ="#f6f6f6f";
    input.style.padding ="0.3rem";
    input.style.color ="green";

});

input.addEventListener("blur",function(){
    input.style.backgroundColor ="#transparent";
});

input.addEventListener("copy",function(){
    console.log("you have copied")
});
input.addEventListener("cut",function(){
    console.log("you have cut")
});

input.addEventListener("paste",function(){
    console.log("you have paste")
});









