DROP PROCEDURE IF EXISTS spInsertRecRequest;
DELIMITER $$
CREATE PROCEDURE spInsertRecRequest(
    IN p_requesterid int,
    IN p_recommenderid int
)
BEGIN

    INSERT INTO RecRequests (
        requesterid,
        recommenderid,
        isFulfilled
    )
    VALUES (
        p_requesterid,
        p_recommenderid,
        0
    );

    SELECT 
        LAST_INSERT_ID() as id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetRecRequestsByRecommender;
DELIMITER $$
CREATE PROCEDURE spGetRecRequestsByRecommender(
    IN p_recommenderid INT
)
BEGIN

    SELECT
        *
    FROM
        RecRequests
    WHERE
        recommenderid = p_recommenderid;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetRecRequestsByRequester;
DELIMITER $$
CREATE PROCEDURE spGetRecRequestsByRequester(
    IN p_requesterid INT
)

BEGIN
    SELECT 
        * 
    FROM
        RecRequests
    WHERE 
        requesterid = p_requesterid; 

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spUpdateRecRequest;
DELIMITER $$
CREATE PROCEDURE spUpdateRecRequest(
    IN p_id INT 
)

BEGIN 
    UPDATE 
        RecRequests
    SET 
        isFulfilled = 1 
    WHERE
        id = p_id
    LIMIT 
        1;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spDeleteRecRequest;
DELIMITER $$
CREATE PROCEDURE spDeleteRecRequest(
    IN p_id INT
)
BEGIN 
    DELETE 
    FROM
        RecRequests
    WHERE 
        id = p_id;
END$$
DELIMITER ;