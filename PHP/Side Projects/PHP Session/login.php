<!DOCTYPE html>
<html>
<head>
<title> PHP Session Tutorial
</title>
</head>



<?php
session_start();
include("db.php");

if(isset($_POST['login'])){
	$Email = $_POST['email'];
	$Password = $_POST['password'];
	
	$sql = "select * from session where EMAIL='$Email'"; //We stored user's input email ($Email)into the column (EMAIL) of db table name(session)
	$sql_run=mysqli_query($conn, $sql);  //Use this function to run the above query ($sql) 


	$email_found = mysqli_num_rows($sql_run); //Using this function, we check any already existed email in any rows of DB table(session) matched with the user's input email or not.

	if($email_found>0){
		$tb_row =mysqli_fetch_assoc($sql_run);  //using mysqli_fetch_assoc function, we can get all the columns of that particular row where user's input email address matched.
		
		$get_pass = $tb_row['PASSWORD'];
		
		if($get_pass == $Password){
			
		// echo "Correct pass";
		// die();
		
		$_SESSION['Email'] = $Email;
		header('location:index.php');
		}else{
			
		echo "InCorrect pass";
		die();
		}
		
	}
	else{
		echo "email doesn't found";
		die();
	}
	
}

?>



<form action="login.php" method="post">
<label>Email</label>
<input type="email" name="email"/>

<label>Password</label>
<input type="password" name="password"/>

<input style="margin:0 10px; cursor:pointer;" 	type="submit" name="login" value="Login"/>
</form>

















<body>
</body>
</html>