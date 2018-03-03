DROP PROCEDURE IF EXISTS spInsertUser;
DELIMITER $$
CREATE PROCEDURE spInsertUser(
    IN p_firstname varchar(48), 
    IN p_lastname varchar(48),
    IN p_email varchar(128),
    IN p_username varchar(48),
    IN p_password varchar(256)
)

BEGIN

    INSERT INTO Users (
        firstname,
        lastname,
        email,
        username       
    )
    VALUES (
        p_firstname,
        p_lastname,
        p_email,
        p_username
    );

    SET @userid = LAST_INSERT_ID();

    INSERT INTO Passwords (
        userid, 
        hash
    )
    VALUES(
        @userid,
        p_password
    );

    SELECT
        @userid AS id;

END$$
DELIMITER ;
