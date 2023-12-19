<!DOCUTYPE html>
<html>
<head>
<title>PHP CRUD Operation</title>
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<link rel="stylesheet" href="style.css">
</head>

<body>	

<div class="container">

		<!--ADD user Button-->
		<div class="btn">
			<a href="add-user.php"><input type="button" value="Add User"/></a>
		</div>
		
		<!--Table Formation--> 
		<div class="tbl-list">
			<table>
			<thead>
				<tr>
					<th>Sl No</th>
					<th>Name</th>
					<th>Email</th>
					<th>Mobile	</th>
					<th>Password</th>
					<th colspan="2">Operations</th>
				</tr>
				
				<tbody>
				<?php
				require('db.php');
				$get_table = "select * from crud";
				
				$sql_run = mysqli_query($conn, $get_table);
				 
				while($table_colums = mysqli_fetch_assoc($sql_run)){
					?>
				
				<tr>
					<td><?php echo $table_colums['Id']?>.</td>
					<td><?php echo $table_colums['Name']?></td>
					<td><?php echo $table_colums['Email']?></td>
					<td><?php echo $table_colums['Mobile']?></td>
					<td><?php echo $table_colums['Password']?></td>
					<td><a href="update.php?updateid=<?php echo $table_colums['Id']?>"><span class="update">Update</span></a></td>
					<td><a href="delete.php?deleteid=<?php echo $table_colums['Id']?>"><span  class="delete">Delete</a></span></td>
				</tr>
				<tr>				
				<?php	
				}
				?>
				
				</tbody>
				
				
			</thead>
			</table>
		
		</div>

</div>



</body>

</html>