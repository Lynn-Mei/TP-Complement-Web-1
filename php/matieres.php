<?php
require_once("database.php");

class MatieresDao {
	private Database $db;	

	function __construct(){
		$this->db = new Database();
	}

	public function GetMatieres():array{
		$matieres = $this->db->queryAll('select * from matiere',array());

		return $matieres;
	}
}
$bdd = new Database();
$dao = new MatieresDao($bdd);
echo json_encode($dao->GetMatieres());
?>