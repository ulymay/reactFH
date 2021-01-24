const persona = {
  nombre: "Tony",
  apellido: "Stark",
  edad: 45,
  direccion: {
    ciudad: "New York",
    zip: 55215,
    lat: 14.3223,
    lng: 34.9235
  }
};

//console.table({ persona });
console.log({ persona });

const persona2 = { ...persona };
persona2.nombre = "peter";

console.log(persona2);
