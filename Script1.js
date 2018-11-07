// JavaScript source code
//let cartas = [
//    {
//        nombre: "Ignatius",
//        ataque: 7,
//        defensa: 4,
//        descripcion: "Ser desagradable. Sus ataques envenenan",
//        imagen:"https://www.ecestaticos.com/imagestatic/clipping/491/e81/491e810bc7d83a6dbe8d51a5948d55b4/la-buena-mierda-fascista-de-ignatius-farray-en-la-cama-con-la-bestia-parda-del-humor.jpg?mtime=1482515305"
//    },
//    {
//        nombre: "John Mclane",
//        ataque:7,
//        defensa:6,
//        descripcion: "Experto caminando sobre cristales. No molestar en navidad",
//        imagen:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLS_dyuPvYG_zIdrn_n_lEsug56eR96vM9jrWF0_aIUmf2Q_mUsA"
//    },
//    {
//        nombre: "Axel Foley",
//        ataque:6,
//        defensa:6,
//        descripcion: "Te confundirá con su risa",
//        imagen: "https://cdn-images-1.medium.com/max/1200/0*jmhubmtbaSttteov.jpg"
//    },
//    {
//        nombre: "Carl Sagan",
//        ataque:8,
//        defensa:4,
//        descripcion: "Siete veces más listo que tu",
//        imagen: "https://lamenteesmaravillosa.com/wp-content/uploads/2018/01/carl-sagan.jpg"
//    },
//    {
//        nombre: "Isaac Asimov",
//        ataque:7,
//        defensa:4,
//        descripcion: "Puede predecir todos tus movimientos",
//        imagen: "https://www.ecestaticos.com/imagestatic/clipping/130/ed1/130ed1299bba2b1b3bb2a7c95b6b3470/asimov-el-buen-doctor-que-invento-la-robotica-mientras-cantaba-operetas.jpg?mtime=1459928305"
//    },
//    {
//        nombre: "Rick Deckard",
//        ataque:7,
//        defensa:7,
//        descripcion: "Es un robot y no lo sabe",
//        imagen: "https://vignette.wikia.nocookie.net/bladerunner/images/d/d4/Rick_Deckard.jpg/revision/latest?cb=20161120224503"
//    },
//    {
//        nombre: "Roy Batty",
//        ataque:7,
//        defensa:8,
//        descripcion: "Lo sabe y le da igual",
//        imagen: "https://i.pinimg.com/originals/d4/6e/ef/d46eefe5951c3c96f8abbe88f539ede6.jpg"
//    },
//    {
//        nombre: "Samuel L. Jackson",
//        ataque:9,
//        defensa:5,
//        descripcion: "Hijoputa peligroso",
//        imagen: "http://s3-eu-west-1.amazonaws.com/cinemania-cdn/wp-content/uploads/2015/12/09155850/pulpfiction_new-660x374.jpg"
//    },
//    {
//        nombre: "Morgan Freeman",
//        ataque:10,
//        defensa:10,
//        descripcion: "La Voz de Dios",
//        imagen: "http://culto.latercera.com/wp-content/uploads/2018/05/morgan-freeman-900x600-1.jpeg"
//    },
//    {
//        nombre: "Charles Bukowski",
//        ataque:4,
//        defensa:9,
//        descripcion: "Va tan borracho que ignora los ataques",
//        imagen: "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2018/08/16/charles_bukowski.jpg?itok=nk6bpqSW"
//    },
//    {
//        nombre: "Dr.Emett Brown",
//        ataque:4,
//        defensa:9,
//        descripcion: "Puede viajar en el tiempo para arreglar sus errores",
//        imagen: "https://media.metrolatam.com/2018/01/23/brown-1200x600.jpg"
//    },
//    {
//        nombre: "Heisenberg",
//        ataque:6,
//        defensa:8,
//        descripcion: "Está todo planeado",
//        imagen: "https://artist.com/photos/arts/big/heisenberg-26016742.jpg"
//    },
//    {
//        nombre: "Darth Vader",
//        ataque:9,
//        defensa:3,
//        descripcion: "Necesita nuevos ingenieros",
//        imagen: "https://hipertextual.com/files/2012/05/Darth_Vader-670x410.jpg"
//    },
//    {
//        nombre: "Tom Highway",
//        ataque:9,
//        defensa:9,
//        descripcion: "Come alambre de espinos y mea napalm",
//        imagen: "https://pbs.twimg.com/profile_images/2785839149/b104e55df9a80cbfb36979f612ed781d_400x400.jpeg"
//    },
//    {
//        nombre: "John Doe",
//        ataque:6,
//        defensa:6,
//        descripcion: "Capaz de tragar medio litro de sangre antes de vomitar",
//        imagen: "https://ednorton.files.wordpress.com/2009/02/20060818zc.jpg"
//    }]

