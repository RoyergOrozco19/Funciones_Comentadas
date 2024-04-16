
const rooms = [100, 101, 102, 103, 201, 202, 203, 301, 302, 303];
const roomStatus = Array(10).fill(false);
const roomReservations = {};


//Esta función reserva una habitación (si no está ocpuada) y guarda el nombre del cliente que la reservó. Si está ocupada la función muestra un alert diciendo que la habitación ya está ocupada.
const reserveRoom = (roomNumber, name) => {
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === false) {
    roomStatus[index] = true;
    roomReservations[roomNumber] = name;
    alert(`La habitación ${roomNumber} ha sido reservada por ${name}.`);
  } else {
    alert(`La habitación ${roomNumber} ya está reservada.`);
  }
};  
//La función freeRoom libera una habitación (si está ocupada), de modo que el cliente que la reservó ya no la ocupa. Si la habitación ya está libre, la función muestra un alert diciendo que la habitación ya está libre.
const freeRoom = (roomNumber) => {
  const index = rooms.indexOf(roomNumber);
  if (index !== -1 && roomStatus[index] === true) {
    roomStatus[index] = false;
    delete roomReservations[roomNumber];
    alert(`La habitación ${roomNumber} ha sido liberada.`);
  } else {
    alert(`La habitación ${roomNumber} ya está libre.`);
  }
};

//Esta nos permite mostrar que habitaciones hay disponibles en el hotel (si hay alguna). Si no hay ninguna, la función muestra un alert diciendo que no hay habitaciones disponibles.
const showAvailableRooms = () => {
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });

  if (availableRooms.length > 0) {
    alert(`Las habitaciones disponibles son: ${availableRooms.join(', ')}`);
  } else {
    alert('No hay habitaciones disponibles.');
  }
};

//Esta función nos muestra el númerode habitaciones reservadas y el número de habitaciones disponibles.
const showOccupancy = () => {
  const availableRooms = rooms.filter((room, index) => {
    return roomStatus[index] === false;
  });
  const reservedRooms = rooms.filter((room, index) => {
    return roomStatus[index] === true;
  });
  alert(`Hay ${availableRooms.length} habitaciones disponibles y ${reservedRooms.length} habitaciones reservadas.`);
};

//Esta funcion permite que el usuario interactúe con el menú y de estre modo, según la opción que elija el usuario, se ejecutará una función u otra.
const handleUserInput = () => {
  let userInput;
  do {
  
    userInput = prompt('Menú \n' + '1. Reservar una habitación '+ 
    ' 2. Liberar una habitación'+
    ' 3. Consultar ocupación' +
  ' 4. Salir');

    switch (userInput) {
      case '1':
        const roomNumber = parseInt(prompt('Ingrese el número de la habitación:\n[100, 101, 102, 103, 201, 202, 203, 301, 302, 303]:'));
        if (!isNaN(roomNumber) && rooms.includes(roomNumber)) {
          const name = prompt('Ingrese su nombre:');
          reserveRoom(roomNumber, name);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '2':
        const roomNumberToFree = parseInt(prompt('Ingrese el número de la habitación que desea liberar:'));
        if (!isNaN(roomNumberToFree) && rooms.includes(roomNumberToFree)) {
          freeRoom(roomNumberToFree);
        } else {
          alert('Número de habitación inválido. Intente de nuevo.');
        }
        break;
      case '3':
        showOccupancy();
        break;
      case '4':
        alert('Saliendo...');
        break;
      default:
        alert('Opción inválida. Intente de nuevo.');
        break;
    }
  } while (userInput !== '4');
};

handleUserInput();