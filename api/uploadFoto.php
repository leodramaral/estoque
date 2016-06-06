<?php
   if(isset($_POST))
   	{
    	date_default_timezone_set("Brazil/East");

    	$nome = $_FILES['imagem']['name'];
      	$diretorio = '../imagens/';
 
      	move_uploaded_file($_FILES['imagem']['tmp_name'], $diretorio.$nome);
      	echo $nome;
   }