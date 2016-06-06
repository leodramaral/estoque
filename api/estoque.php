<?php
require('config.php');
require('CRUD.php');
header('Content-type: application/json; charset=utf-8');

	$method = $_SERVER['REQUEST_METHOD'];

	if ($method == 'GET'){
		$result = DBSelect('produto, produto_estoque', 'WHERE produto_estoque.produto_id = produto.id', 'produto_estoque.id, produto.nome AS nome_produto, produto_estoque.quantidade, produto_estoque.quantidade_baixa, produto_estoque.data_criacao');
		echo json_encode($result, JSON_PRETTY_PRINT);
	}

	else {
		echo "Método inválido";
	}