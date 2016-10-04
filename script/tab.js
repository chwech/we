window.onload = function(){
	var title = document.getElementsByTagName("h3");
	for(let i = 0; i < title.length; i++){
		title[i].onclick = function(){
			var ul = document.getElementsByTagName("ul");
			for(let j = 0; j < ul.length; j++){
				ul[j].style.display = "none";
				title[j].className = "";
			}
			ul[i].style.display = "block";
			title[i].className = "select";
		}
	}
}