CREATE DATABASE IF NOT EXISTS express_test;
USE `express_test`;
CREATE TABLE IF NOT EXISTS `tasks`
(
    `id`         int(11)      NOT NULL,
    `name`       varchar(200) NOT NULL AUTO_INCREMENT,
    `status`     tinyint(1)   NOT NULL DEFAULT '1',
    `created_at` datetime     NOT NULL DEFAULT CURRENT_TIMESTAMP,
    PRIMARY KEY (`id`)
);
TRUNCATE TABLE `tasks`;
ALTER TABLE `tasks`
    AUTO_INCREMENT = 1;
INSERT INTO `tasks` (`id`, `name`, `status`, `created_at`)
VALUES (1, 'Find bugs', 1, '2020-03-01 23:59:00'),
       (2, 'Review code', 1, '2020-03-01 23:59:10'),
       (3, 'Fix bugs', 1, '2020-03-01 23:59:20'),
       (4, 'Refactor Code', 0, '2020-03-01 23:59:30'),
       (5, 'Push to prod', 0, '2020-03-01 23:59:50');