class Serie {
    constructor(nombre, generos, transmision, orden) {
        this.nombre = nombre;
        this.generos = generos;
        this.transmision = transmision;
        this.orden = orden;
    }
}

function buscaNombre(nombre) {
    let valueNombre = nombre.value;
    const serie = animes.find(obj => obj.nombre == valueNombre);

    if (serie !== undefined) {   
        return crearSerie(serie);
    }

    return `<p> No se encontro Serie con el nombre: ${valueNombre}</p>`;
}

function filtrarSerie(metodoBusqueda,dato) {
    let valueFiltrar = dato.value;
    let serie;
    let acumulador = "";

    if (metodoBusqueda == 1) {
        serie = animes.filter(obj => obj.generos.includes(valueFiltrar));
    } else {
        serie = animes.filter(obj => obj.transmision == valueFiltrar);
    }

    if (serie.length > 0) {
        for (let i = 0; i < serie.length; i++) {
            acumulador += crearSerie(serie[i]);
        }
        
        return acumulador;
    }
    
    return `<p> No se encontro Serie con el Filtro: ${valueFiltrar}</p>`;
}

function crearSerie(serie) {
    return `<div class="anime1">
                <a class="linkAnime" href="#">
                    <div class="animeContenedor">
                        <div class="imagenAnime"></div>
                    </div>
                </a>
                <h3 class="tituloAnime1">${serie.nombre}</h3>
            </div>`
}

let animes = [];

animes.push(new Serie("Naruto", ["Accion", "Aventura", "Fantasia"], "Tv", 0));
animes.push(new Serie("Dragon Ball Super", ["Accion", "Aventura", "Fantasia"], "Tv", 1));
animes.push(new Serie("Shrek 2", ["Accion", "Comedia"], "Pelicula", 2));
animes.push(new Serie("Boku no ....", ["Romance", "Misterio"], "Pelicula", 3));
animes.push(new Serie("Hellsing Ultimate", ["Accion"], "Ova", 4));
animes.push(new Serie("Soul Eater", ["Accion", "Aventura", "Fantasia"], "Tv", 5));
animes.push(new Serie("Nichijou", ["Comedia"], "Tv", 6));
animes.push(new Serie("Gintama", ["Comedia", "Fantasia"], "Tv", 7));
animes.push(new Serie("Evangelion", ["Accion", "Drama"], "Tv", 8));
animes.push(new Serie("Kino Journey", ["Aventura", "Fantasia"], "Tv", 9));

let datoNombre = document.querySelector("#busqueda");
let datoGenero = document.querySelector("#Genero");
let datoTransmision = document.querySelector("#Tipo");

let contenedorSerie = document.querySelector(".contenedorSeries");

/* Por si quiere usar los buscadores, aqui estan.
contenedorSerie.innerHTML = buscaNombre(datoNombre);
contenedorSerie.innerHTML = filtrarSerie(1,datoGenero);
contenedorSerie.innerHTML = filtrarSerie(2,datoTransmision); */

let acumulador = "";

for (let i = 0; i < animes.length; i++) {
    acumulador += crearSerie(animes[i]);
}

contenedorSerie.innerHTML = acumulador;

let imagenSerie = document.querySelectorAll(".imagenAnime");

for (let i = 0; i < imagenSerie.length; i++) {
    imagenSerie[i].className += ` imagenAnime${i+1}`; 
}
