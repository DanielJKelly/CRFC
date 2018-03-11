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

DROP PROCEDURE IF EXISTS spInsertMovie;
DELIMITER $$
CREATE PROCEDURE spInsertMovie(
    IN p_mdbid int,
    IN p_title varchar(256),
    IN p_director varchar(128),
    IN p_poster varchar(256)
)
BEGIN

    INSERT INTO Movies (
        mdbid,
        title,
        director,
        poster
    )
    VALUES (
        p_mdbid,
        p_title,
        p_director,
        p_poster
    );

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;