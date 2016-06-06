<?php
require('config.php');
require('CRUD.php');
header('Content-type: application/json; charset=utf-8');

	$method = $_SERVER['REQUEST_METHOD'];
	
	if ($method == 'POST'){
		$data = file_get_contents("php://input");
		$array = json_decode($data, true);
		$nome_usuario = $array['nome_usuario'];
		$check = DBSelect('usuario', "WHERE nome_usuario = '{$nome_usuario}'");
		
		if ($check){
			$retorno['success'] = false;
			echo json_encode($retorno);
			return false;
		} else {
			DBInsert('usuario', $array);
			$retorno['success'] = true;
			echo json_encode($retorno);
		}
	} else if ($method == 'GET'){
		$result = DBSelect('usuario');
		echo json_encode($result, JSON_PRETTY_PRINT);
	} else {
		echo "Método inválido";
	}