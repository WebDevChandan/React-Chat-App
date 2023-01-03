<?php
// Populate States Name in HTML DropDown Select Options using Array
$states = array('Jharkhand', 'Odisha', 'Bihar', 'Bengal', 'Delhi');
?>

<select> <option>Select States</option>
<?php 
foreach($states as $stateList){
	echo '<option>'.$stateList.'</option>';
}
?>
</select>
</br>
</br>


<table border="1" cellpadding="10" style="border-collapse:collapse;">
<?php
// Populaet Table Data in Html Table
$tble = array(array('S.No.', 'FName', 'LName'), array('1', 'Chandan', 'Kumar'), array('2', 'Amar', 'Prasad'), array('3', 'Pusp', 'Singh'));
 
 foreach($tble as $tableList){
	 echo '<tr>';
	 foreach($tableList as $tbleData){
		 echo '<td>'.$tbleData.'</td>';
	 }
	 echo '</tr>';
 }
?>
</table>


<?php
// Find length of an Array 
$unName = array( 'Chandan', 'Kumar', 'Prafful', 'Kumar');

echo $unName[1]."<br>";	//Array value at index number 1.
print_r($unName);

$arrayLength = count($unName);
// Print value using for Loop
for($i=0; $i<$arrayLength; $i++){
	echo "<br>".$unName[$i]."<br>";
}

// Print the above loop value in Order List
echo '<ol>';
for($i=0; $i<$arrayLength; $i++){
	echo '<li>'.$unName[$i].'</li>';
}
echo '</ol>';
?>