////1 - Crear un array de objetos de cartas, que tendrán como mínimo propiedades nombre, daño, url_imagen y descripción.
////Hacer un mínimo de 15 cartas y que al cargar la página se muestre los nombre de todos en la consola.
//for (let i = 0; i < cartas.length; i++) {
//    console.log(cartas[i].nombre);
//}
//cartas.forEach(function (carta) {//TODO:preguntar por que hay que crear la funcion ahi para acceder a ella
//    console.log(carta.nombre);
//})

//2 - Mostrar en la página web las 3 primeras cartas en un listado, mostrando el nombre y el daño como título y subtítulo,
//    la descripción como un párrafo y una imagen(la especificada en image_url como src).
//for (let i = 0; i < 3; i++) {
//    document.getElementById("mostrarcartas").innerHTML += "<li><h1>" + cartas[i].nombre+"</h1><h2>Daño: "+cartas[i].ataque+"</h2><p>Descripción: "+cartas[i].descripcion+"</p><img src='"+cartas[i].imagen+"'></li>";
//}
//cartas.forEach(function (carta) {
//    document.getElementById("mostrarcartas").innerHTML += "<li><h1>" + carta.nombre + "</h1><h2>Daño: " + carta.ataque + "</h2><p>Descripción: " + carta.descripcion + "</p><img src='" + carta.imagen + "'></li>";
//})

//3 - En vez de mostrar las 3 primeras cartas del array, mostrar 3 aleatorias(cada vez que se recarga la página debería
//    mostrar 3 diferentes).
//function random() {
//    return Math.floor((Math.random() * 15) + 0);//En una funcion no vale porque cambia el numero cada vez que se usa, asi que nombre imagen y demas no corresponderian a la misma carta
//}
//let cartasUsadas=[];
//let random ;//math.floor quita los decimales a la baja(math.ceil lo haria hacia arriba y math.round redondea con formula matematica normal), el random hace de 0 a 1, luego lo multiplicas por 15
//for (let i = 0; i < 3; i++) {
//    do {
//        random = Math.floor((Math.random() * 15));
//    } while (cartasUsadas.indexOf(random) !== -1);//Si el infexOf no encuentra el valor devuelve -1
//    document.getElementById("mostrarcartas").innerHTML += "<li><h1>" + cartas[random].nombre + "</h1><h2>Daño: " + cartas[random].ataque + "</h2><p>Descripción: " + cartas[random].descripcion + "</p><img src='" + cartas[random].imagen + "'><input type='button' value='Jugar Carta' onclick='alert(\"Ha jugado la carta "+cartas[random].nombre+"\");'</li>";
//    cartasUsadas.push(random);
//}
//se podría hacer a cachitos para dejarlo mas claro  document.getElementById("mostrarcartas").innerHTML +="<li>"
// document.getElementById("mostrarcartas").innerHTML +="<h1>blablalba</h1>"...
//7 - Poner un botón al lado de cada una de las 3 cartas y que al pulsarlo muestra un alert(has jugado la carta + el nombre de la carta)
//hecho arriba

