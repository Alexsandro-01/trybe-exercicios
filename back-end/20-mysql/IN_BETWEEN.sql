-------------------------------------------
  
            --  IN - BETWEEN

-------------------------------------------

SELECT * FROM sakila.actor
WHERE first_name IN ('PENELOPE','NICK','ED','JENNIFER');


SELECT * FROM payment WHERE payment_id IN (269, 239, 126, 399, 142);

SELECT title, length FROM film
where length between 50 and 120
ORDER BY length;

-- BETWEEN with string
SELECT * FROM language
WHERE name BETWEEN 'Italian' AND 'Mandarin'
ORDER BY name;

-- between with date
SELECT rental_id, rental_date FROM sakila.rental
WHERE rental_date
BETWEEN '2005-05-27' AND '2005-07-17';

-- Mostre o nome, sobrenome e e-mail dos clientes com os seguintes sobrenomes: hicks, crawford, henry, boyd, mason, morales e kennedy, ordenados por nome em ordem alfabética.
  SELECT first_name, last_name, email FROM customer
  WHERE last_name IN ('hicks', 'crawford', 'henry', 'boyd', 'mason', 'morales', 'kennedy');

-- Mostre o e-mail dos clientes com os address_id 172, 173, 174, 175 e 176, ordenados em ordem alfabética.
  select email from customer
  WHERE address_id IN (172, 173, 174, 175, 176)
  ORDER BY email ASC;

-- Descubra quantos pagamentos foram feitos entre 01/05/2005 e 01/08/2005. Lembre-se de que, no banco de dados, as datas estão armazenadas no formato ano/mês/dia, diferente do formato brasileiro, que é dia/mês/ano.
SELECT count(*) FROM payment
WHERE payment_date
BETWEEN '2005-05-01' AND '2005-08-01';

-- Mostre o título, ano de lançamento e duração do empréstimo de todos os filmes com a duração de empréstimo de 3 a 6. Os resultados devem ser classificados em filmes com maior duração de empréstimo primeiro. Em caso de empate, ordene em ordem alfabética pelo título.
SELECT title, release_year, rental_duration from film
WHERE rental_duration
BETWEEN 3 AND 6
ORDER BY rental_duration DESC, title ASC;
-- Monte um relatório que exiba o título e classificação dos 500 primeiros filmes direcionados para as classificações indicativas G, PG e PG-13. Os resultados devem estar ordenados por título.
SELECT * FROM film
WHERE rating IN ('G', 'PG', 'PG-13')
ORDER BY title
LIMIT 500;
