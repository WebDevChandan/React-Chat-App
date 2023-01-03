<!-- Note: We can't use echo to print an Array. Because the default behavior of PHP is to convert an array to string. Hence, echo doesn't do it. Thus, we can use print_r to print the array -->


<?php
/*

//Index Array
$arr = array("Chandan", true, "Singh");

foreach($arr as $list){
    echo $list;
    echo "<br>";
}

//Associative array: Stores Data in the form of Key & value pair;
$assArr = array(
    "fName" => "Chandan",
    "bol" => true,
    "title" => "Singh",
);

echo '<pre>';
//Gives the length of Associative Array
echo count($assArr);

*/

// DROP DOWN USING ARRAY;   
 $arr = array('Delhi', 'Jharkhand', 'Bihar', 'Odisha', 'Mumbai');
 sort($arr);
?>

<select>
    <option value="">Select</option>
    <?php 
        foreach($arr as $states){
            echo '<option>'.$states.'</option>';
        }
    ?>

</select>