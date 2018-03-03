drop table if exists Ratings;

create table Ratings (
	userid int not null,
    movieid int not null,
    rating int not null,
	_created datetime default current_timestamp,
	_updated datetime default current_timestamp
);

alter table Ratings
add constraint fk_ratingsuserid
foreign key (userid)
references Users(id);

alter table Ratings
add constraint fk_ratingsmovieid
foreign key (movieid)
references Movies(id);

alter table Ratings
add constraint pk_ratings
primary key(userid, movieid);