<?php
$conn = mysqli_connect("localhost", "root", "abcd", "Database");

if (!$conn) {
  die("Connection failed: ". mysqli_connect_error());
}

$username = $_REQUEST['username'];
$phone = $_REQUEST['phone'];
$email = $_REQUEST['email'];
$query = $_REQUEST['query'];

$sql = "INSERT INTO SampleTable (username, phone, email, query) VALUES ('$username', '$phone', '$email', '$query')";

if (mysqli_query($conn, $sql)) {
  echo "Form data inserted successfully!";
} else {
  echo "Error: ". $sql. "<br>". mysqli_error($conn);
}

// Close connection
mysqli_close($conn);
?>