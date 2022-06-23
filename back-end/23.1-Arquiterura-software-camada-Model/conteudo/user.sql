use model_example;

create table user (
	id int not null auto_increment,
    first_name varchar(50) not null,
    last_name varchar(50) not null,
    email varchar(50) not null,
    primary key(id)
)