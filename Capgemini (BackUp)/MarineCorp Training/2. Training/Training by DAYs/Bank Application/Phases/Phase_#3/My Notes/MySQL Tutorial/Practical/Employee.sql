-- Getting the Database
use MarineCorp;

-- Creating Table
create Table Employee(
EmpId integer,
EmpName varchar(20),
EmpEmail varchar(20),
EmpSalary double,
EmpAge smallInt, 
DId int);

-- Adding a new Column to the table Employee
alter table Employee
add DId int;

-- Inserting Values to their respective column
insert into Employee(
EmpId,
EmpName,
EmpEmail, 
EmpSalary,
EmpAge, 
DId)
values(1, "Chandan", 'chandan@gmail.com', 22000.00, 21, 101);

-- Setting the DId as Foreign Key in reference with Department table
describe employee;
Set foreign_key_checks =0;
alter table Employee
Add Constraint
fk_l_id Foreign key(DId)
references
department(DId);

-- Getting data as per Deptarment Name having same employee's DId & DId
Select * from Employee e, department d
where e.DId = d.DId And d.DeptName= 'Testing';

-- Select all the employee whose name start with M 
--  SELECT * FROM Employee WHERE EmpName LIKE 'M%';
 
 DELETE FROM Employee WHERE EmpName = "Chandan";
 
 Select * from Employee;