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

DROP PROCEDURE IF EXISTS spGetListById;
DELIMITER $$
CREATE PROCEDURE spGetListById(
    IN p_listid INT
)
BEGIN

    SELECT 
        m.id as movieid,
        m.title, 
        m.director, 
        m.poster,
        lm.ranking
    FROM
        ListsMoviesXref lm
    JOIN
        Movies m
    ON
        lm.movieid = m.id
    WHERE  
        lm.listid = p_listid
    ORDER BY
        lm.ranking;

END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spInsertList;
DELIMITER $$
CREATE PROCEDURE spInsertList(
    IN p_userid INT,
    IN p_name varchar(48),
    IN p_isOrdered boolean
)
BEGIN

    INSERT INTO Lists (
        userid,
        name,
        isOrdered
    )
    VALUES (
        p_userid,
        p_name,
        p_isOrdered
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
    UPDATE 
        ListsMoviesXRef 
    
    SET 
        ranking = ranking + 1
    
    WHERE
        ranking >= p_ranking AND listid = p_listid;
    
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

DROP PROCEDURE IF EXISTS spDeleteList;
DELIMITER $$
CREATE PROCEDURE spDeleteList(
    IN p_listid INT
)
BEGIN

    DELETE 

    FROM 
        Lists
    WHERE
        p_listid = id;
END$$
DELIMITER ;

DROP PROCEDURE IF EXISTS spDeleteListsMoviesXRef;
DELIMITER $$
CREATE PROCEDURE spDeleteListsMoviesXRef(
    IN p_movieid INT,
    IN p_listid INT,
    IN p_ranking INT
)
BEGIN

    DELETE 

    FROM 
        ListsMoviesXRef
    WHERE
        p_movieid = movieid AND p_listid = listid;
    
    UPDATE ListsMoviesXRef 
        SET 
            ranking = ranking - 1
        WHERE 
            ranking > p_ranking AND listid = p_listid;

END$$
DELIMITER ;
