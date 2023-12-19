use BankApp;
create table Account(accId int not null primary key, accBal double not null, accType varchar(10));

create table Customer(cusId int not null primary key, cusName varchar(10) not null );

create table Transaction(tranId int not null primary key, tranType varchar(10) not null, amountTransfer double not null, Foreign key (account_no) References account(accId))

