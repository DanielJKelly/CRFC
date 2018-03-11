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