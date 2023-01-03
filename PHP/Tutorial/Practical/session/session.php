<!-- 
    Since, we can't access variables of one file to another pages. So to overcome this issue, session variables comes into play.  
    If we store any value in a variable using session, then their values can be access in multiple pages.
    To store/set and get value of session variable, we need to first start the session.    
    $_SESSION is a Global Array or say, a Global variable of type array/array type. It return an associative array.
    By default, value of session variables stores for only 24 min in the browser. Although we can increase this time by configuring php.ini file and change increase value of session.gc_maxfiletime (By default, it set to 1440 sec === 24 min)
    It is browser dependent. Session build on one browser cannot be access on another browser.
    unset() method used to delete the specific session;
    To remove complete session use session_destroy();
-->

<?php 
    session_start();
    $_SESSION['x'] = 10;
    $_SESSION['y'] = 10;

?>


