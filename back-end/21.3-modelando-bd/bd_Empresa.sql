CREATE Table employee(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  first_name VARCHAR(20) NOT NULL,
  last_name VARCHAR(50) NOT NULL,
  email VARCHAR(50) NOT NULL,
  phone VARCHAR(15) NOT NULL,
  create_at TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP
);

CREATE table setor(
  id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
  name VARCHAR(30) NOT NULL
);

CREATE Table employee_setor(
  employee_id INT NOT NULL,
  setor_id INT NOT NULL,
  last_update TIMESTAMP NOT NULL DEFAULT CURRENT_TIMESTAMP on update CURRENT_TIMESTAMP,
  PRIMARY KEY (employee_id, setor_id),
  FOREIGN KEY (employee_id) REFERENCES employee (id),
  FOREIGN KEY (setor_id) REFERENCES setor (id)
);


INSERT INTO employee(
  first_name,
  last_name,
  email,
  phone
) 
VALUES 
  ('José', 'Rodrigues', 'jo@gmail.com', '(35)998552-1445'),
  ('André',	'Freeman',	'andre1990@gmail.com',	'(47)99522-4996'),
  ('Cíntia',	'Duval',	'cindy@outlook.com',	'(33)99855-4669'),
  ('Fernanda',	'Mendes',	'fernandamendes@yahoo.com',	'(33)99200-1556');

INSERT INTO 
  setor(name)
VALUES 
('Administração'),
('Vendas'),
('Operacional'),
('Estratégia'),
('Marketing');

INSERT INTO 
  employee_setor(employee_id, setor_id)
VALUES
  (1, 1),
  (1, 2),
  (2, 3),
  (3, 3),
  (3, 4),
  (4, 5);


  ------------------------------------------------
  -- CONSULTAS DE TERSTE

  SELECT
  e.first_name, e.last_name, s.name
FROM
  employee as `e`
INNER JOIN
  setor as `s`;

SELECT
  s.name,
  es.setor_id,
  COUNT(es.employee_id) as 'employee quant'
FROM
  employee_setor as `es`
INNER JOIN
  setor as `s`
ON
  s.id = es.setor_id
GROUP BY
  setor_id;
