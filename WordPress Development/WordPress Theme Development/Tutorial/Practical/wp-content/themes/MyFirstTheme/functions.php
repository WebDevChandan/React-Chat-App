<!-- URI: Return path to your current theme directory -->
<?php

function chadan_theme_support(){
    //Add dynamic title tag support
    add_theme_support('title-tag');
}
add_action('after_setup_theme', 'chadan_theme_support');


function chandan_menus(){
    $locations = array(
        'primary' => "desktop Primary Left Sidebar",
        'footer' => "Footer Menu Items"
    );

    register_nav_menus($locations);
}
add_action('init', 'chandan_menus');


function chandan_register_styles(){
    //For getting dynamic version of my custom stylesheet
    $version = wp_get_theme()->get('Version');


    // Dynamically Loading Custom Stylesheet, bootstrap & fontawesome CDN
    wp_enqueue_style('chandan-styles', get_template_directory_uri() . "/style.css", array('chandan-bootstrap'), $version, 'all');
    wp_enqueue_style('chandan-bootstrap', "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/css/bootstrap.min.css", array(), '4.4.1', 'all');
    wp_enqueue_style('chandan-fontAwesome', "https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.13.0/css/all.min.css", array(), '5.13.0', 'all');
}
add_action('wp_enqueue_scripts', 'chandan_register_styles');



function chandan_register_scripts(){

    $version = wp_get_theme()->get('Version');

    // Dynamically Loading Custom JS scripts, Jquery CDN, popper lib &  bootstrap script files
    wp_enqueue_script('chandan-jquery', "https://code.jquery.com/jquery-3.4.1.slim.min.js", array(), '3.4.1', true);
    //5th param is false by default. Since we want this at footer. hence set it to true;
    wp_enqueue_script('chandan-popper', "https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js", array(), '1.16.0', true);
    wp_enqueue_script('chandan-bootstrap', "https://stackpath.bootstrapcdn.com/bootstrap/4.4.1/js/bootstrap.min.js", array(), '3.4.1', true);
    wp_enqueue_script('chandan-main', get_template_directory_uri()."/assets/js/main.js", array(), $version, true);

}
add_action('wp_enqueue_scripts', 'chandan_register_scripts');
?>