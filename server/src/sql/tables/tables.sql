drop table if exists Lists;

create table Lists (
    id int not null auto_increment primary key,
    userid int not null,
    name varchar(48) not null,
	_created datetime default current_timestamp,
	_updated datetime default current_timestamp
);

drop table if exists Movies;

create table Movies (
	id int not null auto_increment primary key,
    mdbid int not null unique,
    title varchar(256) not null,
    director varchar(128) not null,
    poster varchar(256),
	_created datetime default current_timestamp,
	_updated datetime default current_timestamp
);

drop table if exists Users;

create table Users (
	id int not null auto_increment primary key,
	firstname varchar(48) not null,
	lastname varchar(48) not null,
	email varchar(128) not null,
	username varchar(48) not null,
	_created datetime default current_timestamp,
	_updated datetime default current_timestamp
);

drop table if exists Recommendations;

create table Recommendations (
    id int not null auto_increment primary key,
    recommenderid int not null,
    recipientid int not null,
    movieid int not null,
    isSeen boolean default 0,
    _created datetime default current_timestamp,
	_updated datetime default current_timestamp
);

drop table if exists Ratings;

create table Ratings (
	userid int not null,
  movieid int not null,
  rating int not null,
	_created datetime default current_timestamp,
	_updated datetime default current_timestamp
);

alter table Ratings
add constraint pk_ratings
primary key(userid, movieid);

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

drop table if exists Passwords;

create table Passwords (
	id int not null auto_increment primary key,
    userid int not null,
    hash varchar(256) not null,
	_created datetime default current_timestamp,
	_updated datetime default current_timestamp
);

drop table if exists ListsMoviesXref;

create table ListsMoviesXref (
    listid int not null,
    movieid int not null,
	ranking int,
	_created datetime default current_timestamp,
	_updated datetime default current_timestamp
);

alter table ListsMoviesXref
add constraint pk_listsmovies
primary key(listid, movieid);