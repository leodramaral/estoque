<?php
require('config.php');
require('CRUD.php');
header('Content-type: application/json; charset=utf-8');

	$method = $_SERVER['REQUEST_METHOD'];
	$data = file_get_contents("php://input");

	$arr = json_decode($data, true);

	if ($method == 'GET'){
		DBInsert('usuario', $arr);
	} else {
		echo "Método inválido";
	}