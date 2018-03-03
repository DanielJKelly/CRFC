drop table if exists UsersMoviesXref; 

create table UsersMoviesXref (
    userid int not null,
    movieid int not null,
	_created datetime default current_timestamp,
	_updated datetime default current_timestamp
);

alter table UsersMoviesXref
add constraint pk_usersmovies
primary key(userid, movieid);