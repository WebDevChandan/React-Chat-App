<?php
session_start();
?>

<!DOCUTYPE html>
<html>
<head>
<title>Add User</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="add-user.css">
</head>

<body>


<!--PHP Codes--->
<?php

require("db.php");

if(isset($_POST['submit'])){
	
	$Name = $_POST['name'];
	$Email= $_POST['email'];
	$Mobile = $_POST['mobile'];
	$Password = $_POST['password'];
	
	$sql = "insert into crud(Name, Email, Mobile, Password) values('$Name', '$Email', '$Mobile', '$Password' )";
	
	$sql_run = mysqli_query($conn, $sql);

	if($sql_run){
		
		$_SESSION['addUser'] ="Form Submitted Successfully";
			header('location:index.php');
	}else{
		$_SESSION['addUser'] = "not submitted";
			header('location:add-user.php');
	}
	
	}
	

?>

	

<div class="container">
		
<?php
		if(isset($_SESSION['addUser'])){
			echo "<h2>".$_SESSION['addUser']."</h1>";
			unset($_SESSION['addUser']);
		}
		?>		
		<div class="form-container">
			<form action="<?php echo htmlentities($_SERVER['PHP_SELF']);?>" method="post">
			
				<label>Name</label>
				<input type="text" placeholder="Enter your name" name="name"/>
				
				<label>Email</label>
				<input type="text" placeholder="Enter your Email" name="email" />
				
				<label>Mobile</label>
				<input type="tel" placeholder="Enter your Number" name="mobile"/>
				
				<label>Password</label>
				<input type="password" placeholder="Enter your Password" name="password" />
				
				<input type="submit" value="Submit" name="submit"/>
			
			</form>
		</div>

</div>


</body>

</html>