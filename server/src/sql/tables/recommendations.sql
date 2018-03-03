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

alter table Recommendations
add constraint fk_recommendationsrecommenderid
foreign key (recommenderid)
references Users(id);

alter table Recommendations
add constraint fk_recommendationsrecipientid
foreign key (recipientid)
references Users(id);

alter table Recommendations
add constraint fk_recommendationsmovieid
foreign key (movieid)
references Movies(id);
