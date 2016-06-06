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

		if (isset($_GET['tipo'])){
			if ($_GET['tipo'] == 'estoque'){
				$result = DBSelect('produto, produto_estoque', ' WHERE produto.id = produto_estoque.produto_id');
				echo json_encode($result, JSON_PRETTY_PRINT);
			} else {
				$result = DBSelect('produto');
				echo json_encode($result, JSON_PRETTY_PRINT);	
			}
		} else {
			$result = DBSelect('produto');
			echo json_encode($result, JSON_PRETTY_PRINT);
		}
	}

	else {
		echo "Método inválido";
	}