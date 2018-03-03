drop table if exists Passwords;

create table Passwords (
	id int not null auto_increment primary key,
    userid int not null,
    hash varchar(256) not null,
	_created datetime default current_timestamp,
	_updated datetime default current_timestamp
);

alter table Passwords
add constraint fk_passwordsuserid
foreign key (userid)
references Users(id);
