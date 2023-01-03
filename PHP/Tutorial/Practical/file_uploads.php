<!-- 
    Just like $_POST and $_GET, $_FILES is also a Global Array.
    To retieve any document data, we need to include encryption type attribute & assign value multipart/form-data with it in the form and use $_Files global array to retieve it.
-->

<!-- RETIEVING FILES -->
<?php
    if(isset($_POST['submit'])){
        echo "<pre>";
        print_r($_FILES);

        // echo $_FILES['doc']['type'];             //Getting file type from the Associative arry of $_FILES  

        
        // MOVING UPLOADED FILES TO ANOTHER FOLDER ('media')
        
        //Accepting 2 Arguments, 1: Getting the temporay path of uploaded file, 2: move the uploaded file to media folder with the same file name.
        move_uploaded_file($_FILES['doc']['tmp_name'], 'media/'.$_FILES['doc']['name']);
    }
?>
<!-- 
Array
    (
        [doc] => Array
            (
                [name] => Chandan_Kumar.webp
                [type] => image/webp
                [tmp_name] => E:\xampp\tmp\php61CB.tmp
                [error] => 0
                [size] => 14484
            )

    )
 -->


<form method="POST" enctype="multipart/form-data">
    <input type="file" name="doc"/>
    <input type="submit" name="submit"/>
</form>