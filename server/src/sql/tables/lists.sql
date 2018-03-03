drop table if exists Lists;

create table Lists (
    id int not null auto_increment primary key,
    userid int not null,
    name varchar(48) not null,
	_created datetime default current_timestamp,
	_updated datetime default current_timestamp
);

alter table Lists
add constraint fk_listsuserid
foreign key (userid)
references Users(id);

