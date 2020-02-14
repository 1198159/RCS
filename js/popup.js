
var c = document.getElementById("Content");
var modal = [document.getElementById("po0"),document.getElementById("po1"),document.getElementById("po2"),document.getElementById("po3")];
// When the user clicks the button, open the modal 
c.onclick = function(event){
	for(int i = 0; i < modal.length; i++){
		if(event.target == c){
			 modal[i].style.display = "block";
		}
	}
 
}

// When the user clicks on <span> (x), close the modal
$("#Close").click(function() {
  for(int i = 0; i < modal.length; i++){
		modal[i].style.display = "none";
	}
});

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
  for(int i = 0; i < modal.length; i++){
		if(event.target == c){
			 modal[i].style.display = "none";
		}
	}
}

