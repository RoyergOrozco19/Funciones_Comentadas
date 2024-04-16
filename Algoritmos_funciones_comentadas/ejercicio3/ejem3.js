
const sala1 = Array(10).fill(false);
const sala2 = Array(10).fill(false);
const ticket = 7000;
let sala1balance = 0;
let sala2balance = 0;


//Esta función nos muestra la disponibilidad de los asientos en las salas 1 y 2 del cine, por medio del map se crean un array con los asientos ocupados dependiendo de la sala seleccionada y los que estan disponibles.;/
function verDisponibilidad() {
  alert("Sala 1:");
  alert(sala1.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
  alert("Sala 2:");
  alert(sala2.map((asiento, i) => asiento ? `[X] Asiento ${i + 1}` : `[ ] Asiento ${i + 1}`).join("\n"));
}
//La funcion reservarAsiento nos permite reservar el asiento al ingresar la sala 1 o 2, de manera que si reservamos el asiento este permanecerá ocupado o reservado hasta que lo liberemos;/
function reservarAsiento() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asiento = parseInt(prompt("Ingresa el número del asiento (1 a 10)")) - 1;

  if (sala === "1" && !sala1[asiento]) {
    sala1[asiento] = true;
    sala1balance+=ticket;
    alert(`Asiento ${asiento + 1} de la sala 1 reservado.`);
  } else if (sala === "2" && !sala2[asiento]) {
    sala2[asiento] = true;
    sala2balance+=ticket;
    alert(`Asiento ${asiento + 1} de la sala 2 reservado.`);
  } else {
    alert("El asiento ya está reservado o la sala no es válida.");
  }
}

//Hay dos funciones una normal y otra en flecha. La función ver pelicula muestra cuantos asientos hay disponibles en una de las salas. La función flecha me permite filtrar de acuerdo a la cantidad de asientos libres.
function verPelicula() {
  const sala = prompt("Ingresa el número de la sala (1 o 2)");
  const asientosLibres = sala === "1" ? sala1.filter(asiento => !asiento) : sala2.filter(asiento => !asiento);

  if (asientosLibres.length > 0) {
    alert(`Hay ${asientosLibres.length} asientos libres en la sala ${sala}.`);
    alert("Disfrutad de la película!");
  } else {
    alert(`Lo siento, todos los asientos de la sala ${sala} están reservados.`);
  }
}

//La función balance nos permite revisar el balance de saldo que hay en cada sala del cine, de modo que si el usuario quiere saber el balance de la sala 1, se le mostrará el balance de la sala 1 y así sucesivamente, también se le mostrará el balance de todas las salas.
function balance(){
  const totalBalance1= sala1balance;
  const totalBalance2= sala2balance;
  const totalBalances= sala1balance + sala2balance;
  alert(`Balance de la sala 1 → + $${totalBalance1}`);
  alert(`Balance de la sala 2 → + $${totalBalance2}`);
  alert(`Balance de todas las salas → + $${totalBalances}`);



}

while (true) {
  const opcion = parseInt(prompt("Ingresa tu opción:Bienvenido a la sala de cine \nSelecciona una opción:\n1. Ver disponibilidad de asientos \n2. Reservar asiento \n3. Ver ocupación sala \n4. Balance \n5. Salir" ));

  switch (opcion) {
    case 1:
      verDisponibilidad();
      break;
    case 2:
      reservarAsiento();
      break;
    case 3:
      verPelicula();
      break;
    case 4:
      balance();
        break;
    case 5:
      alert("¡Hasta Luego!")
        break;
    default:
      alert("Opción no válida. Intenta de nuevo.");
  }
}