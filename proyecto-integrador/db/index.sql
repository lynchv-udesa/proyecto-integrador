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
) ENGINE=InnoDB AUTO_INCREMENT=537 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

CREATE TABLE `productos` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `imagen` varchar(45) NOT NULL,
  `nombre` varchar(45) NOT NULL,
  `descripcion` varchar(210) NOT NULL,
  `createdAt` timestamp NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NULL DEFAULT current_timestamp(),
  `idUsuario` int(11) unsigned NOT NULL,
  PRIMARY KEY (`id`),
  KEY `idUsuarioForeign_idx` (`idUsuario`),
  CONSTRAINT `idUsuarioForeign` FOREIGN KEY (`idUsuario`) REFERENCES `usuarios` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci

CREATE TABLE `usuarios` (
  `id` int(11) unsigned NOT NULL AUTO_INCREMENT,
  `nombreUsuario` varchar(45) NOT NULL,
  `email` varchar(45) NOT NULL,
  `contrasenia` varchar(45) NOT NULL,
  `fechaNacimiento` date NOT NULL,
  `dni` int(11) NOT NULL,
  `fotoPerfil` varchar(45) NOT NULL,
  `createdAt` timestamp NOT NULL DEFAULT current_timestamp(),
  `updatedAt` timestamp NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deletedAt` timestamp NOT NULL DEFAULT current_timestamp(),
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`),
  UNIQUE KEY `nombreUsuario_UNIQUE` (`nombreUsuario`),
  UNIQUE KEY `dni_UNIQUE` (`dni`)
) ENGINE=InnoDB AUTO_INCREMENT=6 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci


