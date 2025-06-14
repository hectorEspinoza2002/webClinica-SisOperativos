-- MySQL dump 10.13  Distrib 8.0.41, for Win64 (x86_64)
--
-- Host: localhost    Database: clinica_db
-- ------------------------------------------------------
-- Server version	9.2.0

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

--
-- Table structure for table `appointment`
--

DROP TABLE IF EXISTS `appointment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `appointment` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `date` varchar(255) DEFAULT NULL,
  `status` varchar(255) NOT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `paciente_id` bigint DEFAULT NULL,
  `hora` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKoeb98n82eph1dx43v3y2bcmsl` (`doctor_id`),
  KEY `FK3s918snwiwgilkj4mgs048w6u` (`paciente_id`),
  CONSTRAINT `FK3s918snwiwgilkj4mgs048w6u` FOREIGN KEY (`paciente_id`) REFERENCES `patient` (`id`),
  CONSTRAINT `FKoeb98n82eph1dx43v3y2bcmsl` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `appointment`
--

LOCK TABLES `appointment` WRITE;
/*!40000 ALTER TABLE `appointment` DISABLE KEYS */;
INSERT INTO `appointment` VALUES (1,'2025-06-23 20:30:00.000000','Chequeo general',1,1,NULL),(2,'2025-06-18 04:23:00.000000','Pendiente',1,3,NULL),(3,'2025-06-26 04:38:00.000000','Pendiente',3,3,NULL),(4,'2025-06-18','Pendiente',1,3,'08:00'),(5,'2025-06-16','Pendiente',3,3,'08:30'),(6,'2025-06-24','Pendiente',1,3,'14:11'),(7,'2025-06-16','Pendiente',3,1,'09:30'),(8,'2025-06-25','Pendiente',3,2,'08:30'),(9,'2025-07-08','Pendiente',3,3,'09:30'),(10,'2025-07-01','Pendiente',3,4,'08:00'),(11,'2025-06-30','Pendiente',4,5,'10:30');
/*!40000 ALTER TABLE `appointment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `doctor`
--

DROP TABLE IF EXISTS `doctor`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `doctor` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `name` varchar(255) NOT NULL,
  `schedule` varchar(255) NOT NULL,
  `specialty` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `doctor`
--

LOCK TABLES `doctor` WRITE;
/*!40000 ALTER TABLE `doctor` DISABLE KEYS */;
INSERT INTO `doctor` VALUES (1,'juan.perez@clinica.com','Dr. Juan Perez','Lunes a Viernes de 9:00 a 17:00','Cardiología','123456'),(2,'evalverde@clinica.com','Ernesto Valverde','Lunes a Viernes de 7:00 a 16:00','Anestesista','123456'),(3,'mestrada@clinica.com','Dr. Melvin Estrada','Lunes a Viernes de 7:00 a 16:00','Adontología','123456'),(4,'dalvarez@clinica.com','Dario Alvarez','Lunes a Viernes de 11:00 a 22:00','Cirujano ','123456');
/*!40000 ALTER TABLE `doctor` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `patient`
--

DROP TABLE IF EXISTS `patient`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `patient` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `phone` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `patient`
--

LOCK TABLES `patient` WRITE;
/*!40000 ALTER TABLE `patient` DISABLE KEYS */;
INSERT INTO `patient` VALUES (1,'hespinoza@mail.com','Héctor Espinoza','12345678','123456'),(2,'bruiz@gmail.com','Brandon Ruíz','31435643','123456'),(3,'wsian@gmail.com','Wilmer Sian','09214598','123456'),(4,'cmejia@gmail.com','Cesar Mejia','43908342','123456'),(5,'arecinos@gmail.com','Alejandro Recinos','43982309','123456');
/*!40000 ALTER TABLE `patient` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `prescriptions`
--

DROP TABLE IF EXISTS `prescriptions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `prescriptions` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `details` varchar(255) NOT NULL,
  `fecha` varchar(255) NOT NULL,
  `doctor_id` bigint DEFAULT NULL,
  `paciente_id` bigint DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKm05v7xv095d3gq0dppprlij1q` (`doctor_id`),
  KEY `FK9otqyhnphx9uuekkp59pyoe65` (`paciente_id`),
  CONSTRAINT `FK9otqyhnphx9uuekkp59pyoe65` FOREIGN KEY (`paciente_id`) REFERENCES `patient` (`id`),
  CONSTRAINT `FKm05v7xv095d3gq0dppprlij1q` FOREIGN KEY (`doctor_id`) REFERENCES `doctor` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `prescriptions`
--

LOCK TABLES `prescriptions` WRITE;
/*!40000 ALTER TABLE `prescriptions` DISABLE KEYS */;
INSERT INTO `prescriptions` VALUES (1,'Tomar 1 tableta de paracetamol cada 8 horas por 3 días\n','2025-06-13',1,NULL),(2,'Tomar 1 tableta de paracetamol cada 8 horas por 3 días\n','2025-06-13',1,NULL),(3,'Tomar 1 tableta de paracetamol cada 8 horas por 3 días','2025-06-13',3,NULL),(4,'Tomar 1 tableta de paracetamol cada 8 horas por 3 días','2025-06-13',NULL,NULL),(5,'Tomar 1 tableta de paracetamol cada 8 horas por 3 días','2025-06-13',NULL,NULL),(6,'Tomar 1 tableta de paracetamol cada 8 horas por 3 días','2025-06-13',NULL,NULL);
/*!40000 ALTER TABLE `prescriptions` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `users`
--

DROP TABLE IF EXISTS `users`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `users` (
  `id` bigint NOT NULL AUTO_INCREMENT,
  `email` varchar(255) DEFAULT NULL,
  `name` varchar(255) DEFAULT NULL,
  `password` varchar(255) DEFAULT NULL,
  `role` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `users`
--

LOCK TABLES `users` WRITE;
/*!40000 ALTER TABLE `users` DISABLE KEYS */;
INSERT INTO `users` VALUES (1,'admin@admin.com','Administrador','admin1234',NULL);
/*!40000 ALTER TABLE `users` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2025-06-13 22:24:30
