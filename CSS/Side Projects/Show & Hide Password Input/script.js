let Pass=document.querySelector("#password");
let visibility = document.querySelector(".fa-eye-slash");

let isShow=true;
visibility.addEventListener('click',function(){
	if(isShow){
		// alert("True");
		 Pass.setAttribute('type', 'text');
		 visibility.setAttribute('class','fa fa-eye');
	isShow=false;
	}
	else{
		 Pass.setAttribute('type', 'password');
		// alert("Second");
		// visibility.setAttribute('class', 'fa-eye-slash');
		 visibility.setAttribute('class','fa fa-eye-slash');
	isShow=true;
	}
});
