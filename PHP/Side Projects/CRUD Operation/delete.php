<?php
include 'db.php';

if(isset($_GET['deleteid'])){
	$id = $_GET['deleteid'];

 $sql = "delete from crud where Id = '$id'";
 
 $sql_run = mysqli_query($conn, $sql);
 
 if($sql_run){
header('location:index.php');
 }
 else{
	 die( mysqli_error($conn));
 }


}
?>