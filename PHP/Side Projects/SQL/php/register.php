<?php
session_start();
$conn = mysqli_connect('localhost', 'root', '', 'registertest');

if(isset($_POST['register_data'])){
	$fName = $_POST['fname'];
	$lName = $_POST['lname'];
	$Email = $_POST['email'];
	$Password = $_POST['password'];
	$Gender = $_POST['gender'];
	$phNumber = $_POST['phnumber'];
	$Dob = date('Y-m-d', strtotime($_POST['dob']));
	$Role = $_POST['role'];
	
	// Upload Photo Declaration
	$filename = $_FILES['photo']['name']; 				// Provide File Name & type (Ex: image/png)
	$tmpname = $_FILES['photo']['tmp_name'];			// Provide File's Temp path having unsupported image extension (Ex: .tmp)
	
	$folder = '../upload/';					// Destination Folder / Address
	move_uploaded_file($tmpname,$folder.$filename);
	
	
	$query = "INSERT INTO registration(FNAME, LName, EMAIL, PASSWORD, GENDER, phNUMBER, DOB, ROLE, PHOTO) VALUES('$fName', '$lName', '$Email', '$Password', '$Gender', '$phNumber', '$Dob', '$Role', '$filename')";
	$query_run = mysqli_query($conn, $query);
	
	if($query_run){
		$_SESSION['status'] = "Registration Successfull";
		header('Location: ../index.php');
	}
	else{
		$_SESSION['status'] = "Registration Failed";
		header('Location: index.php');
	}
}



?>