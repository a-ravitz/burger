drop database burgers_db;
create database burgers_db;

USE burgers_db;

create table burgers (
    id int NOT NULL AUTO_INCREMENT,
    burger_name varchar(40) NOT NULL,
    devoured BOOLEAN DEFAULT false,
    primary key (id)
);
