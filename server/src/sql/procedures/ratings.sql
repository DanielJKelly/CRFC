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

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spDeleteRating;
DELIMITER $$
CREATE PROCEDURE spDeleteRating(
    IN p_id INT
)
BEGIN
    DELETE 
    FROM
        Ratings
    WHERE id = p_id
    LIMIT 
        1;   

END$$
DELIMITER ;