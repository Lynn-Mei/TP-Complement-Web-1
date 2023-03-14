<?php
require_once("database.php");

class LogicielsDao {
	private Database $db;	

	function __construct(Database $bdd){
		$this->db = $bdd;
	}

	public function GetAll():array{
		$logiciels = $this->db->queryAll('select * from logiciel',array());

		return $logiciels;
	}
}
$bdd = new Database();
$dao = new LogicielsDao($bdd);
echo json_encode($dao->GetAll());
?>