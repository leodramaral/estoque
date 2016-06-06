<?php
require('config.php');
require('CRUD.php');
header('Content-type: application/json; charset=utf-8');

	$method = $_SERVER['REQUEST_METHOD'];

	if ($method == 'POST'){
		$data = file_get_contents("php://input");
		$array = json_decode($data, true);
		$cpf = $array['cpf'];
		$check = DBSelect('fornecedor', "WHERE cpf = '{$cpf}'");

		if ($check){
			$retorno['success'] = false;
			echo json_encode($retorno);
			return false;
		} else {
			DBInsert('fornecedor', $array);
			$retorno['success'] = true;
			echo json_encode($retorno);
		}
	} else if ($method == 'GET'){
		$result = DBSelect('fornecedor');
		echo json_encode($result, JSON_PRETTY_PRINT);
	} else {
		echo "Método inválido";
	}