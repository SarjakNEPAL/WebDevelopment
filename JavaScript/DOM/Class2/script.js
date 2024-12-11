//constants
const head=document.getElementById("Headingwa");
const btn=document.getElementById("btn-wow");
const btn_add=document.getElementById("add");
const btn_rem=document.getElementById("rem");
const list_add=document.getElementById("fruits");

//console.logs
console.log(head);
btn.addEventListener("click",()=>{
    console.log("You Clicked The Button");
})

btn_add.addEventListener("click",()=>{
    var newItem=document.createElement("li");
    newItem.className="list-item";
    
    newItem.textContent=prompt("Enter Fruit Name");
    list_add.appendChild(newItem);
});

btn_rem.addEventListener("click",()=>{
    if(list_add.lastElementChild){
        list_add.removeChild(list_add.lastElementChild);
    }
    else{
        alert("No element left");
    }
});

head.style.fontWeight="bold";
head.style.color="blue";

//paragrapgings
document.write("<p id='Para'> This Is the paragraph</p>")
document.getElementById("Para").style.fontWeight="bold";

