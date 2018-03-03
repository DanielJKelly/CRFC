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
