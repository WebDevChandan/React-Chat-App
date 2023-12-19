SELECT * FROM bankapp.transaction;	

-- Delete particular row from  transaction table as per account Number
DELETE FROM transaction WHERE account_no=123450;

-- Get the join table of Account & Transaciton using foreign key account_no
Select * from account a, transaction t where a.accId = t.account_no And t.account_no= 123450;