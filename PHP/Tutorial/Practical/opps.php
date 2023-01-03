<!--
    In PHP, we use "Scope Resolution Operator" -> to call the function inside a class.
    There is Constructor "__construct()" & Destructor "__destruct()" function, which automatically get invoked as object of its class declared/created. 
-->

<?php
class Class1{
    function __construct(){
        echo "This is Constructor of Class1 <br>";
    }
    function test1(){
        echo "Class1_Test";
    }
    function __destruct(){
        echo "<br> This is Destructor  of Class1";
    }
}

class Class2 extends Class1{
    
    function __construct(){
        echo "This is Constructor of Class2 <br>";
        
        //Calling constructor of Parent Class
        parent::__construct();
    }
    
    function test2(){
        echo "Class2_Test";
    }

    function __destruct(){
        echo "<br> This is Destructor  of Class2";
        //Calling destructor of Parent Class
        parent::__destruct();
    }
}
$obj = new Class2();

// Calling Parent class's test1
$obj -> test1();
?>