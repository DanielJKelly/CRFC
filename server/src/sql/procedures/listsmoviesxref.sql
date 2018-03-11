DROP PROCEDURE IF EXISTS spInsertListsMoviesXRef;
DELIMITER $$
CREATE PROCEDURE spInsertListsMoviesXRef(
    p_listid int,
    p_movieid int
)
BEGIN

    INSERT INTO ListsMoviesXRef (
        listid,
        movieid
    )
    VALUES (
        p_listid,
        p_movieid
    );

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;