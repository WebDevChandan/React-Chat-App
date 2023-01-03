function getBlur(){
var Blur = document.getElementById("blur");
var formModal = document.getElementById("form-PopUp");
Blur.classList.toggle("blured");
formModal.classList.toggle('form-toggle');
}


	let showPassIcon = document.getElementById('passIcon');
	let showPassText = document.getElementById('userPassword');

	let IsClick=true;
		showPassIcon.addEventListener('click',function(){
	if(IsClick){
				showPassIcon.setAttribute('class','fa fa-eye');
				showPassText.setAttribute('type', 'text');
				IsClick=false;
				}
	else{
				showPassIcon.setAttribute('class','fa fa-eye-slash');
				showPassText.setAttribute('type', 'password');
	IsClick=true;
	}
})

let showConfirmPassIcon = document.getElementById('ConfirmPassIcon');
let showConfirmPassText = document.getElementById('confirmUserPassword');

let ConfirmIsClick = true;
showConfirmPassIcon.addEventListener('click',function(){
	if(ConfirmIsClick){
		showConfirmPassIcon.setAttribute('class','fa fa-eye');
		showConfirmPassText.setAttribute('type','text');
		ConfirmIsClick=false;
	}
	else{
		showConfirmPassIcon.setAttribute('class','fa fa-eye-slash');
		showConfirmPassText.setAttribute('type','password');
		ConfirmIsClick=true;
	}
});