////Para ocultar lo que haya en variables y no se vea desde el navegador o haya problemas de tener variables con el mismo nomnbre meterlo dentro de una funcion
//function appCartas() {
//    let cartas = [
//        {
//            nombre: "Ignatius",
//            ataque: 7,
//            defensa: 4,
//            descripcion: "Ser desagradable. Sus ataques envenenan",
//            imagen: "https://www.ecestaticos.com/imagestatic/clipping/491/e81/491e810bc7d83a6dbe8d51a5948d55b4/la-buena-mierda-fascista-de-ignatius-farray-en-la-cama-con-la-bestia-parda-del-humor.jpg?mtime=1482515305"
//        },
//        {
//            nombre: "John Mclane",
//            ataque: 7,
//            defensa: 6,
//            descripcion: "Experto caminando sobre cristales. No molestar en navidad",
//            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLS_dyuPvYG_zIdrn_n_lEsug56eR96vM9jrWF0_aIUmf2Q_mUsA"
//        },
//        {
//            nombre: "Axel Foley",
//            ataque: 6,
//            defensa: 6,
//            descripcion: "Te confundirá con su risa",
//            imagen: "https://cdn-images-1.medium.com/max/1200/0*jmhubmtbaSttteov.jpg"
//        },
//        {
//            nombre: "Carl Sagan",
//            ataque: 8,
//            defensa: 4,
//            descripcion: "Siete veces más listo que tu",
//            imagen: "https://lamenteesmaravillosa.com/wp-content/uploads/2018/01/carl-sagan.jpg"
//        },
//        {
//            nombre: "Isaac Asimov",
//            ataque: 7,
//            defensa: 4,
//            descripcion: "Puede predecir todos tus movimientos",
//            imagen: "https://www.ecestaticos.com/imagestatic/clipping/130/ed1/130ed1299bba2b1b3bb2a7c95b6b3470/asimov-el-buen-doctor-que-invento-la-robotica-mientras-cantaba-operetas.jpg?mtime=1459928305"
//        },
//        {
//            nombre: "Rick Deckard",
//            ataque: 7,
//            defensa: 7,
//            descripcion: "Es un robot y no lo sabe",
//            imagen: "https://vignette.wikia.nocookie.net/bladerunner/images/d/d4/Rick_Deckard.jpg/revision/latest?cb=20161120224503"
//        },
//        {
//            nombre: "Roy Batty",
//            ataque: 7,
//            defensa: 8,
//            descripcion: "Lo sabe y le da igual",
//            imagen: "https://i.pinimg.com/originals/d4/6e/ef/d46eefe5951c3c96f8abbe88f539ede6.jpg"
//        },
//        {
//            nombre: "Samuel L. Jackson",
//            ataque: 9,
//            defensa: 5,
//            descripcion: "Hijoputa peligroso",
//            imagen: "http://s3-eu-west-1.amazonaws.com/cinemania-cdn/wp-content/uploads/2015/12/09155850/pulpfiction_new-660x374.jpg"
//        },
//        {
//            nombre: "Morgan Freeman",
//            ataque: 10,
//            defensa: 10,
//            descripcion: "La Voz de Dios",
//            imagen: "http://culto.latercera.com/wp-content/uploads/2018/05/morgan-freeman-900x600-1.jpeg"
//        },
//        {
//            nombre: "Charles Bukowski",
//            ataque: 4,
//            defensa: 9,
//            descripcion: "Va tan borracho que ignora los ataques",
//            imagen: "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2018/08/16/charles_bukowski.jpg?itok=nk6bpqSW"
//        },
//        {
//            nombre: "Dr.Emett Brown",
//            ataque: 4,
//            defensa: 9,
//            descripcion: "Puede viajar en el tiempo para arreglar sus errores",
//            imagen: "https://media.metrolatam.com/2018/01/23/brown-1200x600.jpg"
//        },
//        {
//            nombre: "Heisenberg",
//            ataque: 6,
//            defensa: 8,
//            descripcion: "Está todo planeado",
//            imagen: "https://artist.com/photos/arts/big/heisenberg-26016742.jpg"
//        },
//        {
//            nombre: "Darth Vader",
//            ataque: 9,
//            defensa: 3,
//            descripcion: "Necesita nuevos ingenieros",
//            imagen: "https://hipertextual.com/files/2012/05/Darth_Vader-670x410.jpg"
//        },
//        {
//            nombre: "Tom Highway",
//            ataque: 9,
//            defensa: 9,
//            descripcion: "Come alambre de espinos y mea napalm",
//            imagen: "https://pbs.twimg.com/profile_images/2785839149/b104e55df9a80cbfb36979f612ed781d_400x400.jpeg"
//        },
//        {
//            nombre: "John Doe",
//            ataque: 6,
//            defensa: 6,
//            descripcion: "Capaz de tragar medio litro de sangre antes de vomitar",
//            imagen: "https://ednorton.files.wordpress.com/2009/02/20060818zc.jpg"
//        }]
//    let cartasUsadas = [];
//    let random;
//    for (let i = 0; i < 3; i++) {
//        do {
//            random = Math.floor((Math.random() * 15));
//        } while (cartasUsadas.indexOf(random) !== -1);
//        document.getElementById("mostrarcartas").innerHTML += "<li><h1>" + cartas[random].nombre + "</h1><h2>Daño: " + cartas[random].ataque + "</h2><p>Descripción: " + cartas[random].descripcion + "</p><img src='" + cartas[random].imagen + "'><input type='button' value='Jugar Carta' onclick='alert(\"Ha jugado la carta " + cartas[random].nombre + "\");'</li>";
//        cartasUsadas.push(random);
//    }
//}
//appCartas();

