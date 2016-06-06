<?php
require('config.php');
require('CRUD.php');
header('Content-type: application/json; charset=utf-8');

	$method = $_SERVER['REQUEST_METHOD'];

	if ($method == 'POST'){

		$data = file_get_contents("php://input");
		$array = json_decode($data, true);
		$produto_id = $array['produto_id'];
		$quantidadeProduto = DBSelect("produto_estoque", "WHERE produto_id ='{$produto_id}'", 'quantidade');

		$arrayProdutoEstoque = [
				"data_criacao" => $array["data_criacao"],
				"quantidade" => $array["quantidade"],
				"produto_id" => $produto_id,
			];

		if ($quantidadeProduto){
			(string)$arrayProdutoEstoque['quantidade'] = (int)$array['quantidade'] + $quantidadeProduto[0]['quantidade'];
			DBUpdate('produto_estoque', $arrayProdutoEstoque, "produto_id = '{$produto_id}'");

		} else {
			DBInsert('produto_estoque', $arrayProdutoEstoque);
		}

		DBInsert('compra', $array);
		$retorno['success'] = true;
		echo json_encode($retorno);
		
	} else if ($method == 'GET'){
		$result = DBSelect('compra, produto, fornecedor', 'WHERE compra.produto_id = produto.id AND compra.fornecedor_id = fornecedor.id', 'produto.id, produto.nome AS nome_produto, compra.quantidade, compra.value_product, fornecedor.nome AS nome_fornecedor, compra.data_criacao');
		echo json_encode($result, JSON_PRETTY_PRINT);
	} else {
		echo "Método inválido";
	}