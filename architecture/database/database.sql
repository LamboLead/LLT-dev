-- MySQL dump 10.13  Distrib 8.0.24, for Win64 (x86_64)
--
-- Host: localhost    Database: TestDB
-- ------------------------------------------------------
-- Server version	8.0.25

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

-- Create new DB

CREATE DATABASE TestDB;
USE TestDB;

-- Creating tables...

--
-- Table structure for table `events`
--

DROP TABLE IF EXISTS `events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `events` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `description` varchar(500) NOT NULL,
  `information` varchar(500) DEFAULT NULL,
  `external_link` varchar(100) DEFAULT NULL,
  `addedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `events`
--

LOCK TABLES `events` WRITE;
/*!40000 ALTER TABLE `events` DISABLE KEYS */;
INSERT INTO `events` VALUES (1,'Lanzamiento del libro: Por una Transición Energética limpia y justa','afñlaskfjasñflkjfsañlkfjsfñ',NULL,NULL,'2022-08-01 20:25:54','2022-08-01 20:25:54'),(2,'Gran lanzamiento de cohete espacial','asñdlfkajfñlfjfsñljfasñlfkjas','lskgjhsfdkghasgkajsh',NULL,'2022-08-01 20:26:31','2022-08-01 20:26:31');
/*!40000 ALTER TABLE `events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `keywords`
--

DROP TABLE IF EXISTS `keywords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `keywords` (
  `id` int NOT NULL AUTO_INCREMENT,
  `keyword` varchar(30) NOT NULL,
  `description` varchar(150) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `keywords`
--

LOCK TABLES `keywords` WRITE;
/*!40000 ALTER TABLE `keywords` DISABLE KEYS */;
INSERT INTO `keywords` VALUES (1,'My project','asdlfasfhsf'),(2,'Second','asñlfaksjdfslf'),(3,'Third One',''),(4,'Dammit',NULL),(5,'Fourth',NULL);
/*!40000 ALTER TABLE `keywords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members`
--

DROP TABLE IF EXISTS `members`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(45) NOT NULL,
  `image_route` varchar(30) DEFAULT NULL,
  `biography` varchar(1500) DEFAULT '""',
  `interests` varchar(400) DEFAULT '""',
  `isActive` tinyint NOT NULL,
  `memberSince` year NOT NULL,
  `organizer_id` int unsigned NOT NULL,
  `addedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`organizer_id`),
  KEY `fk_members_organizers1_idx` (`organizer_id`),
  CONSTRAINT `fk_members_organizers1` FOREIGN KEY (`organizer_id`) REFERENCES `organizers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members`
--

LOCK TABLES `members` WRITE;
/*!40000 ALTER TABLE `members` DISABLE KEYS */;
INSERT INTO `members` VALUES (1,'Manuel Alejandro Fula Rojas','manuel-alejandro-fula.png','1. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae modi aliquam reprehenderit doloribus minima eaque facilis quas amet ipsam voluptatum ipsa perspiciatis corporis magnam aperiam iure dolorum adipisci, omnis nemo optio aut necessitatibus rem! Perspiciatis vero voluptatibus itaque nemo temporibus quisquam beatae illum doloribus ea! Itaque iste voluptatibus amet quibusdam in, modi beatae dolor provident a consequuntur ducimus, ullam voluptatem distinctio, sit maxime dolorum temporibus officia vel! Sed, vitae perspiciatis.','Aviación, Energía, Transición Energética, Ingeniería Mecánica',1,2012,1,'2022-08-01 20:15:45','2022-08-23 11:00:44'),(2,'Juan David López López','juan-david-lopez.png','2. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae modi aliquam reprehenderit doloribus minima eaque facilis quas amet ipsam voluptatum ipsa perspiciatis corporis magnam aperiam iure dolorum adipisci, omnis nemo optio aut necessitatibus rem! Perspiciatis vero voluptatibus itaque nemo temporibus quisquam beatae illum doloribus ea! Itaque iste voluptatibus amet quibusdam in, modi beatae dolor provident a consequuntur ducimus, ullam voluptatem distinctio, sit maxime dolorum temporibus officia vel! Sed, vitae perspiciatis.','Automovilismo, Ingeniería Mecánica, LamboLead Tech, Desarrollo de Software',1,2021,0,'2022-08-01 20:18:05','2022-08-23 11:00:44'),(3,'Fulano de Tal','fulano-de-tal.png','3. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae modi aliquam reprehenderit doloribus minima eaque facilis quas amet ipsam voluptatum ipsa perspiciatis corporis magnam aperiam iure dolorum adipisci, omnis nemo optio aut necessitatibus rem! Perspiciatis vero voluptatibus itaque nemo temporibus quisquam beatae illum doloribus ea! Itaque iste voluptatibus amet quibusdam in, modi beatae dolor provident a consequuntur ducimus, ullam voluptatem distinctio, sit maxime dolorum temporibus officia vel! Sed, vitae perspiciatis.','No tengo intereses',0,2015,2,'2022-08-01 20:18:23','2022-08-23 11:00:44'),(4,'Mauricio Mejía Valencia','mauricio-mejia.jpeg','4. Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae modi aliquam reprehenderit doloribus minima eaque facilis quas amet ipsam voluptatum ipsa perspiciatis corporis magnam aperiam iure dolorum adipisci, omnis nemo optio aut necessitatibus rem! Perspiciatis vero voluptatibus itaque nemo temporibus quisquam beatae illum doloribus ea! Itaque iste voluptatibus amet quibusdam in, modi beatae dolor provident a consequuntur ducimus, ullam voluptatem distinctio, sit maxime dolorum temporibus officia vel! Sed, vitae perspiciatis. <br><br> xime dolorum temporibus officia vel! Sed, vitae xime dolorum temporibus officia vel! Sed, vitae xime dolorum temporibus officia vel! Sed, vitae xime dolorum temporibus officia vel! Sed, vitae xime dolorum temporibus officia vel! Sed, vitae.','Justicia, Paz, Equidad, Sabiduría, Inteligencia, Sostenibilidad, Austeridad',1,2020,0,'2022-08-06 03:17:49','2022-08-23 12:33:49');
/*!40000 ALTER TABLE `members` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members_has_projects`
--

DROP TABLE IF EXISTS `members_has_projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members_has_projects` (
  `member_id` int unsigned NOT NULL,
  `project_id` int NOT NULL,
  PRIMARY KEY (`member_id`,`project_id`),
  KEY `fk_members_has_projects_projects1_idx` (`project_id`),
  KEY `fk_members_has_projects_members1_idx` (`member_id`),
  CONSTRAINT `fk_members_has_projects_members1` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`),
  CONSTRAINT `fk_members_has_projects_projects1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members_has_projects`
--

LOCK TABLES `members_has_projects` WRITE;
/*!40000 ALTER TABLE `members_has_projects` DISABLE KEYS */;
INSERT INTO `members_has_projects` VALUES (1,1),(2,1),(4,1),(3,2),(3,3),(4,3),(4,4);
/*!40000 ALTER TABLE `members_has_projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `members_has_roles`
--

DROP TABLE IF EXISTS `members_has_roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `members_has_roles` (
  `member_id` int unsigned NOT NULL,
  `role_id` int unsigned NOT NULL,
  PRIMARY KEY (`member_id`,`role_id`),
  KEY `fk_members_has_roles_roles1_idx` (`role_id`),
  KEY `fk_members_has_roles_members_idx` (`member_id`),
  CONSTRAINT `fk_members_has_roles_members` FOREIGN KEY (`member_id`) REFERENCES `members` (`id`),
  CONSTRAINT `fk_members_has_roles_roles1` FOREIGN KEY (`role_id`) REFERENCES `roles` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `members_has_roles`
--

LOCK TABLES `members_has_roles` WRITE;
/*!40000 ALTER TABLE `members_has_roles` DISABLE KEYS */;
INSERT INTO `members_has_roles` VALUES (2,1),(4,1),(1,2),(4,2),(1,3),(4,3),(2,4),(3,4),(4,4);
/*!40000 ALTER TABLE `members_has_roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `members_view`
--

DROP TABLE IF EXISTS `members_view`;
/*!50001 DROP VIEW IF EXISTS `members_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `members_view` AS SELECT 
 1 AS `member_id`,
 1 AS `member_name`,
 1 AS `member_image`,
 1 AS `biography`,
 1 AS `interests`,
 1 AS `isActive`,
 1 AS `since`,
 1 AS `role_id`,
 1 AS `role_role`,
 1 AS `project_id`,
 1 AS `project_title`,
 1 AS `year`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `organizations`
--

DROP TABLE IF EXISTS `organizations`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organizations` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `name` varchar(150) NOT NULL,
  `description` varchar(250) DEFAULT NULL,
  `website` varchar(30) DEFAULT NULL,
  `logo_route` varchar(25) DEFAULT NULL,
  `organizer_id` int unsigned NOT NULL,
  `addedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`,`organizer_id`),
  KEY `fk_organizations_organizers1_idx` (`organizer_id`),
  CONSTRAINT `fk_organizations_organizers1` FOREIGN KEY (`organizer_id`) REFERENCES `organizers` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organizations`
--

LOCK TABLES `organizations` WRITE;
/*!40000 ALTER TABLE `organizations` DISABLE KEYS */;
INSERT INTO `organizations` VALUES (2,'Fundación Heinrich Böll Stiftung',NULL,NULL,NULL,3,'2022-08-01 20:22:34'),(3,'Universidad Nacional de Colombia - Sede Medellín',NULL,NULL,NULL,4,'2022-08-01 20:22:34'),(4,'Semillero de Transición Energética y Microcogeneración',NULL,NULL,NULL,5,'2022-08-01 20:23:19');
/*!40000 ALTER TABLE `organizations` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organizers`
--

DROP TABLE IF EXISTS `organizers`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organizers` (
  `id` int unsigned NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organizers`
--

LOCK TABLES `organizers` WRITE;
/*!40000 ALTER TABLE `organizers` DISABLE KEYS */;
INSERT INTO `organizers` VALUES (0),(1),(2),(3),(4),(5);
/*!40000 ALTER TABLE `organizers` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `organizers_has_events`
--

DROP TABLE IF EXISTS `organizers_has_events`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `organizers_has_events` (
  `organizer_id` int unsigned NOT NULL,
  `event_id` int unsigned NOT NULL,
  PRIMARY KEY (`organizer_id`,`event_id`),
  KEY `fk_organizers_has_events_events1_idx` (`event_id`),
  KEY `fk_organizers_has_events_organizers1_idx` (`organizer_id`),
  CONSTRAINT `fk_organizers_has_events_events1` FOREIGN KEY (`event_id`) REFERENCES `events` (`id`),
  CONSTRAINT `fk_organizers_has_events_organizers1` FOREIGN KEY (`organizer_id`) REFERENCES `organizers` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `organizers_has_events`
--

LOCK TABLES `organizers_has_events` WRITE;
/*!40000 ALTER TABLE `organizers_has_events` DISABLE KEYS */;
INSERT INTO `organizers_has_events` VALUES (1,1),(2,1),(1,2),(2,2),(3,2);
/*!40000 ALTER TABLE `organizers_has_events` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects`
--

DROP TABLE IF EXISTS `projects`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `year` year NOT NULL,
  `abstract` varchar(500) NOT NULL,
  `infographyRoute` varchar(80) DEFAULT NULL,
  `timesRequested` int NOT NULL DEFAULT '0',
  `addedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COMMENT='			';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects`
--

LOCK TABLES `projects` WRITE;
/*!40000 ALTER TABLE `projects` DISABLE KEYS */;
INSERT INTO `projects` VALUES (1,'My project is the best one in the world',2022,'1Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit assumenda sapiente voluptate. Nihil necessitatibus dicta facere iusto animi numquam eveniet distinctio reprehenderit sit aliquam temporibus illo tempora odio deserunt nostrum id rerum, vel repellendus corporis, quasi cupiditate. Molestiae, aspernatur dolorem?','contrato-de-prestacion-de-servicios.pdf',0,'2022-08-01 20:33:56','2022-08-22 19:08:03'),(2,'My project is the second best one in the world',2021,'2Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit assumenda sapiente voluptate. Nihil necessitatibus dicta facere iusto animi numquam eveniet distinctio reprehenderit sit aliquam temporibus illo tempora odio deserunt nostrum id rerum, vel repellendus corporis, quasi cupiditate. Molestiae, aspernatur dolorem?','cv-juan-david-lopez.pdf',0,'2022-08-01 20:33:56','2022-08-22 19:08:03'),(3,'My project is the third best',1969,'3Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit assumenda sapiente voluptate. Nihil necessitatibus dicta facere iusto animi numquam eveniet distinctio reprehenderit sit aliquam temporibus illo tempora odio deserunt nostrum id rerum, vel repellendus corporis, quasi cupiditate. Molestiae, aspernatur dolorem?','catalogo-de-productos.pdf',0,'2022-08-01 20:40:02','2022-08-22 19:16:26'),(4,'This is my fourth project',2020,'4Lorem ipsum, dolor sit amet consectetur adipisicing elit. Odit assumenda sapiente voluptate. Nihil necessitatibus dicta facere iusto animi numquam eveniet distinctio reprehenderit sit aliquam temporibus illo tempora odio deserunt nostrum id rerum, vel repellendus corporis, quasi cupiditate. Molestiae, aspernatur dolorem?','pagina-de-presentacion.pdf',0,'2022-08-06 03:17:14','2022-08-22 19:16:26');
/*!40000 ALTER TABLE `projects` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `projects_has_keywords`
--

DROP TABLE IF EXISTS `projects_has_keywords`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `projects_has_keywords` (
  `project_id` int NOT NULL,
  `keyword_id` int NOT NULL,
  PRIMARY KEY (`project_id`,`keyword_id`),
  KEY `fk_projects_has_keywords_keywords1_idx` (`keyword_id`),
  KEY `fk_projects_has_keywords_projects1_idx` (`project_id`),
  CONSTRAINT `fk_projects_has_keywords_keywords1` FOREIGN KEY (`keyword_id`) REFERENCES `keywords` (`id`),
  CONSTRAINT `fk_projects_has_keywords_projects1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `projects_has_keywords`
--

LOCK TABLES `projects_has_keywords` WRITE;
/*!40000 ALTER TABLE `projects_has_keywords` DISABLE KEYS */;
INSERT INTO `projects_has_keywords` VALUES (1,1),(4,1),(2,2),(1,3),(2,3),(3,3),(3,4),(4,4),(4,5);
/*!40000 ALTER TABLE `projects_has_keywords` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Temporary view structure for view `repository_view`
--

DROP TABLE IF EXISTS `repository_view`;
/*!50001 DROP VIEW IF EXISTS `repository_view`*/;
SET @saved_cs_client     = @@character_set_client;
/*!50503 SET character_set_client = utf8mb4 */;
/*!50001 CREATE VIEW `repository_view` AS SELECT 
 1 AS `project_id`,
 1 AS `project_title`,
 1 AS `member_id`,
 1 AS `member_name`,
 1 AS `member_image`,
 1 AS `year`,
 1 AS `keyword_id`,
 1 AS `keyword_keyword`,
 1 AS `abstract`,
 1 AS `infography`*/;
