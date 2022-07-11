-- A sintaxe geral para fazer um update é:
UPDATE nome_da_tabela
SET propriedade_a_ser_alterada = 'novo valor para coluna'
WHERE alguma_condicao; -- importantíssimo aplicar o WHERE para não alterar a tabela inteira!

-- MySQL Server é que, por padrão, existe uma configuração chamada safe updates mode que só vai te permitir executá-los caso eles incluam quais IDs devem ser modificados.
-- Nesse caso rode esse comando no Workbanch
SET SQL_SAFE_UPDATES = 0;

UPDATE staff
SET first_name = 'Ravein'
WHERE first_name = 'Jon';

-- Alterando duas colunas ao mesmo tempo
UPDATE sakila.staff
SET first_name = 'Rannveig', last_name = 'Jordan'
WHERE staff_id = 4;

--------------------------------------------------------------

-- UPDATE em massa

-- Opção 1 - Incluindo a lista de condições fixas
UPDATE sakila.actor
SET first_name = 'JOE'
WHERE actor_id IN (1,2,3);

-- Opção 2 - Especificando como cada entrada será alterada individualmente
UPDATE sakila.actor
SET first_name = (
CASE actor_id WHEN 1 THEN 'JOE' -- se actor_id = 1, alterar first_name para 'JOE'
              WHEN 2 THEN 'DAVIS' -- se actor_id = 2, alterar first_name para 'DAVIS'
              WHEN 3 THEN 'CAROLINE' -- se actor_id = 3, alterar first_name para 'CAROLINE'
	      ELSE first_name -- em todos os outros casos, mantém-se o first_name
END);
-- https://www.w3schools.com/sql/func_mysql_case.asp

---------------------------------------------------------------------------------------------

-- Fazendo um UPDATE de forma sequencial

-- Se o comando ORDER BY for usado juntamente com o UPDATE, os resultados serão alterados na ordem em que forem encontrados.
-- Se o comando LIMIT for usado em conjunto com o UPDATE, um limite será imposto na quantidade de resultados que podem ser alterados. Caso contrário, todos os resultados que satisfizerem a condição serão atualizados.

UPDATE nome_da_tabela
SET coluna1 = valor1, coluna2 = valor2
[WHERE condições]
[ORDER BY expressao [ ASC | DESC ]]
[LIMIT quantidade_resultados];

-- Exemplo:
UPDATE sakila.staff
SET password = 'FavorResetarSuaSenha123'
WHERE active = 1
ORDER BY last_update
LIMIT 2;


-----------------------------------------------------------------------
              -- Praticando

-- Atualize todas as linhas da tabela sakila.actor que possuem o primeiro nome "JULIA" para "JULES".
update actor
SET first_name = 'JULES'
WHERE first_name ="JULIA";

-- Altere a linha da tabela categoria onde o valor da coluna x é igual "Sci-fi" para "Science Fiction".
update category
SET name = 'Science Fiction'
WHERE name = 'Sci-fi';

-- Corrija para $25 o valor do aluguel da tabela filmes com duração maior que 100 minutos e que possuem classificação "G", "PG" ou "PG-13" e um custo de substituição maior que $20.
-- SELECT COUNT(*) FROM film
UPDATE film
SET rental_rate = 25
WHERE length > 100
AND rating IN ('G', 'PG', 'PG-13')
AND replacement_cost > 20;

-- Agora, o aluguel dos filmes com duração entre 0 e 100 minutos passará a ser $10,00 e o aluguel dos filmes com duração acima de 100 minutos passará a ser de $20,00.
UPDATE film
set rental_rate = 10
WHERE length <= 100;

UPDATE film
SET rental_rate = 20
WHERE length > 100;
