<!--
     Cookies basicallly a text file use for tracking users 
    $_COOKIE gives an Associate Array
    As we force to access the cookie of past time before it get created. Cookie will get deleted from the browser.
    basicallly Cookie takes 7 parameters but 3 first parameters are compusolry, rest are optional.
-->

<?php
//storing: city as key, "Jharkhand" as its value. time()+10 => cookie will get deleted after 10 second as cookie created in the browser.
setcookie("city","Jharkhand", time()+110);

?>