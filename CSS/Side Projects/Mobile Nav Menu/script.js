function navFun(){
	var allMenu = document.getElementById("navigation-menu");
	
	allMenu.classList.toggle('active');
	
	var closeMenu = document.getElementById("toggle");
	
	closeMenu.classList.toggle('active');
}