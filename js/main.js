function display() {
	var userInput = document.getElementById("userName").value;
	var userComment = document.getElementById("userComment").value;

 var text = document.createTextNode("Username: " +  userInput);
 var message = document.createTextNode("Comment: " + userComment);
 
var newListItem = document.createElement("LI");
	newListItem.className = "list-group-item";

var newUserName = document.createElement("H4");
	newUserName.appendChild(text);

var newComment = document.createElement("P");
	newComment.appendChild(message);
  
	newListItem.appendChild(newUserName);
	newListItem.appendChild(message);
	document.getElementById("commentList").appendChild(newListItem);
    //creating a new button on click of submit button
 	var clearBtn = document.createElement("button");
 	// random function to run when a button is clicked
 function clearBtnFunction() {
 	console.log("this button functio ran!");
 };
 //Assingning values , class, type to the button
     clearBtn.className = "btn btn-large btn-default";
 
    clearBtn.textContent = "Clear All";
    clearBtn.type = "button";
    clearBtn.id = "clear";
   //appending button to the body
document.body.appendChild(clearBtn);
//loading up addEventListener to the button so that it functions when clicked
clearBtn.addEventListener('click',clearBtnFunction, false);
 function clearBtnFunction() {
 	alert("Do you want to permanently delete the comments?");
 	document.getElementById("commentList").removeChild(newListItem);
 	document.body.removeChild(clearBtn);

  
 }
 
}










