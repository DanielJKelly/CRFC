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

DROP PROCEDURE IF EXISTS spDeleteMovie;
DELIMITER $$
CREATE PROCEDURE spDeleteMovie(
    IN p_id int
)
BEGIN
    DELETE 

    FROM
        Movies
    WHERE 
        id = p_id;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetMoviesByDirector;
DELIMITER $$
CREATE PROCEDURE spGetMoviesByDirector(
    IN  p_director int
)
BEGIN
    SELECT 
        * 
    FROM 
        Movies 
    WHERE 
        director = p_director;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetMovies;
DELIMITER $$
CREATE PROCEDURE spGetMovies(

)
BEGIN
    SELECT 
        *
    FROM 
        Movies;
END
DELIMITER ;