<?php

$conn = mysqli_connect('localhost', 'root', '', 'learning');
$sql = "select * from api";
$res = mysqli_query($conn, $sql);
$count = mysqli_num_rows($res);

if($count>0){
    while($row=mysqli_fetch_assoc($res)){
        $arr[] = $row;
    }
    echo json_encode($arr);
}
?>