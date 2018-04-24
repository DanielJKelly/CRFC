DROP PROCEDURE IF EXISTS spDeletePassword;
DELIMITER $$
CREATE PROCEDURE spDeletePassword(
    IN p_userid char(36)
)
BEGIN

DELETE
FROM
    Passwords
WHERE
    userid = p_userid;

END$$
DELIMITER ;


DROP PROCEDURE IF EXISTS spGetPasswords;
DELIMITER $$
CREATE PROCEDURE spGetPasswords(

)
BEGIN

SELECT 
    *
FROM
    Passwords;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertPassword;
DELIMITER $$
CREATE PROCEDURE spInsertPassword(
    IN p_userid char(36),
    IN p_hash varchar(256)
)
BEGIN

INSERT INTO Passwords (
    userid,
    hash
)
VALUES (
    p_userid,
    p_hash
);

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spUpdatePassword;
DELIMITER $$
CREATE PROCEDURE spUpdatePassword(
    IN p_userid char(36),
    IN p_hash varchar(256)
)
BEGIN

UPDATE
    Passwords
SET
    hash = COALESCE(p_hash, hash)
WHERE
    userid = p_userid
LIMIT
    1;

END$$
DELIMITER ;