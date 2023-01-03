<!-- In PHP, there is 2 mehtods to retieve data from the form. "GET" & "POST"
    We can only retieve data using name
    GET: Data transfer through URL. $_GET(Global Array) to retrieve GET Data in the form of an Associative Array.
    POST: Data transfer in hidden form. $_POST(Global Array) to retrieve POST Data in the form of an Associative Array.
 -->

<?php 
    // isset() method used to check, the name value meet in the Associative array or not. Ex: As I click on submit. $POST create an Associative array consisting of name ['submit'] with value 'submit'. Until i not click, Associative array would be look like this. Array();
    
    if(isset($_POST['submit'])){
        $num2 = $_POST['num2'];
        $num1 = $_POST['num1'];
        echo "<pre>";
        print_r($_POST);
        echo $num1+$num2;
    }
?>

<!-- 
    Array
        (
            [num1] => 10
            [num2] => 10 
            [submit] => Submit
        )
 -->

 <form method="POST">
    <input type="text" name="num1" required/> <br>
    <input type="text" name="num2" required/><br>
    <input type="submit" name="submit" />
 </form>

