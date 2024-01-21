
const InputBox = document.getElementById("InputBox"); 
const ListCOntainer = document.getElementById("List-Container");

function addTask(){

    if (InputBox.value == '') { // we are checking if the value in the input is empty
        
        alert("You must write something!")
    } else
    {
        let TempLi = document.createElement("li"); //we would create an li element and store it in in a variable called TempLi
        TempLi.innerHTML = InputBox.value; // we would update the value of TempLi with the value we put in our input field
        ListCOntainer.appendChild(TempLi); // we insert the TempLi inside the the List Container element
        
        let Span = document.createElement("span");
        Span.innerHTML = "\u00d7";
        TempLi.appendChild(Span);

    }

    //document.getElementById("InputBox").value = '';  

    InputBox.value = '';
    savedata() // to save the data into the browser
}

ListCOntainer.addEventListener("click",function(e){
    if (e.target.tagName.toLowerCase() == "li"){
        e.target.classList.toggle("checked");
        savedata() // to save the data into the browser
    }
    else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove(); // to remove/delete an element
        savedata() // to save the data into the browser
    }
},false);

function savedata(){
    localStorage.setItem("data", ListCOntainer.innerHTML)
}

function ShowTask(){
    ListCOntainer.innerHTML = localStorage.getItem("data");
}


ShowTask() //get the data stored in the browsers memory