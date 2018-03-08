DROP PROCEDURE IF EXISTS spGetMoviesByList;
DELIMITER $$
CREATE PROCEDURE spGetMoviesByList(
    IN p_listid INT
)
BEGIN

    SELECT 
        m.id,
        m.title, 
        m.director, 
        m.poster
    FROM
        ListsMoviesXref lm
    JOIN
        Movies m
    ON
        lm.movieid = m.id
    WHERE  
        lm.listid = p_listid;

END$$
DELIMITER ;
