<?php

session_start();

if($_SESSION['Email']){
	
echo "Welcome ".$_SESSION['Email'];

}
else{
	header('location:login.php');
}

?>


</br>
<a href="logout.php">Logout</a>