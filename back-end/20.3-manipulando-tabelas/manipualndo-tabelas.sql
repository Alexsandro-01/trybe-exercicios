use sakila;
-- Insira um novo funcionário na tabela sakila.staff.
-- Para saber quais campos são obrigatórios, clique com o botão direito na tabela sakila.staff e selecione Table Inspector. Clique na aba columns e verifique quais campos aceitam nulos para te guiar. Lembre-se de que valores que são gerados automaticamente não precisam ser inseridos manualmente. Boa exploração!
  INSERT INTO sakila.staff (first_name, last_name, address_id, email, store_id, active, username, password)
  VALUES('Kassandra', 'Lander', 3, 'kassan.dra@gmail.com', 2, 1, 'Kassandra', '1234098765');

-- Feito o exercício anterior, vamos agora para o nível 2. Insira dois funcionários novos em apenas uma query.
  INSERT INTO staff (first_name, last_name, address_id, email, store_id, active, username, password)
  VALUES
    ('Serena', 'Fritz', 4, 'fritz_serena@hotmail.com', 1, 1, 'Serena', 'root123'),
    ('Laerte', 'Fritz', 5, 'fritz_laertehotmail.com', 1, 0, 'Laerte', 'teerla123');

-- Selecione os cinco primeiros nomes e sobrenomes da tabela sakila.customer e cadastre essas pessoas como atores na tabela sakila.actor.
INSERT INTO actor (first_name, last_name)
SELECT first_name, last_name FROM customer LIMIT 5;

-- Cadastre três categorias de uma vez só na tabela sakila.category.
INSERT INTO category (name) VALUES
('Anime'),
('Dance'),
('Romance');

-- -- Cadastre uma nova loja na tabela sakila.store.
INSERT into store (manager_staff_id, address_id)
VALUES (4, 3);
