USE sakila;

-- Na tabela sakila.film, crie uma query que exiba o título do filme e sua classificação indicativa (PG, G, NC-17) em apenas uma coluna. Dê a ela o nome Classificação. Não se esqueça de deixar um espaço entre as palavras para que fiquem legíveis.

-- SELECT CONCAT(title, ' - ', rating) AS 'Classificação indicativa' FROM film;

---------------------------------------------
    -- Exercício do conteúdo
---------------------------------------------

            -- usaremos a tabela Sakila.film

-- Escreva uma query que exiba todos os filmes cadastrados no banco de dados.
  SELECT * FROM film;

-- Escreva uma query que exiba apenas o nome dos filmes, seu ano de lançamento e sua classificação.
  SELECT title, release_year, rating FROM film;

-- Quantos filmes temos cadastrados?
  SELECT COUNT(*) FROM film;

------------------------------------------------------
      -- Para os exercícios a seguir, vamos usar a tabela sakila.actor:

-- Escreva uma query que exiba apenas os sobrenomes únicos cadastrados.
  SELECT distinct last_name FROM actor;

-- Quantos sobrenomes únicos temos na tabela?
  SELECT COUNT(distinct last_name) FROM actor;

-- Ordene os valores na tabela em ordem crescente de sobrenomes e em ordem decrescente de nome.
SELECT first_name, last_name from actor ORDER BY first_name DESC, last_name ASC;

------------------------------------------------------------
    -- Usando a tabela language:

-- Crie uma pesquisa que mostre os 5 idiomas cadastrados, mas não mostre o idioma english.
SELECT * FROM language WHERE name != 'English';

------------------------------------------------------------
    -- Usando a tabela filme:

-- Selecione todos os dados da tabela. Pronto, fez isso?
  SELECT * FROM film;

  SELECT
    title,
    release_year,
    length,
    rating,
    replacement_cost
  FROM
    film
  ORDER BY
    length ASC,
    replacement_cost DESC;