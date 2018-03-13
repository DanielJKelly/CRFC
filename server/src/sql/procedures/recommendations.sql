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

DROP PROCEDURE IF EXIST spGetRecommendationsByRecommender;
DELIMITER $$
CREATE PROCEDURE spGetRecommendationsByRecommender(

)

BEGIN

END$$
DELIMITER ;