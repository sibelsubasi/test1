
function fn_shrink(){ // function: shrink up and down
	var icerik = document.getElementById('content');
	var button = document.getElementById('show-more');

	button.onclick = function(){

		if (icerik.className == "open"){

	        icerik.className = "";
	        button.innerHTML = "Show More";

	    } else {

	        icerik.className = "open";
	        button.innerHTML = "Show Less";
	    }
	};
}

window.onload = function(){ //when document is ready
	fn_shrink();
};
