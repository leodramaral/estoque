# Fluxo de Estoque


### Banco de dados
Para acesso ao banco de dados, altere o arquivo `/api/config.php` com as constantes:

<p><code>DB_HOSTNAME</code></p>
<p><code>DB_USERNAME</code></p>
<p><code>DB_DATABASE</code></p>
<p><code>DB_PASSWORD</code></p>

Com os seus respectivos parâmetros de acesso ao banco.

### Bibliotecas externas
Todas as bibliotecas externas encontram-se no próprio repositório do projeto, sendo assim, é possível utilizar o programa sem acesso à internet.

* Bootstrap v3.3.6
* Angular JS v1.5.6
* Angular-route v1.5.6
* JQuery v.2.2.4

### Features

Implementadas:

* Listagem de todos os dados de todas as tabelas
* Cadastro de todas as tabelas, exceto `produto_estoque`, pois a mesma é povoada através de outras inserções
* Validação de campos: Telefone, CPF, Email e Nomes
* Upload de imagens
* Feedback visual de excito ou falhas

Não implementadas:
* O limite de 50 compras diárias
* Exibição de `datas` nas listagens
* Validação do campo `valor`
