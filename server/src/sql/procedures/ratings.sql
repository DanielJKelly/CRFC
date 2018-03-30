DROP PROCEDURE IF EXISTS spInsertRating;
DELIMITER $$
CREATE PROCEDURE spInsertRating(
    IN p_userid int,
    IN p_movieid int,
    IN p_rating int
)
BEGIN

    INSERT INTO Ratings (
        userid,
        movieid,
        rating
    )
    VALUES (
        p_userid,
        p_movieid,
        p_rating
    );

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spDeleteRating;
DELIMITER $$
CREATE PROCEDURE spDeleteRating(
    IN p_userid INT,
    IN p_movieid INT
)
BEGIN
    DELETE 
    FROM
        Ratings
    WHERE userid = p_userid AND movieid = p_movieid
    LIMIT 
        1;   

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spUpdateRating;
DELIMITER $$
CREATE PROCEDURE spUpdateRating(
    IN p_userid INT,
    IN p_movieid INT,
    IN p_rating INT
)
BEGIN
    UPDATE
        Ratings 
    SET
        rating = p_rating
    WHERE 
        userid = p_userid AND movieid = p_movieid
    LIMIT 1;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetRatingsByUser;
DELIMITER $$
CREATE PROCEDURE spGetRatingsByUser(
    IN p_userid INT
)
BEGIN 
    SELECT
        m.id as movieid,
        m.title,
        m.director,
        m.poster,
        r.userid, 
        r.rating
    FROM 
        Ratings r
    JOIN
        Movies m
    ON 
        r.movieid = m.id
    WHERE 
        p_userid = r.userid;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetRatingsByMovie;
DELIMITER $$
CREATE PROCEDURE spGetRatingsByMovie(
    IN p_movieid INT
)
BEGIN 
    SELECT
        COUNT(*), AVG(rating)
    FROM 
        Ratings 

    WHERE 
        p_movieid = movieid;
END$$
DELIMITER ;
