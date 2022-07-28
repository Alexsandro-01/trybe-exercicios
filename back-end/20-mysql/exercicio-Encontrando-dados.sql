use PecasFornecedores;
-- Vamos lá! Faça uma consulta que retorne todas as peças que começam com as letras GR.
  select * from Pecas WHERE name LIKE 'GR%';

-- Agora, escreva uma query para mostrar todos os fornecimentos que contenham a peça com code 2. Organize o resultado por ordem alfabética de fornecedor.
  select * from `Fornecimentos` WHERE peca = 2
  ORDER BY Fornecedor;

-- Em seguida, faça uma consulta para exibir as peças, preço e fornecedor de todos os fornecimentos em que o código do fornecedor tenha a letra N.
  SELECT peca, Preco, Fornecedor from `Fornecimentos`
  WHERE Fornecedor LIKE '%N%';

-- Avante, falta pouco! Escreva uma query para exibir todas as informações dos fornecedores que são empresas limitadas (LTDA). Ordene esses resultados em ordem alfabética decrescente.
  SELECT * FROM `Fornecedores`
  WHERE name like '%LTDA';

-- Agora, faça uma consulta para exibir o número de empresas (fornecedores) que contém a letra F no código.
  SELECT COUNT(*) FROM `Fornecedores`
  WHERE code LIKE '%F%';

-- Quase lá! Agora escreva uma query para exibir os fornecimentos onde as peças custam mais de R$15,00 e menos de $40,00. Ordene os resultados por ordem crescente.
  SELECT * FROM `Fornecimentos`
  WHERE Preco BETWEEN 15 AND 40;

-- Ufa! Por fim, faça uma query para exibir o número de vendas feitas entre o dia 15/04/2018 e o dia 30/07/2019.
  select count(*) FROM `Vendas`
  WHERE order_date BETWEEN '2018-04-15' AND '2019-07-30';
