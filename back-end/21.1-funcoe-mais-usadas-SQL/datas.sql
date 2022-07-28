--  retorna data atual
SELECT CURRENT_DATE(); -- YYYY-MM-DD
SELECT NOW(); -- YYYY-MM-DD HH:MM:SS


-- retorna diferença entre datas ou horas

-- 30, ou seja, a primeira data é 30 dias depois da segunda
SELECT DATEDIFF('2020-01-31', '2020-01-01');

-- -30, ou seja, a primeira data é 30 dias antes da segunda
SELECT DATEDIFF('2020-01-01', '2020-01-31');

-- -01:00:00, ou seja, há 1 hora de diferença entre os horários
SELECT TIMEDIFF('08:30:10', '09:30:10');

-- -239:00:00, ou seja, há uma diferença de 239 horas entre as datas
SELECT TIMEDIFF('2021-08-11 08:30:10', '2021-08-01 09:30:10');

SELECT datediff(now(), '1993-08-24');



-- PARA FIXAR
----------------------------------------------------------

-- Monte uma query que exiba a diferença de dias entre '2030-01-20' e hoje.
  SELECT datediff('2030-01-20', NOW());

-- Monte uma query exiba a diferença de horas entre '10:25:45' e '11:00:00'.
  SELECT timediff('11:00:00', '10:25:45');

