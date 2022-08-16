<?php
$servername = "localhost";
$username = "root";   //change this to your database username
$password = "root";  //change this to your database password
$database="attendance";  //change this to your datbase name 
$table="student"; //change this to your table names

// Create connection
$conn = mysqli_connect($servername, $username, $password,$database);

// Check connection
if (!$conn) {
  die("Connection failed: " . mysqli_connect_error());
}
echo "Connected successfully";
?>