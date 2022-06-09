USE sakila;

-- Na tabela sakila.film, crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.

-- SELECT CONCAT(title, ' - ', rating) AS 'Classificação indicativa' FROM film;

-- Na tabela sakila.address, monte uma query que exiba a rua e o distrito de cada registro em uma coluna apenas, e dê a essa coluna o nome Endereço.

-- SELECT CONCAT(address, ' - ', district) FROM address;

-------------------------------------------
-- Usando o COUNT
-------------------------------------------
-- SELECT COUNT(email) FROM staff;

-------------------------------------------
-- Usando o LIMIT
-------------------------------------------

-- SELECT COUNT(*) FROM rental;

-- # Query + LIMIT quantidade_de_resultados
-- SELECT * FROM sakila.rental LIMIT 10;

-- # Query + LIMIT quantidade_de_linhas OFFSET quantidade_de_linhas
-- SELECT * FROM actor LIMIT 10 OFFSET 4;


-- SELECT * FROM actor WHERE first_name in ('nick', 'ed', 'jennifer');


SELECT DATE_SUB(now(), interval 2 YEAR);