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
-- Table structure for table `productos`
--

DROP TABLE IF EXISTS `productos`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `productos` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `imagen` varchar(45) NOT NULL,
  `descripcion` varchar(210) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT current_timestamp(),
  `idUsuario` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUsuarioForeign_idx` (`idUsuario`),
  CONSTRAINT `idUsuarioForeign` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=28 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `productos`
--

LOCK TABLES `productos` WRITE;
/*!40000 ALTER TABLE `productos` DISABLE KEYS */;
INSERT INTO `productos` VALUES (14,'SACO VALENCIA','/images/sacoValencia.png','Saco entallado confeccionado en género sastrero, suave y agradable. Un diseño clásico modernizado, con recortes de entalle y cuello sin quiebre. Posee bolsillos sastreros con tapa, y una etiqueta tejida en la m','2024-04-22 16:53:10','2024-04-22 16:53:10','2024-04-22 16:53:10',1),(15,'PANTALON SKY BLACK','/images/pantalonSkyBlack.png','El pantalón Sky está confeccionado en un género de punto compacto con spandex. El fit es ajustado al cuerpo, con tajo en la botamanga. Un definitivo must-have para día y noche. Tiene elástico en la cintura para','2024-04-22 16:53:10','2024-04-22 16:53:10','2024-04-22 16:53:10',1),(16,'CAMPERA FANTASY','/images/camperaFantasy.png','Campera bomber confeccionada en rústico metálizado. Combinalo con nuestro Pantalón Fantasy para completar el conjunto.','2024-04-22 16:53:10','2024-04-22 16:53:10','2024-04-22 16:53:10',2),(17,'BODY ANA','/images/bodyAna.png','Body al cuerpo confeccionado en tejido de punto suave. Cuenta con extracción en espalda y broches en entrepierna. Un item de nuestra colección que no puede faltarte!','2024-04-22 16:53:10','2024-04-22 16:53:10','2024-04-22 16:53:10',3),(18,'BLUSA KATU','/images/blusaKatu.png','Blusa holgada confeccionada en satén opaco combinado con género traslucido. Presenta detalle de puntilla en mangas. Combinalo con Pantalon Biker.','2024-04-22 16:53:10','2024-04-22 16:53:10','2024-04-22 16:53:10',4),(19,'MINI SCARLET','/images/miniScarlet.png','Mini drapeada confeccionada en cuero ecológico de calce al cuerpo.','2024-04-22 16:53:10','2024-04-22 16:53:10','2024-04-22 16:53:10',1),(20,'MINI LUNA','/images/miniLuna.png','Mini drapeada confeccionada en cuero ecológico de calce al cuerpo. Acceso a la prenda por cierre lateral.','2024-04-22 16:53:10','2024-04-22 16:53:10','2024-04-22 16:53:10',2),(21,'POLERA CANDE','/images/poleraCande.png','Polera tejida ajustada al cuerpo con cuello alto. Un modelo clásico que no falla. El tejido tiene textura suave y abrigada. Ideal para usar de base en cualquier outfit de la temporada','2024-04-22 16:53:10','2024-04-22 16:53:10','2024-04-22 16:53:10',1),(22,'SWEATER TWINS','/images/sweaterTwins.png','Nuestro Sweater Twins es un conjunto de 2 piezas tejidas que se pueden usar juntas o separadas. Por un lado las mangas, y por debajo el top strapless. La silueta es ajustada al cuerpo, y el tacto es super suave','2024-04-22 16:53:10','2024-04-22 16:53:10','2024-04-22 16:53:10',1);
/*!40000 ALTER TABLE `productos` ENABLE KEYS */;
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
