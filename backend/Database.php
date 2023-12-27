<?php

class Database {
    protected $pdo; 
    public function __construct() {

        $this->pdo = new PDO('mysql:host=localhost;dbname=finance_flow;charset=utf8','maelle.lagarde','root');
        $this->pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
        
    }
}

?>