/*
-- Query: SELECT * FROM proyectointegrador.comentarios
LIMIT 0, 1000

-- Date: 2024-04-22 14:49
*/
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (504,'jamie','¡Me encanta esta prenda! El color es exactamente como se muestra en la imagen.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',4,14);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (505,'susanita','Después de lavarlo una vez, noté que se encogió un poco.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',1,16);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (506,'jojosiwa','Algunas costuras parecen un poco débiles y temo que puedan desgarrarse fácilmente.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',5,14);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (507,'jamie','El diseño es único y moderno. Recibí muchos cumplidos cuando la usé.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',4,15);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (508,'kimk1980','Es una prenda versátil que se puede combinar con muchas otras prendas.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',3,16);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (509,'jamie','¿Cuál es el tiempo estimado de entrega para este artículo?','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',4,17);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (510,'jojosiwa','El color de la prenda no coincide exactamente con lo que se muestra en la imagen en línea.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',5,18);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (511,'kimk1980','El precio es un poco alto en comparación con productos similares en otras tiendas.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',3,19);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (512,'jojosiwa','La descripción del producto en línea no era muy detallada. Me habría gustado saber más sobre el material y las instrucciones de cuidado.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',5,18);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (513,'jamie','¿Se puede devolver esta prenda si no estoy satisfecho con ella?','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',4,15);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (514,'emiliam','La atención al cliente fue excelente. Respondieron rápidamente a todas mis preguntas.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',2,14);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (515,'jamie','¡Me encanta esta prenda! El color es exactamente como se muestra en la imagen.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',4,15);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (516,'susanita','Después de lavarlo una vez, noté que se encogió un poco.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',1,14);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (517,'jojosiwa','Algunas costuras parecen un poco débiles y temo que puedan desgarrarse fácilmente.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',5,16);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (518,'jamie','El diseño es único y moderno. Recibí muchos cumplidos cuando la usé.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',4,18);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (519,'kimk1980','Es una prenda versátil que se puede combinar con muchas otras prendas.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',3,19);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (520,'jamie','¿Cuál es el tiempo estimado de entrega para este artículo?','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',4,15);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (521,'jojosiwa','El color de la prenda no coincide exactamente con lo que se muestra en la imagen en línea.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',5,15);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (522,'kimk1980','El precio es un poco alto en comparación con productos similares en otras tiendas.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',3,16);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (523,'jojosiwa','La descripción del producto en línea no era muy detallada. Me habría gustado saber más sobre el material y las instrucciones de cuidado.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',5,17);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (524,'jamie','¿Se puede devolver esta prenda si no estoy satisfecho con ella?','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',4,14);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (525,'emiliam','La atención al cliente fue excelente. Respondieron rápidamente a todas mis preguntas.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',2,17);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (526,'jamie','¡Me encanta esta prenda! El color es exactamente como se muestra en la imagen.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',4,19);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (527,'susanita','Después de lavarlo una vez, noté que se encogió un poco.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',1,15);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (528,'jojosiwa','Algunas costuras parecen un poco débiles y temo que puedan desgarrarse fácilmente.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',5,16);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (529,'jamie','El diseño es único y moderno. Recibí muchos cumplidos cuando la usé.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',4,17);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (530,'kimk1980','Es una prenda versátil que se puede combinar con muchas otras prendas.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',3,18);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (531,'jamie','¿Cuál es el tiempo estimado de entrega para este artículo?','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',4,19);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (532,'jojosiwa','El color de la prenda no coincide exactamente con lo que se muestra en la imagen en línea.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',5,14);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (533,'kimk1980','El precio es un poco alto en comparación con productos similares en otras tiendas.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',3,15);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (534,'jojosiwa','La descripción del producto en línea no era muy detallada. Me habría gustado saber más sobre el material y las instrucciones de cuidado.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',5,16);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (535,'jamie','¿Se puede devolver esta prenda si no estoy satisfecho con ella?','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',4,17);
INSERT INTO `comentarios` (`id`,`nombre`,`texto`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuarioC`,`idProducto`) VALUES (536,'emiliam','La atención al cliente fue excelente. Respondieron rápidamente a todas mis preguntas.','2024-04-22 14:39:10','2024-04-22 14:39:10','2024-04-22 14:39:10',2,18);


/*
-- Query: SELECT * FROM proyectointegrador.productos
LIMIT 0, 1000

-- Date: 2024-04-22 14:51
*/
INSERT INTO `productos` (`id`,`imagen`,`nombre`,`descripcion`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuario`) VALUES (14,'/images/sacoValencia.png','SACO VALENCIA','Saco entallado confeccionado en género sastrero, suave y agradable. Un diseño clásico modernizado, con recortes de entalle y cuello sin quiebre. Posee bolsillos sastreros con tapa, y una etiqueta tejida en la m','2024-04-22 13:53:10','2024-04-22 13:53:10','2024-04-22 13:53:10',1);
INSERT INTO `productos` (`id`,`imagen`,`nombre`,`descripcion`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuario`) VALUES (15,'/images/pantalonSkyBlack.png','PANTALON SKY BLACK','El pantalón Sky está confeccionado en un género de punto compacto con spandex. El fit es ajustado al cuerpo, con tajo en la botamanga. Un definitivo must-have para día y noche. Tiene elástico en la cintura para','2024-04-22 13:53:10','2024-04-22 13:53:10','2024-04-22 13:53:10',1);
INSERT INTO `productos` (`id`,`imagen`,`nombre`,`descripcion`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuario`) VALUES (16,'/images/camperaFantasy.png','CAMPERA FANTASY','Campera bomber confeccionada en rústico metálizado. Combinalo con nuestro Pantalón Fantasy para completar el conjunto.','2024-04-22 13:53:10','2024-04-22 13:53:10','2024-04-22 13:53:10',2);
INSERT INTO `productos` (`id`,`imagen`,`nombre`,`descripcion`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuario`) VALUES (17,'/images/bodyAna.png','BODY ANA','Body al cuerpo confeccionado en tejido de punto suave. Cuenta con extracción en espalda y broches en entrepierna. Un item de nuestra colección que no puede faltarte!','2024-04-22 13:53:10','2024-04-22 13:53:10','2024-04-22 13:53:10',3);
INSERT INTO `productos` (`id`,`imagen`,`nombre`,`descripcion`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuario`) VALUES (18,'/images/blusaKatu.png','BLUSA KATU','Blusa holgada confeccionada en satén opaco combinado con género traslucido. Presenta detalle de puntilla en mangas. Combinalo con Pantalon Biker.','2024-04-22 13:53:10','2024-04-22 13:53:10','2024-04-22 13:53:10',4);
INSERT INTO `productos` (`id`,`imagen`,`nombre`,`descripcion`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuario`) VALUES (19,'/images/miniScarlet.png','MINI SCARLET','Mini drapeada confeccionada en cuero ecológico de calce al cuerpo.','2024-04-22 13:53:10','2024-04-22 13:53:10','2024-04-22 13:53:10',1);
INSERT INTO `productos` (`id`,`imagen`,`nombre`,`descripcion`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuario`) VALUES (20,'/images/miniLuna.png','MINI LUNA','Mini drapeada confeccionada en cuero ecológico de calce al cuerpo. Acceso a la prenda por cierre lateral.','2024-04-22 13:53:10','2024-04-22 13:53:10','2024-04-22 13:53:10',2);
INSERT INTO `productos` (`id`,`imagen`,`nombre`,`descripcion`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuario`) VALUES (21,'/images/poleraCande.png','POLERA CANDE','Polera tejida ajustada al cuerpo con cuello alto. Un modelo clásico que no falla. El tejido tiene textura suave y abrigada. Ideal para usar de base en cualquier outfit de la temporada','2024-04-22 13:53:10','2024-04-22 13:53:10','2024-04-22 13:53:10',1);
INSERT INTO `productos` (`id`,`imagen`,`nombre`,`descripcion`,`createdAt`,`updatedAt`,`deletedAt`,`idUsuario`) VALUES (22,'/images/sweaterTwins.png','SWEATER TWINS','Nuestro Sweater Twins es un conjunto de 2 piezas tejidas que se pueden usar juntas o separadas. Por un lado las mangas, y por debajo el top strapless. La silueta es ajustada al cuerpo, y el tacto es super suave','2024-04-22 13:53:10','2024-04-22 13:53:10','2024-04-22 13:53:10',1);


/*
-- Query: SELECT * FROM proyectointegrador.usuarios
LIMIT 0, 1000

-- Date: 2024-04-22 14:52
*/
INSERT INTO `usuarios` (`id`,`nombreUsuario`,`email`,`contrasenia`,`fechaNacimiento`,`dni`,`fotoPerfil`,`createdAt`,`updatedAt`,`deletedAt`) VALUES (1,'susanita','susanag@gmail.com','susanaal9009','1944-01-29',8274399,'/images/susana.png','2024-04-22 13:43:13','2024-04-22 13:43:13','2024-04-22 13:43:13');
INSERT INTO `usuarios` (`id`,`nombreUsuario`,`email`,`contrasenia`,`fechaNacimiento`,`dni`,`fotoPerfil`,`createdAt`,`updatedAt`,`deletedAt`) VALUES (2,'emiliam','emiliamernes@gmail.com','12345678','1996-10-29',35746807,'/images/emilia.png','2024-04-22 13:43:13','2024-04-22 13:43:13','2024-04-22 13:43:13');
INSERT INTO `usuarios` (`id`,`nombreUsuario`,`email`,`contrasenia`,`fechaNacimiento`,`dni`,`fotoPerfil`,`createdAt`,`updatedAt`,`deletedAt`) VALUES (3,'kimk1980','kimk1980@gmail.com','kimj1234','1980-10-21',26890765,'/images/kim.png','2024-04-22 13:43:13','2024-04-22 13:43:13','2024-04-22 13:43:13');
INSERT INTO `usuarios` (`id`,`nombreUsuario`,`email`,`contrasenia`,`fechaNacimiento`,`dni`,`fotoPerfil`,`createdAt`,`updatedAt`,`deletedAt`) VALUES (4,'jamie','jamescharles@gmail.com','slay','1999-05-23',39243746,'/images/james.png','2024-04-22 13:43:13','2024-04-22 13:43:13','2024-04-22 13:43:13');
INSERT INTO `usuarios` (`id`,`nombreUsuario`,`email`,`contrasenia`,`fechaNacimiento`,`dni`,`fotoPerfil`,`createdAt`,`updatedAt`,`deletedAt`) VALUES (5,'jojosiwa','jojosiwaa@gmail.com','imabadgirl','2003-05-19',44938004,'/images/jojo.png','2024-04-22 13:43:13','2024-04-22 13:43:13','2024-04-22 13:43:13');