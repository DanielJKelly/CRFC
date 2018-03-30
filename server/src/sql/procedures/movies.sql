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
    IN  p_director varchar(128)
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
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertUsersMoviesXRef;
DELIMITER $$
CREATE PROCEDURE spInsertUsersMoviesXRef(
    IN p_userid int, 
    IN p_movieid int
)
BEGIN 
    INSERT INTO UsersMoviesXRef(
        userid, 
        movieid
    ) 
    VALUES (
        p_userid, 
        p_movieid
    );
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetMoviesByUser;
DELIMITER $$ 
CREATE PROCEDURE spGetMoviesByUser(
    IN p_userid int
)
BEGIN  
    SELECT 
        m.id, 
        m.title,
        m.director,
        m.poster 
    FROM 
        Movies m 
    JOIN 
        UsersMoviesXRef um
    ON 
        m.id = um.movieid AND um.userid = p_userid;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spUpdateMovie;
DELIMITER $$
CREATE PROCEDURE spUpdateMovie(
    IN p_id int,
    IN p_mdbid int, 
    IN p_title varchar(256),
    IN p_director varchar(128),
    IN p_poster varchar(256)
)
BEGIN
    UPDATE 
        Movies 
    SET 
        mdbid = COALESCE(p_mdbid, mdbid),
        title = COALESCE(p_title, title),
        director = COALESCE(p_director, director),
        poster = COALESCE(p_poster, poster)
    WHERE
        id = p_id
    LIMIT 
        1;
END$$
DELIMITER ;



