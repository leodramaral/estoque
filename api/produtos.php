<?php
require('config.php');
require('CRUD.php');
header('Content-type: application/json; charset=utf-8');

	$method = $_SERVER['REQUEST_METHOD'];

	if ($method == 'POST'){
		$data = file_get_contents("php://input");
		$arr = json_decode($data, true);

		DBInsert('produto', $arr);
	}

	if ($method == 'GET'){
		$result = DBSelect('produto');
		echo json_encode($result, JSON_PRETTY_PRINT);
	}

	else {
		echo "Método inválido";
	}