CREATE TABLE `followers` (
    `userid` INT(10) UNSIGNED NOT NULL AUTO_INCREMENT,
    `facebook` INT(11) DEFAULT '0',
    `twitter` INT(11) DEFAULT '0',
    `googleplus` INT(11) DEFAULT '0',
    PRIMARY KEY (`userid`)
)  ENGINE=INNODB DEFAULT CHARSET=UTF8;
