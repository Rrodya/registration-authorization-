<?php
header('Access-Control-Allow-Origin: *');

$db = 'user';
$password = 'root';


if(isset($_POST['username'])) {
    $username = $_POST['username'];
    $email = $_POST['email'];
    $password = $_POST['password'];

}
//$mysql = mysqli_connect('localhost', 'root', '');
//mysqli_select_db($mysql, 'user');

if(isset($username) && isset($email) && isset($password)) {
    $mysql = new mysqli('localhost', 'root', '', 'reg_user');
    $mysql->query("INSERT INTO `users` (`username`, `email`, `password`) VALUES ('$username', '$email', '$password')");
    $mysql->close();
    echo "$username, $email, $password";
}

exit();



//$mysql->query("INSERT INTO `users` (`username`, `email`, `password`) VALUES ('$username', '$email', '$password')");





?>