<?php
require_once("database.php");

class FilieresDao {
	private Database $db;	

	function __construct(){
		$this->db = new Database();
	}

	public function GetFilieres():array{
		$filieres = $this->db->queryAll('select * from filiere',array());

		return $filieres;
	}
}

$bdd = new Database();
$dao = new FilieresDao($bdd);
echo json_encode($dao->GetFilieres());

?>