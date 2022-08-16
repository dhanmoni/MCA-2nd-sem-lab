<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>insertform</title>
</head>
<body>
<?php include "db.php";


$name = $_REQUEST['sname'];
$dob=   $_REQUEST['dob'];

$gender =  $_REQUEST['gender'];
$course =  $_REQUEST['course'];
$dprt = $_REQUEST['dprt'];
$sem =  $_REQUEST['sem'];
$session =  $_REQUEST['stime'];
 
// Performing insert query execution
// here our table name is college
$sql = "INSERT INTO $table  VALUES ('$name',
    '$dob','$gender','$course','$dprt','$sem','$session')";
 
if(mysqli_query($conn, $sql)){
    echo "<h3>data stored in a database successfully.</h3>";

    echo nl2br("\n$name\n $dob\n "
        . "$gender\n $course\n $dprt \n$sem\n $session");
} else{
    echo "ERROR: Hush! Sorry $sql. "
        . mysqli_error($conn);
}
 
// Close connection
mysqli_close($conn);
?>  
</body>
</html>
