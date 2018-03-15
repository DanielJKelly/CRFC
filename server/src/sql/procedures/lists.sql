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
        m.id,
        m.title, 
        m.director, 
        m.poster
    FROM
        ListsMoviesXref lm
    JOIN
        Movies m
    ON
        lm.movieid = m.id
    WHERE  
        lm.listid = p_listid;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertList;
DELIMITER $$
CREATE PROCEDURE spInsertList(
    IN p_userid INT,
    IN p_name varchar(48)
)
BEGIN

    INSERT INTO Lists (
        userid,
        name
    )
    VALUES (
        p_userid,
        p_name
    );

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertListsMoviesXRef;
DELIMITER $$
CREATE PROCEDURE spInsertListsMoviesXRef(
    p_listid int,
    p_movieid int,
    p_ranking int
)
BEGIN

    INSERT INTO ListsMoviesXRef (
        listid,
        movieid,
        ranking
    )
    VALUES (
        p_listid,
        p_movieid,
        p_ranking
    );

    SELECT
        LAST_INSERT_ID() AS id;

END$$
DELIMITER ;