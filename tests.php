<?php
require_once("php/database.php");
$bdd = new Database();
$data = $bdd->queryAll("SELECT * FROM Filiere",array());

echo "<h1>Test</h1>";

echo "<h2>Simple database test : select all filieres</h2>";
echo json_encode($data);

?>  