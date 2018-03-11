DROP PROCEDURE IF EXISTS spInsertMovie;
DELIMITER $$
CREATE PROCEDURE spInsertMovie(
    IN p_mdbid int,
    IN p_title varchar(256),
    IN p_director varchar(128),
    IN p_poster varchar(256)
)
BEGIN

    INSERT INTO Movies (
        mdbid,
        title,
        director,
        poster
    )
    VALUES (
        p_mdbid,
        p_title,
        p_director,
        p_poster
    );

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;