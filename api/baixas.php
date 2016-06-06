<?php
require('config.php');
require('CRUD.php');
header('Content-type: application/json; charset=utf-8');

	$method = $_SERVER['REQUEST_METHOD'];

	if ($method == 'POST'){
		$data = file_get_contents("php://input");
		$array = json_decode($data, true);
		$produto_id = $array['produto_id'];
		$check = DBSelect("produto_estoque", "WHERE produto_id ='{$produto_id}'", 'quantidade, quantidade_baixa');

		$quantidade = $check[0]['quantidade'];
		$quantidadeBaixa = $check[0]['quantidade_baixa'];
		$total = (int)$quantidade - (int)$quantidadeBaixa;

		if ((int)$array['quantidade'] > $total){
			$retorno['success'] = false;
			echo json_encode($retorno);
			return false;
		} else {
			(string)$quantidadeBaixa = $quantidadeBaixa + (int)$array['quantidade'];
			$arrayQuantidadeBaixa = [
				"quantidade_baixa" => $quantidadeBaixa,
			];

			DBUpdate('produto_estoque', $arrayQuantidadeBaixa, "produto_id = '{$produto_id}'");
			DBInsert('produto_solicitacao_baixa_estoque', $array);
			$retorno['success'] = true;
			echo json_encode($retorno);
		}
	} else if ($method == 'GET'){
		$result = DBSelect('produto_solicitacao_baixa_estoque, produto, usuario', 'WHERE produto_solicitacao_baixa_estoque.produto_id = produto.id AND produto_solicitacao_baixa_estoque.usuario_id = usuario.id', 'produto_solicitacao_baixa_estoque.di, produto.nome AS nome_produto, produto_solicitacao_baixa_estoque.quantidade, usuario.nome_usuario AS nome_usuario');
		echo json_encode($result, JSON_PRETTY_PRINT);
	} else {
		echo "Método inválido";
	}