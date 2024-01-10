-- MySQL Workbench Forward Engineering
SET @OLD_UNIQUE_CHECKS = @@UNIQUE_CHECKS, UNIQUE_CHECKS = 0;

SET
    @OLD_FOREIGN_KEY_CHECKS = @@FOREIGN_KEY_CHECKS,
    FOREIGN_KEY_CHECKS = 0;

SET
    @OLD_SQL_MODE = @@SQL_MODE,

    SQL_MODE = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema overview_database
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema overview_database
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `overview_database` DEFAULT CHARACTER SET utf8;

USE `overview_database`;

-- -----------------------------------------------------
-- Table `overview_database`.`Users`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `overview_database`.`Users` (
        `user_id` INT NOT NULL,
        `firstname` VARCHAR(45) NOT NULL,
        `lastname` VARCHAR(45) NOT NULL,
        `mail` VARCHAR(80) NOT NULL,
        `password` VARCHAR(255) NOT NULL,
        `username` VARCHAR(45) NOT NULL,
        PRIMARY KEY (`user_id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `overview_database`.`Categories`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `overview_database`.`Categories` (
        `category_id` INT NOT NULL AUTO_INCREMENT,
        `name` VARCHAR(45) NOT NULL,
        PRIMARY KEY (`category_id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `overview_database`.`Videos`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `overview_database`.`Videos` (
        `video_id` INT NOT NULL AUTO_INCREMENT,
        `title` VARCHAR(45) NOT NULL,
        `description` VARCHAR(255) NOT NULL,
        `URL_video` TEXT NOT NULL,
        `type_video` TINYINT NOT NULL,
        `thumbnail` TEXT NOT NULL,
        `date_publication` DATE NOT NULL,
        `validate` TINYINT NOT NULL,
        `category_id` INT NOT NULL,
        PRIMARY KEY (`video_id`),
        INDEX `fk_Videos_Categories1_idx` (`category_id` ASC) VISIBLE,
        CONSTRAINT `fk_Videos_Categories1` FOREIGN KEY (`category_id`) REFERENCES `overview_database`.`Categories` (`category_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `overview_database`.`Tags`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `overview_database`.`Tags` (
        `tag_id` INT NOT NULL,
        `name` VARCHAR(45) NOT NULL,
        PRIMARY KEY (`tag_id`)
    ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `overview_database`.`Comments`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `overview_database`.`Comments` (
        `comment_id` INT NOT NULL,
        `comment` VARCHAR(255) NOT NULL,
        `date_comment` DATE NOT NULL,
        `user_id` INT NOT NULL,
        `video_id` INT NOT NULL,
        PRIMARY KEY (`comment_id`),
        INDEX `fk_Comments_Users1_idx` (`user_id` ASC) VISIBLE,
        INDEX `fk_Comments_Videos1_idx` (`video_id` ASC) VISIBLE,
        CONSTRAINT `fk_Comments_Users1` FOREIGN KEY (`user_id`) REFERENCES `overview_database`.`Users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_Comments_Videos1` FOREIGN KEY (`video_id`) REFERENCES `overview_database`.`Videos` (`video_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `overview_database`.`Subcribe`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `overview_database`.`Subcribe` (
        `follower_id` INT NOT NULL,
        `followed_id` INT NOT NULL,
        PRIMARY KEY (`follower_id`, `followed_id`),
        INDEX `fk_Subcribe_Users2_idx` (`followed_id` ASC) VISIBLE,
        CONSTRAINT `fk_Subcribe_Users1` FOREIGN KEY (`follower_id`) REFERENCES `overview_database`.`Users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_Subcribe_Users2` FOREIGN KEY (`followed_id`) REFERENCES `overview_database`.`Users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `overview_database`.`Upload`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `overview_database`.`Upload` (
        `user_id` INT NOT NULL AUTO_INCREMENT,
        `video_id` INT NOT NULL,
        PRIMARY KEY (`user_id`, `video_id`),
        INDEX `fk_Users_has_Videos_Videos1_idx` (`video_id` ASC) VISIBLE,
        INDEX `fk_Users_has_Videos_Users_idx` (`user_id` ASC) VISIBLE,
        CONSTRAINT `fk_Users_has_Videos_Users` FOREIGN KEY (`user_id`) REFERENCES `overview_database`.`Users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_Users_has_Videos_Videos1` FOREIGN KEY (`video_id`) REFERENCES `overview_database`.`Videos` (`video_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `overview_database`.`Likes`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `overview_database`.`Likes` (
        `user_id` INT NOT NULL,
        `video_id` INT NOT NULL,
        PRIMARY KEY (`user_id`, `video_id`),
        INDEX `fk_Users_has_Videos_Videos2_idx` (`video_id` ASC) VISIBLE,
        INDEX `fk_Users_has_Videos_Users1_idx` (`user_id` ASC) VISIBLE,
        CONSTRAINT `fk_Users_has_Videos_Users1` FOREIGN KEY (`user_id`) REFERENCES `overview_database`.`Users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_Users_has_Videos_Videos2` FOREIGN KEY (`video_id`) REFERENCES `overview_database`.`Videos` (`video_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `overview_database`.`Favorites`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `overview_database`.`Favorites` (
        `user_id` INT NOT NULL,
        `video_id` INT NOT NULL,
        PRIMARY KEY (`user_id`, `video_id`),
        INDEX `fk_Users_has_Videos_Videos3_idx` (`video_id` ASC) VISIBLE,
        INDEX `fk_Users_has_Videos_Users2_idx` (`user_id` ASC) VISIBLE,
        CONSTRAINT `fk_Users_has_Videos_Users2` FOREIGN KEY (`user_id`) REFERENCES `overview_database`.`Users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_Users_has_Videos_Videos3` FOREIGN KEY (`video_id`) REFERENCES `overview_database`.`Videos` (`video_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `overview_database`.`Views`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `overview_database`.`Views` (
        `users_id` INT NOT NULL,
        `video_id` INT NOT NULL,
        PRIMARY KEY (`users_id`, `video_id`),
        INDEX `fk_Users_has_Videos_Videos4_idx` (`video_id` ASC) VISIBLE,
        INDEX `fk_Users_has_Videos_Users3_idx` (`users_id` ASC) VISIBLE,
        CONSTRAINT `fk_Users_has_Videos_Users3` FOREIGN KEY (`users_id`) REFERENCES `overview_database`.`Users` (`user_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_Users_has_Videos_Videos4` FOREIGN KEY (`video_id`) REFERENCES `overview_database`.`Videos` (`video_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

-- -----------------------------------------------------
-- Table `overview_database`.`Add_Tags`
-- -----------------------------------------------------
CREATE TABLE
    IF NOT EXISTS `overview_database`.`Add_Tags` (
        `video_id` INT NOT NULL,
        `tag_id` INT NOT NULL,
        PRIMARY KEY (`video_id`, `tag_id`),
        INDEX `fk_Videos_has_Tags_Tags1_idx` (`tag_id` ASC) VISIBLE,
        INDEX `fk_Videos_has_Tags_Videos1_idx` (`video_id` ASC) VISIBLE,
        CONSTRAINT `fk_Videos_has_Tags_Videos1` FOREIGN KEY (`video_id`) REFERENCES `overview_database`.`Videos` (`video_id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
        CONSTRAINT `fk_Videos_has_Tags_Tags1` FOREIGN KEY (`tag_id`) REFERENCES `overview_database`.`Tags` (`tag_id`) ON DELETE NO ACTION ON UPDATE NO ACTION
    ) ENGINE = InnoDB;

SET SQL_MODE = @OLD_SQL_MODE;

SET FOREIGN_KEY_CHECKS = @OLD_FOREIGN_KEY_CHECKS;

SET UNIQUE_CHECKS = @OLD_UNIQUE_CHECKS;