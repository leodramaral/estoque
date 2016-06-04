<?php
	// Abre com Conexão com MySQL
	function DBConnect(){
		$link = @mysqli_connect(DB_HOSTNAME, DB_USERNAME, DB_PASSWORD, DB_DATABASE) or die(mysqli_connect_error());
		mysqli_set_charset($link, DB_CHARSET) or die(mysqli_error($link));

		return $link;
	}

	// Fecha Conexão com MySQL
	function DBClose($link){
		@mysqli_close($link) or die(mysqli_error($link));
	}

	// Executa querys
	function DBExecute($query){

		$link 	= DBConnect();
		$result = @mysqli_query($link, $query) or die(mysqli_error($link));
		
		DBClose($link);
		return $result;
	}

	// Lê Registros
	function DBSelect($table, $params = null, $fields = '*'){

		$params = ($params) ? " {$params}" : null;
		$query 	= "SELECT {$fields} FROM {$table}{$params}";
		$result	= DBExecute($query);
		
		if(!mysqli_num_rows($result))
			return false;
		else {
			while ($res = mysqli_fetch_assoc($result)){
				$data[] = $res;
			}	
			return $data;
		}
	}	

	// Insere Registros
	function DBInsert($table, array $data){
		
		$fields	= implode(', ', array_keys($data));
		$values = "'".implode("', '", $data)."'";
		$query 	= "INSERT INTO {$table} ( {$fields} ) VALUES ( {$values} )";
		
		return DBExecute($query);
	}

	// Atualiza Registros
	function DBUpdate($table, array $data, $where = null){

		foreach ($data as $key => $value){
			$fields[] = "{$key} = '{$value}'";
		}
		
		$fields = implode(', ', $fields);
		$where	= ($where) ? " WHERE {$where}" : null;
		$query 	= "UPDATE {$table} SET {$fields}{$where}";

		return DBExecute($query);
	}

	// Deleta Registros
	function DBDelete($table, $where = null){

		$where	= ($where) ? " WHERE {$where}" : null;
		$query 	= "DELETE FROM {$table}{$where}";

		return DBExecute($query);
	}
?>