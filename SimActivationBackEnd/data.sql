
drop schema sim_activation;
create schema sim_activation;
use sim_activation;
create table sim(
    sim_number varchar(13) primary key,
    service_number varchar(10) unique,
    activation_status varchar(10),
    user_id numeric
);
insert into sim values("1234567890123", "1234567890", "ACTIVE", 1);
insert into sim values("1234567890124", "1234567891", "DISABLED", 1);
select * from sim;

drop schema sim_user;
create schema sim_user;
use sim_user; 
create table user(
	id numeric primary key,
    first_name varchar(15),
    last_name varchar(15),
    email varchar(15) unique,
    dob varchar(15)
);
insert into user values(1, "Abhishek", "Malviya", "ab@gmail.com", "1997-02-08");
insert into user values(2, "Jayesh", "Malviya", "jay@gmail.com", "2000-10-06");

create table address(
	id numeric primary key,
    address_line varchar(25),
    state varchar(20),
    city varchar(20),
    pincode varchar(20),
    user_id numeric
);

create table identification(
	id_number varchar(20) primary key,
    id_type varchar(20),
    state varchar(20),
    first_name varchar(15),
    last_name varchar(15),
    dob varchar(15)
);
insert into identification values("198765412369", "Aadhaar", "M.P", "Abhishek", "Malviya", "1997-02-08");
insert into identification values("198765412370", "Aadhaar", "M.P", "Jayes", "Malviya", "2000-10-06");
select * from user;
select * from address;
select * from identification;