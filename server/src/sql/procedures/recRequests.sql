DROP PROCEDURE IF EXISTS spInsertRecrequest;
DELIMITER $$
CREATE PROCEDURE spInsertRecrequest(
    IN p_requesterid int,
    IN p_recommenderid int
)
BEGIN

    INSERT INTO Recrequests (
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

DROP PROCEDURE IF EXISTS spGetRecrequestsByRecommender;
DELIMITER $$
CREATE PROCEDURE spGetRecrequestsByRecommender(
    IN p_recommenderid INT
)
BEGIN

    SELECT
        *
    FROM
        Recrequests
    WHERE
        recommenderid = p_recommenderid;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetRecrequestsByRequester;
DELIMITER $$
CREATE PROCEDURE spGetRecrequestsByRequester(
    IN p_requesterid INT
)

BEGIN
    SELECT 
        * 
    FROM
        Recrequests
    WHERE 
        requesterid = p_requesterid; 

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spUpdateRecrequest;
DELIMITER $$
CREATE PROCEDURE spUpdateRecrequest(
    IN p_id INT 
)

BEGIN 
    UPDATE 
        Recrequests
    SET 
        isFulfilled = 1 
    WHERE
        id = p_id
    LIMIT 
        1;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spDeleteRecrequest;
DELIMITER $$
CREATE PROCEDURE spDeleteRecrequest(
    IN p_id INT
)
BEGIN 
    DELETE 
    FROM
        Recrequests
    WHERE 
        id = p_id;
END$$
DELIMITER ;