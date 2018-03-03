DROP PROCEDURE IF EXISTS spGetListsByUser;
DELIMITER $$
CREATE PROCEDURE spGetListsByUser(
    IN p_userid INT
)
BEGIN

    SELECT
        *
    FROM
        Lists
    WHERE
        userid = p_userid
    ORDER BY
        id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spGetList;
DELIMITER $$
CREATE PROCEDURE spGetList(
    IN p_id INT,
    IN p_userid INT
)
BEGIN

    SELECT
        *
    FROM
        Lists
    WHERE
        id = p_id
    AND
        userid = p_userid
    LIMIT
        1;

END$$
DELIMITER ;

