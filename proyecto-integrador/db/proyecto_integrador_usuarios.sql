-- MySQL dump 10.13  Distrib 8.0.36, for Win64 (x86_64)
--
-- Host: 127.0.0.1    Database: proyecto_integrador
-- ------------------------------------------------------
-- Server version	5.5.5-10.4.32-MariaDB

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
-- Table structure for table `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `usuarios` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombreUsuario` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `contrasenia` varchar(500) NOT NULL,
  `fechaNacimiento` date DEFAULT NULL,
  `dni` int(11) DEFAULT NULL,
  `fotoPerfil` varchar(45) DEFAULT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB AUTO_INCREMENT=45 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `usuarios`
--

LOCK TABLES `usuarios` WRITE;
/*!40000 ALTER TABLE `usuarios` DISABLE KEYS */;
INSERT INTO `usuarios` VALUES (1,'susanita','susanagg@gmail.com','$2a$10$HClPneH4Bcn8hNADc6J.1u9otNjxnugt/aAR5E.pBH8Fx.pLdw4TS','1944-01-29',8274399,'/images/susana.png','2024-04-22 16:43:13','2024-06-22 19:40:28','2024-04-22 16:43:13'),(2,'emiliam','emiliamernes1@gmail.com','$2a$10$Krm5Fh.kp.Nw5zmqkVrya.fOuhqkQtsWklPIjFaVNbpgXDhBBsTWa','1996-10-29',35746807,'/images/emilia.png','2024-04-22 16:43:13','2024-06-22 19:41:32','2024-04-22 16:43:13'),(3,'kimk1980','kimk198@gmail.com','$2a$10$kE2yz3nT/HoP3iS3coAKhOPPdSaS0.I2XnYeAsVZI2sq0oyJaTZ9y','1980-10-21',26890765,'/images/kim.png','2024-04-22 16:43:13','2024-06-22 19:42:26','2024-04-22 16:43:13'),(4,'jamie','jamescharles1@gmail.com','$2a$10$HSii6PjA1mDTaJk91lEFtugfY4.nEqwfoT4b.OQeXTjGdkvrASszu','1999-05-23',39243746,'/images/james.png','2024-04-22 16:43:13','2024-06-22 19:43:07','2024-04-22 16:43:13'),(5,'jojosiwa','jojosiwaa1@gmail.com','$2a$10$uCoV4DYtii3ycz7EvRVog.Zv918T1aRlSCPuH2y5BH28lubGciYVC','2003-05-19',44938004,'/images/jojo.png','2024-04-22 16:43:13','2024-06-22 19:44:22','2024-04-22 16:43:13');
/*!40000 ALTER TABLE `usuarios` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2024-06-22 16:46:56
