SELECT first_name, COUNT(*) FROM sakila.actor
GROUP BY first_name;


-- Média de duração de filmes agrupados por classificação indicativa
SELECT rating, AVG(length)
FROM sakila.film
GROUP BY rating;

-- Valor mínimo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MIN(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Valor máximo de substituição dos filmes agrupados por classificação indicativa
SELECT rating, MAX(replacement_cost)
FROM sakila.film
GROUP BY rating;

-- Custo total de substituição de filmes agrupados por classificação indicativa
SELECT rating, SUM(replacement_cost)
FROM sakila.film
GROUP by rating;


-- PARA FIXAR
-------------------------------------------------------------

-- Monte uma query que exiba a quantidade de clientes cadastrados na tabela sakila.customer que estão ativos e a quantidade que estão inativos.
  SELECT active, COUNT(active) from customer GROUP BY active;

-- Monte uma query para a tabela sakila.customer que exiba a quantidade de clientes ativos e inativos por loja. Os resultados devem conter o ID da loja, o status dos clientes (ativos ou inativos) e a quantidade de clientes por status.
  select store_id, active, COUNT(active) from customer GROUP BY active, store_id;

-- Monte uma query que exiba a média de duração de locação por classificação indicativa (rating) dos filmes cadastrados na tabela sakila.film. Os resultados devem ser agrupados pela classificação indicativa e ordenados da maior média para a menor.
  SELECT
    rating,
    AVG(rental_duration) as `media`
  from
    film
  GROUP BY
    rating
  ORDER BY
    media desc;

-- Monte uma query para a tabela sakila.address que exiba o nome do distrito e a quantidade de endereços registrados nele. Os resultados devem ser ordenados da maior quantidade para a menor.
  SELECT
    district,
    COUNT(*) as `quantidade`
  FROM
    `address`
  GROUP BY
    district
  ORDER BY
    `quantidade` DESC;
    