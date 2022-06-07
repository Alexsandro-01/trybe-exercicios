use Spotitrybe;
SELECT
  art.nome as artista,
  alb.nome as album,
  COUNT(seg.artista_id) as seguidores
FROM
  seguindo as seg
INNER JOIN
  album as alb
ON
  alb.artista_id = seg.artista_id
INNER JOIN
  artista as art
ON
  art.id = alb.artista_id
GROUP BY
  seg.artista_id, -- para contar os segruidores
  alb.id -- agrupa pelo id do album para aparecer todas as linhas
ORDER BY
  seguidores DESC,
  artista ASC,
  album ASC;