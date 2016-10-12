window.onload = function(){
	var title = document.getElementsByTagName("h3");
	var ul = document.getElementsByTagName("ul");
	for(var i = 0, len = title.length;i < len; i++){
		title[i].index = i;
		title[i].onclick = function(){	
			for(var j = 0; j < ul.length; j++){
				ul[j].style.display = "none";
				ul[this.index].style.display = "block";
				title[j].className = "";
				title[this.index].className = "select";
			}	
		};
	}
};