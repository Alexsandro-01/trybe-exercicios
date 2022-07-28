-- Exclua do banco de dados o ator com o nome de "KARL".

DELETE from film_actor
WHERE actor_id = 12; -- id de KARL, preciso excluir a referencia do ator nessa tabela;

DELETE FROM actor
WHERE first_name ='KARL';
-- select * from actor WHERE first_name = 'KARL';
-- SELECT * from film_actor WHERE actor_id = 12

-- Exclua do banco de dados os atores com o nome de "MATTHEW".

SELECT * FROM actor
WHERE first_name = 'matthew'; -- achando os matthews
DELETE from film_actor
WHERE actor_id IN (8, 103, 181);
DELETE from actor
WHERE actor_id IN (8, 103, 181);

-- Exclua da tabela film_text todos os registros que possuem a palavra "saga" em suas descrições.
-- Apague da maneira mais performática possível todos os registros das tabelas film_actor e film_category.
-- Inspecione todas as tabelas do banco de dados sakila e analise quais restrições ON DELETE foram impostas em cada uma. Use o Table Inspector para fazer isso (aba DDL).
-- -- Exclua o banco de dados e o recrie (use as instruções no início desta aula).