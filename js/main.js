function display() {
	var userInput = document.getElementById("userName").value;
	var userComment = document.getElementById("userComment").value;
	console.log(userInput);
	console.log(userComment);
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
}