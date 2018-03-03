drop table if exists ListsMoviesXref;

create table ListsMoviesXref (
    listid int not null,
    movieid int not null,
	_created datetime default current_timestamp,
	_updated datetime default current_timestamp
);

alter table ListsMoviesXref
add constraint fk_listsmovieslistid
foreign key (listid)
references Lists(id);

alter table ListsMoviesXref
add constraint fk_listsmoviesmovieid
foreign key (movieid)
references Movies(id);

alter table ListsMoviesXref
add constraint pk_listsmovies
primary key(listid, movieid);