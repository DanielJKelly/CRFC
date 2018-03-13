alter table Lists
add constraint fk_listsuserid
foreign key (userid)
references Users(id);

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

alter table Ratings
add constraint fk_ratingsuserid
foreign key (userid)
references Users(id);

alter table Ratings
add constraint fk_ratingsmovieid
foreign key (movieid)
references Movies(id);

alter table Passwords
add constraint fk_passwordsuserid
foreign key (userid)
references Users(id);

alter table ListsMoviesXref
add constraint fk_listsmovieslistid
foreign key (listid)
references Lists(id);

alter table ListsMoviesXref
add constraint fk_listsmoviesmovieid
foreign key (movieid)
references Movies(id);