<?php

header("Access-Control-Allow-Origin: *");

require_once('User.php');
$user = new User();

if(isset($_GET['register'])) {
    // ajouter les arguments  
    
    $result = $user->register($_POST['login'], $_POST['password']);
    echo json_encode($result);
}

if(isset($_GET['login'])) {
    $result = $user->login($_POST['login'], $_POST['password']);
    echo json_encode($result);
}

?>