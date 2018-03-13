DROP PROCEDURE IF EXISTS spInsertRecommendation;
DELIMITER $$
CREATE PROCEDURE spInsertRecommendation(
    IN p_recommenderid int,
    IN p_recipientid int,
    IN p_movieid int
)
BEGIN

    INSERT INTO Recommendations (
        recommenderid,
        recipientid,
        movieid,
        isSeen
    )
    VALUES (
        p_recommenderid,
        p_recipientid,
        p_movieid,
        0
    );

    SELECT 
        LAST_INSERT_ID() as id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetRecommendationsByRecipient;
DELIMITER $$
CREATE PROCEDURE spGetRecommendationsByRecipient(
    IN p_recipientid INT
)
BEGIN

    SELECT
        *
    FROM
        Recommendations
    WHERE
        recipientid = p_recipientid;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetRecommendationsByRecommender;
DELIMITER $$
CREATE PROCEDURE spGetRecommendationsByRecommender(
    IN p_recommenderid INT
)

BEGIN
    SELECT 
        * 
    FROM
        Recommendations
    WHERE 
        recommenderid = p_recommenderid; 

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spUpdateRecommendation;
DELIMITER $$
CREATE PROCEDURE spUpdateRecommendation(
    IN p_recommendationid INT 
)

BEGIN 
    UPDATE 
        Recommendations
    SET 
        isSeen = 1 
    WHERE
        id = p_recommendationid
    LIMIT 
        1;
END$$
DELIMITER ;