//se puede crear la funcion y autoejecutarlametiendola dentro de un parentesis al crear, al no darle nombre se evitan errores al mezclar nombres de variables
(function() {
    let cartas = [
        {
            nombre: "Ignatius",
            ataque: 7,
            defensa: 4,
            descripcion: "Ser desagradable. Sus ataques envenenan",
            imagen: "https://www.ecestaticos.com/imagestatic/clipping/491/e81/491e810bc7d83a6dbe8d51a5948d55b4/la-buena-mierda-fascista-de-ignatius-farray-en-la-cama-con-la-bestia-parda-del-humor.jpg?mtime=1482515305"
        },
        {
            nombre: "John Mclane",
            ataque: 7,
            defensa: 6,
            descripcion: "Experto caminando sobre cristales. No molestar en navidad",
            imagen: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLS_dyuPvYG_zIdrn_n_lEsug56eR96vM9jrWF0_aIUmf2Q_mUsA"
        },
        {
            nombre: "Axel Foley",
            ataque: 6,
            defensa: 6,
            descripcion: "Te confundirá con su risa",
            imagen: "https://cdn-images-1.medium.com/max/1200/0*jmhubmtbaSttteov.jpg"
        },
        {
            nombre: "Carl Sagan",
            ataque: 8,
            defensa: 4,
            descripcion: "Siete veces más listo que tu",
            imagen: "https://lamenteesmaravillosa.com/wp-content/uploads/2018/01/carl-sagan.jpg"
        },
        {
            nombre: "Isaac Asimov",
            ataque: 7,
            defensa: 4,
            descripcion: "Puede predecir todos tus movimientos",
            imagen: "https://www.ecestaticos.com/imagestatic/clipping/130/ed1/130ed1299bba2b1b3bb2a7c95b6b3470/asimov-el-buen-doctor-que-invento-la-robotica-mientras-cantaba-operetas.jpg?mtime=1459928305"
        },
        {
            nombre: "Rick Deckard",
            ataque: 7,
            defensa: 7,
            descripcion: "Es un robot y no lo sabe",
            imagen: "https://vignette.wikia.nocookie.net/bladerunner/images/d/d4/Rick_Deckard.jpg/revision/latest?cb=20161120224503"
        },
        {
            nombre: "Roy Batty",
            ataque: 7,
            defensa: 8,
            descripcion: "Lo sabe y le da igual",
            imagen: "https://i.pinimg.com/originals/d4/6e/ef/d46eefe5951c3c96f8abbe88f539ede6.jpg"
        },
        {
            nombre: "Samuel L. Jackson",
            ataque: 9,
            defensa: 5,
            descripcion: "Hijoputa peligroso",
            imagen: "http://s3-eu-west-1.amazonaws.com/cinemania-cdn/wp-content/uploads/2015/12/09155850/pulpfiction_new-660x374.jpg"
        },
        {
            nombre: "Morgan Freeman",
            ataque: 10,
            defensa: 10,
            descripcion: "La Voz de Dios",
            imagen: "http://culto.latercera.com/wp-content/uploads/2018/05/morgan-freeman-900x600-1.jpeg"
        },
        {
            nombre: "Charles Bukowski",
            ataque: 4,
            defensa: 9,
            descripcion: "Va tan borracho que ignora los ataques",
            imagen: "https://www.eluniversal.com.mx/sites/default/files/styles/f03-651x400/public/2018/08/16/charles_bukowski.jpg?itok=nk6bpqSW"
        },
        {
            nombre: "Dr.Emett Brown",
            ataque: 4,
            defensa: 9,
            descripcion: "Puede viajar en el tiempo para arreglar sus errores",
            imagen: "https://media.metrolatam.com/2018/01/23/brown-1200x600.jpg"
        },
        {
            nombre: "Heisenberg",
            ataque: 6,
            defensa: 8,
            descripcion: "Está todo planeado",
            imagen: "https://artist.com/photos/arts/big/heisenberg-26016742.jpg"
        },
        {
            nombre: "Darth Vader",
            ataque: 9,
            defensa: 3,
            descripcion: "Necesita nuevos ingenieros",
            imagen: "https://hipertextual.com/files/2012/05/Darth_Vader-670x410.jpg"
        },
        {
            nombre: "Tom Highway",
            ataque: 9,
            defensa: 9,
            descripcion: "Come alambre de espinos y mea napalm",
            imagen: "https://pbs.twimg.com/profile_images/2785839149/b104e55df9a80cbfb36979f612ed781d_400x400.jpeg"
        },
        {
            nombre: "John Doe",
            ataque: 6,
            defensa: 6,
            descripcion: "Capaz de tragar medio litro de sangre antes de vomitar",
            imagen: "https://ednorton.files.wordpress.com/2009/02/20060818zc.jpg"
        }]
    let cartasUsadas = [];
    let random;
    for (let i = 0; i < 3; i++) {
        do {
            random = Math.floor((Math.random() * 15));
        } while (cartasUsadas.indexOf(random) !== -1);
        document.getElementById("mostrarcartas").innerHTML += "<li><h1>" + cartas[random].nombre + "</h1><h2>Daño: " + cartas[random].ataque + "</h2><p>Descripción: " + cartas[random].descripcion + "</p><img src='" + cartas[random].imagen + "'><input type='button' value='Jugar Carta' onclick='alert(\"Ha jugado la carta " + cartas[random].nombre + "\");'</li>";
        cartasUsadas.push(random);
    }//TODO: Autoexe primo FLIPA FLIPA
}())//los dos parentesis finales es llamar a ejecutar la funcion y todo debe estar dentro de parentesis porque si no terminaria de definir la funcion y no la ejectuaria. Al tener los parentesis espera a leer todo lo que hay dentro antes de pasar a otra cosa
