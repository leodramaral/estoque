<?php
require('config.php');
require('CRUD.php');
header('Content-type: application/json; charset=utf-8');

	$method = $_SERVER['REQUEST_METHOD'];

	if ($method == 'POST'){
		$data = file_get_contents("php://input");
		$array = json_decode($data, true);
		$nome_produto = $array['nome'];
		$check = DBSelect('produto', "WHERE nome = '{$nome_produto}'");

		if($check){
			$retorno['success'] = false;
			echo json_encode($retorno);
			return false;
		} else {
			DBInsert('produto', $array);
			$retorno['success'] = true;
			echo json_encode($retorno);
		}

	} else if ($method == 'GET'){

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
	} else {
		echo "Método inválido";
	}