SET character_set_client = @saved_cs_client;

--
-- Table structure for table `request_types`
--

DROP TABLE IF EXISTS `request_types`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `request_types` (
  `id` int unsigned NOT NULL,
  `name` varchar(20) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `request_types`
--

LOCK TABLES `request_types` WRITE;
/*!40000 ALTER TABLE `request_types` DISABLE KEYS */;
INSERT INTO `request_types` VALUES (1,'Contact'),(2,'Project');
/*!40000 ALTER TABLE `request_types` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `requests`
--

DROP TABLE IF EXISTS `requests`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `requests` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `subject` varchar(150) NOT NULL,
  `from_name` varchar(50) NOT NULL,
  `from_email` varchar(30) NOT NULL,
  `message` varchar(500) NOT NULL,
  `type_id` int unsigned DEFAULT NULL,
  `project_id` int DEFAULT NULL,
  `createdAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  KEY `fk_requests_request_types1_idx` (`type_id`),
  KEY `fk_requests_projects1_idx` (`project_id`),
  CONSTRAINT `fk_requests_projects1` FOREIGN KEY (`project_id`) REFERENCES `projects` (`id`),
  CONSTRAINT `fk_requests_request_types1` FOREIGN KEY (`type_id`) REFERENCES `request_types` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `requests`
--

LOCK TABLES `requests` WRITE;
/*!40000 ALTER TABLE `requests` DISABLE KEYS */;
INSERT INTO `requests` VALUES (1,'Muy buen día profe','Fulano de Tal','fulano@detal.com','Hola profe muy buenos días',1,NULL,'2022-08-01 20:43:14'),(2,'Muy buenas profe','Juan David López López','jlopezlo@unal.edu.co','Muy buenas semillero',1,NULL,'2022-08-01 20:43:14'),(3,'Quiero pedir este proyecto','Fulano de Tal','fulano@detal.com','Muy buenas profe, me gustaría pedir este proyecto',2,2,'2022-08-01 20:43:14');
/*!40000 ALTER TABLE `requests` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `roles`
--

DROP TABLE IF EXISTS `roles`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `roles` (
  `id` int unsigned NOT NULL AUTO_INCREMENT,
  `role` varchar(15) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb3 COMMENT='							';
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `roles`
--

LOCK TABLES `roles` WRITE;
/*!40000 ALTER TABLE `roles` DISABLE KEYS */;
INSERT INTO `roles` VALUES (1,'Master'),(2,'Administrator'),(3,'Profesor'),(4,'Estudiante');
/*!40000 ALTER TABLE `roles` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `test`
--

DROP TABLE IF EXISTS `test`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `test` (
  `id` int NOT NULL AUTO_INCREMENT,
  `message` varchar(50) NOT NULL,
  `addedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `updatedAt` datetime NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=4 DEFAULT CHARSET=utf8mb3;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `test`
--

LOCK TABLES `test` WRITE;
/*!40000 ALTER TABLE `test` DISABLE KEYS */;
INSERT INTO `test` VALUES (1,'Bless you, sir','2022-08-01 17:50:17','2022-08-01 17:51:23'),(2,'Fuck you, sir','2022-08-01 20:06:31','2022-08-01 20:06:31'),(3,'Dammit','2022-08-01 20:06:39','2022-08-01 20:06:39');
/*!40000 ALTER TABLE `test` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Final view structure for view `members_view`
--

/*!50001 DROP VIEW IF EXISTS `members_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `members_view` AS select `members`.`id` AS `member_id`,`members`.`name` AS `member_name`,`members`.`image_route` AS `member_image`,`members`.`biography` AS `biography`,`members`.`interests` AS `interests`,`members`.`isActive` AS `isActive`,`members`.`memberSince` AS `since`,`roles`.`id` AS `role_id`,`roles`.`role` AS `role_role`,`projects`.`id` AS `project_id`,`projects`.`title` AS `project_title`,`projects`.`year` AS `year` from ((((`projects` join `members_has_projects` on((`projects`.`id` = `members_has_projects`.`project_id`))) join `members` on((`members`.`id` = `members_has_projects`.`member_id`))) join `members_has_roles` on((`members`.`id` = `members_has_roles`.`member_id`))) join `roles` on((`roles`.`id` = `members_has_roles`.`role_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;

--
-- Final view structure for view `repository_view`
--

/*!50001 DROP VIEW IF EXISTS `repository_view`*/;
/*!50001 SET @saved_cs_client          = @@character_set_client */;
/*!50001 SET @saved_cs_results         = @@character_set_results */;
/*!50001 SET @saved_col_connection     = @@collation_connection */;
/*!50001 SET character_set_client      = utf8mb4 */;
/*!50001 SET character_set_results     = utf8mb4 */;
/*!50001 SET collation_connection      = utf8mb4_0900_ai_ci */;
/*!50001 CREATE ALGORITHM=UNDEFINED */
/*!50013 DEFINER=`root`@`localhost` SQL SECURITY DEFINER */
/*!50001 VIEW `repository_view` AS select `projects`.`id` AS `project_id`,`projects`.`title` AS `project_title`,`members`.`id` AS `member_id`,`members`.`name` AS `member_name`,`members`.`image_route` AS `member_image`,`projects`.`year` AS `year`,`keywords`.`id` AS `keyword_id`,`keywords`.`keyword` AS `keyword_keyword`,`projects`.`abstract` AS `abstract`,`projects`.`infographyRoute` AS `infography` from ((((`projects` join `members_has_projects` on((`projects`.`id` = `members_has_projects`.`project_id`))) join `members` on((`members`.`id` = `members_has_projects`.`member_id`))) join `projects_has_keywords` on((`projects`.`id` = `projects_has_keywords`.`project_id`))) join `keywords` on((`keywords`.`id` = `projects_has_keywords`.`keyword_id`))) */;
/*!50001 SET character_set_client      = @saved_cs_client */;
/*!50001 SET character_set_results     = @saved_cs_results */;
/*!50001 SET collation_connection      = @saved_col_connection */;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-08-28 16:32:30
