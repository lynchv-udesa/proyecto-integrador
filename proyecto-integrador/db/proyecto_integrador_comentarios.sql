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
-- Table structure for table `comentarios`
--

DROP TABLE IF EXISTS `comentarios`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comentarios` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombre` varchar(45) NOT NULL,
  `texto` varchar(210) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT current_timestamp(),
  `idUsuarioC` int(11) unsigned NOT NULL,
  `idProducto` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUsuarioCForeign_idx` (`idUsuarioC`),
  KEY `idProductoForeign_idx` (`idProducto`),
  CONSTRAINT `idProductoForeign` FOREIGN KEY (`idProducto`) REFERENCES `productos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  CONSTRAINT `idUsuarioCForeign` FOREIGN KEY (`idUsuarioC`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=558 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comentarios`
--

LOCK TABLES `comentarios` WRITE;
/*!40000 ALTER TABLE `comentarios` DISABLE KEYS */;
INSERT INTO `comentarios` VALUES (504,'jamie','¡Me encanta esta prenda! El color es exactamente como se muestra en la imagen.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',4,14),(505,'susanita','Después de lavarlo una vez, noté que se encogió un poco.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',1,16),(506,'jojosiwa','Algunas costuras parecen un poco débiles y temo que puedan desgarrarse fácilmente.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',5,14),(507,'jamie','El diseño es único y moderno. Recibí muchos cumplidos cuando la usé.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',4,15),(508,'kimk1980','Es una prenda versátil que se puede combinar con muchas otras prendas.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',3,16),(509,'jamie','¿Cuál es el tiempo estimado de entrega para este artículo?','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',4,17),(510,'jojosiwa','El color de la prenda no coincide exactamente con lo que se muestra en la imagen en línea.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',5,18),(511,'kimk1980','El precio es un poco alto en comparación con productos similares en otras tiendas.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',3,19),(512,'jojosiwa','La descripción del producto en línea no era muy detallada. Me habría gustado saber más sobre el material y las instrucciones de cuidado.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',5,18),(513,'jamie','¿Se puede devolver esta prenda si no estoy satisfecho con ella?','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',4,15),(514,'emiliam','La atención al cliente fue excelente. Respondieron rápidamente a todas mis preguntas.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',2,14),(515,'jamie','¡Me encanta esta prenda! El color es exactamente como se muestra en la imagen.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',4,15),(516,'susanita','Después de lavarlo una vez, noté que se encogió un poco.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',1,14),(517,'jojosiwa','Algunas costuras parecen un poco débiles y temo que puedan desgarrarse fácilmente.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',5,16),(518,'jamie','El diseño es único y moderno. Recibí muchos cumplidos cuando la usé.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',4,18),(519,'kimk1980','Es una prenda versátil que se puede combinar con muchas otras prendas.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',3,19),(520,'jamie','¿Cuál es el tiempo estimado de entrega para este artículo?','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',4,15),(521,'jojosiwa','El color de la prenda no coincide exactamente con lo que se muestra en la imagen en línea.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',5,15),(522,'kimk1980','El precio es un poco alto en comparación con productos similares en otras tiendas.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',3,16),(523,'jojosiwa','La descripción del producto en línea no era muy detallada. Me habría gustado saber más sobre el material y las instrucciones de cuidado.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',5,17),(524,'jamie','¿Se puede devolver esta prenda si no estoy satisfecho con ella?','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',4,14),(525,'emiliam','La atención al cliente fue excelente. Respondieron rápidamente a todas mis preguntas.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',2,17),(526,'jamie','¡Me encanta esta prenda! El color es exactamente como se muestra en la imagen.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',4,19),(527,'susanita','Después de lavarlo una vez, noté que se encogió un poco.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',1,15),(528,'jojosiwa','Algunas costuras parecen un poco débiles y temo que puedan desgarrarse fácilmente.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',5,16),(529,'jamie','El diseño es único y moderno. Recibí muchos cumplidos cuando la usé.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',4,17),(530,'kimk1980','Es una prenda versátil que se puede combinar con muchas otras prendas.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',3,18),(531,'jamie','¿Cuál es el tiempo estimado de entrega para este artículo?','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',4,19),(532,'jojosiwa','El color de la prenda no coincide exactamente con lo que se muestra en la imagen en línea.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',5,14),(533,'kimk1980','El precio es un poco alto en comparación con productos similares en otras tiendas.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',3,15),(534,'jojosiwa','La descripción del producto en línea no era muy detallada. Me habría gustado saber más sobre el material y las instrucciones de cuidado.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',5,16),(535,'jamie','¿Se puede devolver esta prenda si no estoy satisfecho con ella?','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',4,17),(536,'emiliam','La atención al cliente fue excelente. Respondieron rápidamente a todas mis preguntas.','2024-04-22 17:39:10','2024-04-22 17:39:10','2024-04-22 17:39:10',2,18);
/*!40000 ALTER TABLE `comentarios` ENABLE KEYS */;
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
