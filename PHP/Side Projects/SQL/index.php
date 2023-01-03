<?php 
session_start();?>
<!DOCTYPE html>
<html>
<head>
<title>Registration Form SQL DataFetch</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0"/>
<link rel="stylesheet" href="css/style.css"/>
</head>
<body>
<div class="register">
<h1> Regsiteration Form</h1>
	<?php
	if(isset($_SESSION['status'])){
		echo "<h2>".$_SESSION['status']."</h2>";
		unset($_SESSION['status']);
	}
	?>
	<form action="php/register.php" method="post" enctype="multipart/form-data">
	
	<label for="firstname">First Name</label>
	<input type="text" placeholder="First Name" id="firstname" name="fname"/>
	<label for="lastname">Last Name</label>
	<input type="text" placeholder="Last Name" id="lastname" name="lname"/>
	
	<label for="lastname">Email</label>
	<input type="email" placeholder="Enter Email" name="email"/>
	
	<label for="lastname">Password</label>
	<input type="password" placeholder="Enter Password" name="password"/>
	
	<div class="genders">
	<label>Gender:</label>
	<label for="male">Male <input type="radio" value="M" name="gender" id="male"/></label>
	<label for="male">Female <input type="radio" value="F" name="gender" id="female"/></label>
	<label for="male">Other <input type="radio" value="O" name="gender" id="other"/></label>
	
	</div>
	
	<label>Phone Number</label>
	<input type="tel" name="phnumber"/>
	
	
	<label>D.O.B</label>
	<input type="date" placeholder="Enter your DOB" name="dob"/>
	
	<label>Role</label>
	<select style="margin:10px 0px;cursor:pointer;" name="role">
		<option value="">Select Role</option>
		<option value="Student">Student</option>
		<option value="Admin">Admin</option>
	</select>
	
	
	<label>Upload Photo</label>
	<input type="file" name="photo"/>
	
	<input type="submit" value="Register" name="register_data"/>
	</form>
</div>

<div class="tbl">
<h2>Table List</h2>
<table>
	<thead>
		<tr>
			<th>Id</th>
			<th>First Name</th>
			<th>Gender</th>
			<th>Role</th>
			<th>Photo</th>
		</tr>
	</thead>
	
	<tbody>
	<?php
	$conn = mysqli_connect('localhost', 'root', '', 'registertest');
	$selectquery ="select * from registration";
	$query_run = mysqli_query($conn, $selectquery);
	
	
	while($result = mysqli_fetch_array($query_run)){
	?>

		<tr>
			<td><?php echo $result['ID']; ?></td>
			<td><?php echo $result['FName'];?></td>
			<td><?php echo $result['GENDER'];?></td>
			<td><?php echo $result['ROLE'];?></td>
			<td> <img src="upload/<?php echo $result['PHOTO'];?>" style="height:100px;"/></td>
		</tr>

		<?php	
		}
	?>
	</tbody>
</table>
</div>

<script src="js/main.js">
</script>
</body>
</html> 