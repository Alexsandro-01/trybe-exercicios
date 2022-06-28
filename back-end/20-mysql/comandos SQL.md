# mySQL COMANDS 

- Executa sql no teminal
`docker exec -it mySQL bash`

- O comando USE serve pra definir a referência do banco de dados que será utilizado na query:
`USE nome_do_banco_de_dados_que_quero_conectar;`

- Uma outra forma de fazer referência ao banco, sem ter que rodar o USE é no formato banco_de_dados.tabela:
`SELECT * FROM banco_de_dados.tabela;`

- Para retornar todas as tabelas inicializadas no seu server:
`SHOW TABLES;`

- Visualizar estrutura de uma tabela:
`DESCRIBE nome_da_tabela;`

- Criar um banco de dados:
`CREATE DATABASE nome_do_banco_de_dados;`

- Criar container msql com pasta mapeada
`docker run --name mysql -v /home/alexsandro/mysql-container:/var/lib/mysql -p 3306:3306 -e MYSQL_ROOT_PASSWORD=root -d mysql:5 `
