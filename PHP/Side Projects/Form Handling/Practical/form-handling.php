<!DOCTYPE html>
<html>
<head>
<title>
Form Handling
</title>
</head>

<body>
<?php
// Retriving user's input form data at the body (document) and Populate/Keep user's input data in the field or avoid loosing the input data after refreshing the page.

if(isset($_POST['name'])){
$Name = $_POST['name'];	
$Country = $_POST['country'];
$Password = $_POST['password'];

	if(isset($_POST['gender'])){
	$Gender = $_POST['gender'];
	}
	else {
		$Gender = " ";
	}
	
	if(isset($_POST['education'])){
	$Education = $_POST['education'];
	$Education= implode(" | ", $Education);
	}
	else{
		$Education=" ";
	}
}
echo "Your Name:- $Name <br>";
echo "Your Password:- $Password <br>";
echo "Your Country:- $Country <br>";
echo "Your Gender:- $Gender <br>";
echo "Your Education:- $Education <br>";

?>

<form method="post">
</br>	
Name:- <input type="text" name="name"/>
</br>
</br>	
Password:- <input type="password" name="password"/>
</br>
</br>	

Country:-
<select name="country">
<option>Select</option>
<option>India</option>
<option>USA</option>
<option>China</option>
<option>Japan</option>
</select>
</br>
</br>	
Gender:- 
Male: <input type="radio" name="gender" value="Male"/>
Female:	<input type="radio" name="gender" value="Female"/>
</br>
</br>	
Education:-
B.tech: <input type="checkbox" name="education[]" value="B.tech"/>
M.tech <input type="checkbox" name="education[]" value="M.tech"/>
B.Sc: <input type="checkbox" name="education[]" value="B.Sc"/>
</br>
</br>
<input type="submit" value="Submit"/>

</form>
</body>

</html>