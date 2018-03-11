DROP PROCEDURE IF EXISTS spInsertListsMoviesXRef;
DELIMITER $$
CREATE PROCEDURE spInsertListsMoviesXRef(
    p_listid int,
    p_movieid int
)
BEGIN

    INSERT INTO ListsMoviesXRef (
        listid,
        movieid
    )
    VALUES (
        p_listid,
        p_movieid
    );

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetMoviesByList;
DELIMITER $$
CREATE PROCEDURE spGetMoviesByList(
  IN p_listid int
)

BEGIN

    SELECT  
        movieid, 
        mdbid, 
        title,
        director,
        poster
    FROM
        listsmoviesxref l
    JOIN
        Movies m 
    ON
        l.movieid = m.id
    WHERE 
        l.listid = p_listid;

END$$
DELIMITER ;