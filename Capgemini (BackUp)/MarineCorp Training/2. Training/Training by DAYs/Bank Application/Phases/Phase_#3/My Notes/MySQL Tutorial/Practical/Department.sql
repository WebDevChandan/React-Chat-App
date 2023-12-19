use marinecorp;

create table Department(
-- making DId as primary key
DId int primary key,
DeptName varchar(20)
);

insert into department(
DId,
DeptName
)
values(101, "HR"),(201, "SE"),(301,"Testing");

Select * from Department;