
const inputText=document.getElementById("name");
const outputDiv=document.getElementById("output");

let arr=[];

function addToDo ()
{
    arr.push(inputText.value);
    displayData();
}

function displayData(){

        outputDiv.textContent=""
        arr.forEach((ele,ind) => {
        
     
        const todoItemDiv=document.createElement("div");
        todoItemDiv.classList.add("todo");
    
        const paraText=document.createElement("p");
        paraText.textContent=ele;           // elements will be added to list
    
    
        const closeButton=document.createElement("button");
        closeButton.textContent="✖";
        closeButton.classList.add("closebutton");
        closeButton.addEventListener('click',()=>removeTODO(ind)); // button created using eventListener
    
        todoItemDiv.append(paraText,closeButton);
        outputDiv.appendChild(todoItemDiv);
        inputText.value="";
    });
    
}

function removeTODO(i){

    arr.splice(i, 1);
    displayData()

}