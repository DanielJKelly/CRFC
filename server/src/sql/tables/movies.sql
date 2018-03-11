drop table if exists Movies;

create table Movies (
	id int not null auto_increment primary key,
    mdbid int not null unique unsigned,
    title varchar(256) not null,
    director varchar(128) not null,
    poster varchar(256),
	_created datetime default current_timestamp,
	_updated datetime default current_timestamp
);
