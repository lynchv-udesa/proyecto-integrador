const data = {
    usuario: [
        {
            id: 1,
            nombreUsuario: 'susanita',
            email: 'susanag@gmail.com',
            contrasenia: 'susanaal9009',
            fechaNacimiento: '1944-01-29',
            documento: 8274399,
            fotoPerfil: "/images/susana.png"
        },
        {
            id: 2,
            nombreUsuario: 'emiliam',
            email: 'emiliamernes@gmail.com',
            contrasenia: '12345678',
            fechaNacimiento: '1996-10-29',
            documento: 35746807,
            fotoPerfil: "/images/emilia.png"
        },
        {
            id: 3,
            nombreUsuario: 'kimk1980',
            email: 'kimk1980@gmail.com',
            contrasenia: 'kimj1234',
            fechaNacimiento: '1980-10-21',
            documento: 26890765,
            fotoPerfil: "/images/kim.png"
        },
        {
            id: 4,
            nombreUsuario: 'jamie',
            email: 'jamescharles@gmail.com',
            contrasenia: 'slay',
            fechaNacimiento: '1999-05-23',
            documento: 39243746,
            fotoPerfil: "/images/james.png"
        },
        {
            id: 5,
            nombreUsuario: 'jojosiwa',
            email: 'jojosiwaa@gmail.com',
            contrasenia: 'imabadgirl',
            fechaNacimiento: '2003-05-19',
            documento: 44938004,
            fotoPerfil: "/images/jojo.png"
        },
    ],

    productos: [
        {
            imagen: "/images/sacoValencia.png",
            nombreProducto: 'SACO VALENCIA',
            descripcion: "Saco entallado confeccionado en género sastrero, suave y agradable. Un diseño clásico modernizado, con recortes de entalle y cuello sin quiebre. Posee bolsillos sastreros con tapa, y una etiqueta tejida en la manga, exclusiva de nuestra colección. Combinalo con el Pantalon Anto para lograr el total look.",
            id: 1,
        },
        {
            imagen: "/images/pantalonSkyBlack.png",
            nombreProducto: 'PANTALON SKY BLACK',
            descripcion: 'El pantalón Sky está confeccionado en un género de punto compacto con spandex. El fit es ajustado al cuerpo, con tajo en la botamanga. Un definitivo must-have para día y noche. Tiene elástico en la cintura para un mejor calce, y cierre invisible en espalda.',
            id: 2,
        },
        {
            imagen: "/images/camperaFantasy.png",
            nombreProducto: 'CAMPERA FANTASY',
            descripcion: 'Campera bomber confeccionada en rústico metálizado. Combinalo con nuestro Pantalón Fantasy para completar el conjunto.',
            id: 3,
        },
        {
            imagen: "/images/bodyAna.png",
            nombreProducto: 'BODY ANA',
            descripcion: 'Body al cuerpo confeccionado en tejido de punto suave. Cuenta con extracción en espalda y broches en entrepierna. Un item de nuestra colección que no puede faltarte!',
            id: 4,
        },
        {
            imagen: "/images/blusaKatu.png",
            nombreProducto: 'BLUSA KATU',
            descripcion: 'Blusa holgada confeccionada en satén opaco combinado con género traslucido. Presenta detalle de puntilla en mangas. Combinalo con Pantalon Biker.',
            id: 5,
        },
        {
            imagen: "/images/pantalonFlMarti.png",
            nombreProducto: 'PANTALON FL MARTI',
            descripcion: 'Pantalón recto confeccionado en género brilloso con textura. En el delantero lleva bolsillos. Arma tu set con el Saco Marti.',
            id: 6,
        },
        {
            imagen: "/images/miniScarlet.png",
            nombreProducto: 'MINI SCARLET',
            descripcion: 'Mini drapeada confeccionada en cuero ecológico de calce al cuerpo.',
            id: 7,
        },
        {
            imagen: "/images/miniLuna.png",
            nombreProducto: 'MINI LUNA',
            descripcion: 'Mini drapeada confeccionada en cuero ecológico de calce al cuerpo. Acceso a la prenda por cierre lateral.',
            id: 8,
        },
        {
            imagen: "/images/poleraCande.png",
            nombreProducto: 'POLERA CANDE',
            descripcion: 'Polera tejida ajustada al cuerpo con cuello alto. Un modelo clásico que no falla. El tejido tiene textura suave y abrigada. Ideal para usar de base en cualquier outfit de la temporada',
            id: 9,
        },
        {
            imagen: "/images/sweaterTwins.png",
            nombreProducto: 'SWEATER TWINS',
            descripcion: 'Nuestro Sweater Twins es un conjunto de 2 piezas tejidas que se pueden usar juntas o separadas. Por un lado las mangas, y por debajo el top strapless. La silueta es ajustada al cuerpo, y el tacto es super suave y agradable. Un diseño con mucha onda para combinar con una infinidad de posibidades. En el escote de espalda presenta una badana con nuestro logo en foil metalizado.',
            id: 10,
        }
    ],
    comentarios: [
        {
            nombreUsuarioC: 'jamie',
            textoC: '¡Me encanta esta prenda! El color es exactamente como se muestra en la imagen.',
            imagenPerfilC: "/images/james.png",
            id: 1,
        },
        {
            nombreUsuarioC: 'susanita',
            textoC: 'Después de lavarlo una vez, noté que se encogió un poco.',
            imagenPerfilC: "/images/susana.png",
            id: 2,
        },
        {
            nombreUsuarioC: 'jojosiwa',
            textoC: 'Algunas costuras parecen un poco débiles y temo que puedan desgarrarse fácilmente.',
            imagenPerfilC: "/images/jojo.png",
            id: 3,
        },
        {
            nombreUsuarioC: 'jamie',
            textoC: 'El diseño es único y moderno. Recibí muchos cumplidos cuando la usé.',
            imagenPerfilC: "/images/james.png",
            id: 4,
        },
        {
            nombreUsuarioC: 'kimk1980',
            textoC: 'Es una prenda versátil que se puede combinar con muchas otras prendas.',
            imagenPerfilC:"/images/kim.png",
                id: 5,
        },
        {
            nombreUsuarioC: 'jamie',
            textoC: '¿Cuál es el tiempo estimado de entrega para este artículo?',
            imagenPerfilC:"/images/james.png",
                id: 6,
        },
        {
            nombreUsuarioC: 'jojosiwa',
            textoC: 'El color de la prenda no coincide exactamente con lo que se muestra en la imagen en línea.',
            imagenPerfilC:"/images/jojo.png",
                id: 7,
        },
        {
            nombreUsuarioC: 'kimk1980',
            textoC: 'El precio es un poco alto en comparación con productos similares en otras tiendas.',
            imagenPerfilC: "/images/kim.png",
                id: 8,
        },
        {
            nombreUsuarioC: 'jojosiwa',
            textoC: 'La descripción del producto en línea no era muy detallada. Me habría gustado saber más sobre el material y las instrucciones de cuidado.',
            imagenPerfilC:"/images/jojo.png",
                id: 9,
        },
        {
            nombreUsuarioC: 'jamie',
            textoC: '¿Se puede devolver esta prenda si no estoy satisfecho con ella?',
            imagenPerfilC:"/images/james.png",
                id: 10,
        },
        {
            nombreUsuarioC: 'emiliam',
            textoC: 'La atención al cliente fue excelente. Respondieron rápidamente a todas mis preguntas.',
            imagenPerfilC:"/images/emilia.png",
                id: 11,
        },
        {
            nombreUsuarioC: 'susanita',
            textoC: 'Qué tipo de material se usa para esta prenda?',
            imagenPerfilC:"/images/susana.png",
                id: 12,
        },
        {
            nombreUsuarioC: 'emiliam',
            textoC: 'La entrega fue rápida y el artículo llegó en perfectas condiciones.',
            imagenPerfilC:"/images/emilia.png",
            id: 13,
        },
        {
            nombreUsuarioC: 'susanita',
            textoC: 'No estoy completamente satisfecho con la forma en que queda. No se ajusta tan bien como esperaba.',
            imagenPerfilC:"/images/susana.png",
                id: 14,
        },
        {
            nombreUsuarioC: 'jojosiwa',
            textoC: '¿Tiene esta prenda bolsillos?',
            imagenPerfilC:"/images/jojo.png",
                id: 15,
        },
        {
            nombreUsuarioC: 'susanita',
            textoC: 'El material no es tan suave como esperaba. Es un poco áspero al tacto.',
            imagenPerfilC:"/images/susana.png",
                id: 16,
        },
        {
            nombreUsuarioC: 'jojosiwa',
            textoC: '¿Cuál es el tiempo estimado de entrega para este artículo?',
            imagenPerfilC:"/images/jojo.png",
                id: 17,
        },
        {
            nombreUsuarioC: 'kimk1980',
            textoC: '¿Esta prenda viene con alguna garantía de calidad?',
            imagenPerfilC:"/images/kim.png",
                id: 18,
        },
        {
            nombreUsuarioC: 'kimk1980',
            textoC: '¿La tela de esta prenda es elástica o tiene algo de elasticidad?',
            imagenPerfilC:"/images/kim.png",
                id: 19,
        },
        {
            nombreUsuarioC: 'susanita',
            textoC: 'La etiqueta de cuidado en la prenda no es muy clara. Me gustaría tener instrucciones más detalladas sobre cómo lavarla correctamente.',
            imagenPerfilC:"/images/susana.png",
                id: 20,
        },
        {
            nombreUsuarioC: 'jamie',
            textoC: 'Recibí mi pedido antes de lo esperado. ¡Gracias por el envío rápido!',
            imagenPerfilC:"/images/james.png",
                id: 21,
        },
        {
            nombreUsuarioC: 'emiliam',
            textoC: 'El precio es un poco elevado para mi presupuesto. Me hubiera gustado encontrar una opción más económica.',
            imagenPerfilC:"/images/emilia.png",
                id: 22,
        },
        {
            nombreUsuarioC: 'jamie',
            textoC: '¿La prenda requiere planchado después del lavado?',
            imagenPerfilC:"/images/james.png",
                id: 23,
        },
        {
            nombreUsuarioC: 'jojosiwa',
            textoC: 'Después de usarla unas pocas veces, noté que el color comenzó a desvanecerse un poco.',
            imagenPerfilC:"/images/jojo.png",
                id: 24,
        },
        {
            nombreUsuarioC: 'jojosiwa',
            textoC: 'La guía de tallas fue precisa, lo que hizo que fuera fácil elegir el tamaño correcto.',
            imagenPerfilC:"/images/jojo.png",
                id: 25,
        },
        {
            nombreUsuarioC: 'emiliam',
            textoC: '¿La longitud de la prenda es ajustable o está fija?',
            imagenPerfilC:"/images/emilia.png",
                id: 26,
        },
        {
            nombreUsuarioC: 'kimk1980',
            textoC: 'El tejido no es tan suave como esperaba. Es un poco áspero al tacto.',
            imagenPerfilC:"/images/kim.png",
                id: 27,
        },
        {
            nombreUsuarioC: 'susanita',
            textoC: 'Estoy impresionado con lo cómoda que es esta prenda. ¡No quiero quitármela!',
            imagenPerfilC:"/images/susana.png",
                id: 28,
        },
        {
            nombreUsuarioC: 'emiliam',
            textoC: '¿Este artículo está disponible en tallas plus?',
            imagenPerfilC:"/images/emilia.png",
                id: 29,
        },
        {
            nombreUsuarioC: 'kimk1980',
            textoC: 'No estoy seguro de cómo combinar esta prenda con otras piezas de mi armario.',
            imagenPerfilC:"/images/kim.png",
                id: 30,
        }
    ],
};

module.exports = data;