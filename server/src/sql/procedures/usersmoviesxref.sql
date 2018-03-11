DROP PROCEDURE IF EXISTS spInsertUsersMoviesXRef;
DELIMITER $$
CREATE PROCEDURE spInsertUsersMoviesXRef(
    p_listid int, 
    p_movieid int
)
BEGIN

    INSERT INTO UsersMoviesXRef (
        listid,
        movieid
    )
    VALUES (
        p_listid,
        p_listid
    );

END$$
DELIMITER ;