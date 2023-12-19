<?php
session_start();
?>
<!DOCUTYPE html>
<html>
<head>
<title>Update Data</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="add-user.css">
</head>

<body>

<!--PHP Codes--->
<?php

require 'db.php';

	$id = $_GET['updateid'];
$sql = "select * from crud where Id = $id";
$sql_run =mysqli_query($conn, $sql);

$table_columns = mysqli_fetch_assoc($sql_run);
$name = $table_columns['Name'];
$email = $table_columns['Email'];
$mobile = $table_columns['Mobile'];
$password = $table_columns['Password'];


	if(isset($_POST['update'])){
		$Name =$_POST['name'];
		$Email =$_POST['email'];
		$Mobile =$_POST['mobile'];
		$Password =$_POST['password'];
		
		$sql = "UPDATE crud SET Id =$id, Name ='$Name', Email = '$Email', Mobile = '$Mobile', Password = '$Password' WHERE Id=$id";
		$sql_run = mysqli_query($conn, $sql);
		
		
		if($sql_run){
			header('location:index.php');
		}
		else{
			$_SESSION['update'] = "data not updated";
			// die(mysqli_error($conn));
		}
	}
	
	
?>

	

<div class="container">
		<div class="form-container">
			<form method="post">
			
			<?php
		if(isset($_SESSION['update'])){
			echo "<h2>".$_SESSION['update']."</h2>";
			unset($_SESSION['update']);
		}
			?>
				<label>Name</label>
				<input type="text" placeholder="Enter your name" name="name" value="<?php echo $name?>"/>
				
				<label>Email</label>
				<input type="text" placeholder="Enter your Email" name="email" value="<?php echo $email?>" />
				
				<label>Mobile</label>
				<input type="tel" placeholder="Enter your Number" name="mobile" value="<?php echo $mobile?>"/>
				
				<label>Password</label>
				<input type="password" placeholder="Enter your Password" name="password" value="<?php echo $password?>" />
				
				<input type="submit" value="Update" name="update"/> 
				
			
			</form>
			<?php
				if(isset($_SESSION['update'])){
				echo "<button>Go Back</button>";
				unset($_SESSION['update']);
					
				}else{
					// header('location:index.php');
				}
			?>
		</div>

</div>



</body>

</html>








