<?php
    header('Access-Control-Allow-Origin: *');


    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

    $mysql = new mysqli('localhost', 'root', '', 'user');

    $mysql->query("INSERT INTO `users` (`username`, `email`, `password`) VALUES ('$username', '$email', '$password')")


    $json = json_encode($_POST);

    $mysqli->close();
    echo $json;
?>