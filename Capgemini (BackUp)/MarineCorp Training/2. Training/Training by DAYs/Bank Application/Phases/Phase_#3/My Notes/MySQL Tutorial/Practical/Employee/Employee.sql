use MarineCorp;
create Table Employee(
EmpId integer,
EmpName varchar(20),
EmpEmail varchar(20),
EmpSalary double,
EmpAge smallInt, 
DId int);

alter table Employee
add DId int;

insert into Employee(
EmpId,
EmpName,
EmpEmail, 
EmpSalary,
EmpAge, 
DId)
values(2, "Gaurav", 'gaurav@gmail.com', 22000.00, 21, 201),
(3, "Misha", 'misha@gmail.com', 22000.00, 21, 301);

Select * from employee;
describe employee;
Set foreign_key_checks =0;
alter table Employee
Add Constraint
fk_l_id Foreign key(DId)
references
department(DId);

Select * from Employee e, department d
where e.DId = d.DId And d.DeptName= 'Testing';