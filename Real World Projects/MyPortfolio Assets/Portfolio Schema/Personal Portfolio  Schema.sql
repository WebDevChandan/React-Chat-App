CREATE TABLE `Home` (
  `id` int PRIMARY KEY,
  `img` varchar(255),
  `role` array
);

CREATE TABLE `About` (
  `id` int PRIMARY KEY,
  `info` varchar(255),
  `img` varchar(255)
);

CREATE TABLE `SocialLinks` (
  `id` int PRIMARY KEY,
  `label` char,
  `link` varchar(255) NOT NULL
);

CREATE TABLE `Skill` (
  `id` int PRIMARY KEY,
  `name` char,
  `level` int NOT NULL
);

CREATE TABLE `experience` (
  `id` int PRIMARY KEY,
  `from` varchar(255),
  `to` varchar(255),
  `role` varchar(255),
  `experienceDetail` varchar(255),
  `organization_id` int
);

CREATE TABLE `Organization` (
  `id` int PRIMARY KEY,
  `title` varchar(255),
  `location` varchar(255)
);

CREATE TABLE `education` (
  `id` int PRIMARY KEY,
  `from` varchar(255),
  `to` varchar(255),
  `level` varchar(255),
  `info` string,
  `institution_id` int
);

CREATE TABLE `instution` (
  `id` int PRIMARY KEY,
  `title` varchar(255),
  `location` varchar(255)
);

CREATE TABLE `Resume` (
  `id` int PRIMARY KEY,
  `file` varchar(255)
);

CREATE TABLE `certificate` (
  `id` int PRIMARY KEY,
  `label` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `info` varchar(255),
  `details_id` int UNIQUE
);

CREATE TABLE `certificateDetail` (
  `id` int PRIMARY KEY,
  `slug` string UNIQUE,
  `header_details_id` int,
  `main_details_id` int
);

CREATE TABLE `certificateHeaderDetail` (
  `id` int PRIMARY KEY,
  `authority` varchar(255),
  `issueDate` varchar(255) NOT NULL,
  `expiryDate` varchar(255),
  `skill` varchar(255),
  `link` varchar(255),
  `description` varchar(255)
);

CREATE TABLE `certificateMainDetail` (
  `id` int PRIMARY KEY,
  `largeImage` varchar(255),
  `imgText` varchar(255)
);

CREATE TABLE `portfolio` (
  `id` int PRIMARY KEY,
  `title` varchar(255) NOT NULL,
  `src` varchar(255) NOT NULL,
  `altText` varchar(255),
  `category` varchar(255),
  `category_id` int,
  `details_id` int UNIQUE
);

CREATE TABLE `portfolioDetail` (
  `id` int PRIMARY KEY,
  `slug` string UNIQUE,
  `header_details_id` int,
  `main_details_id` int
);

CREATE TABLE `portfolioHeaderDetail` (
  `id` int PRIMARY KEY,
  `from` varchar(255),
  `to` varchar(255),
  `client` varchar(255),
  `link` varchar(255),
  `tools` string[],
  `demo` varchar(255),
  `description` varchar(255)
);

CREATE TABLE `portfolioMainDetail` (
  `id` int PRIMARY KEY,
  `imgSrc` varchar[],
  `altText` varchar(255),
  `titleText` varchar(255),
  `webFrameLink` varchar(255)
);

CREATE TABLE `portfolioCategory` (
  `id` int PRIMARY KEY,
  `label` varchar(255),
  `active` boolean
);

CREATE TABLE `Contact` (
  `id` int PRIMARY KEY,
  `label` varchar(255),
  `details` varchar(255)
);

CREATE TABLE `Testimonial` (
  `id` int PRIMARY KEY,
  `name` varchar(255),
  `img` varchar(255),
  `region` varchar(255),
  `feedback` varchar(255),
  `active` boolean
);

ALTER TABLE `Organization` ADD FOREIGN KEY (`id`) REFERENCES `experience` (`organization_id`);

ALTER TABLE `instution` ADD FOREIGN KEY (`id`) REFERENCES `education` (`institution_id`);

ALTER TABLE `certificateDetail` ADD FOREIGN KEY (`id`) REFERENCES `certificate` (`details_id`);

ALTER TABLE `certificateHeaderDetail` ADD FOREIGN KEY (`id`) REFERENCES `certificateDetail` (`header_details_id`);

ALTER TABLE `certificateMainDetail` ADD FOREIGN KEY (`id`) REFERENCES `certificateDetail` (`main_details_id`);

ALTER TABLE `portfolio` ADD FOREIGN KEY (`category_id`) REFERENCES `portfolioCategory` (`id`);

ALTER TABLE `portfolioDetail` ADD FOREIGN KEY (`id`) REFERENCES `portfolio` (`details_id`);

ALTER TABLE `portfolioHeaderDetail` ADD FOREIGN KEY (`id`) REFERENCES `portfolioDetail` (`header_details_id`);

ALTER TABLE `portfolioMainDetail` ADD FOREIGN KEY (`id`) REFERENCES `portfolioDetail` (`main_details_id`);
