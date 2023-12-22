// ARRAYS
const compraPropiedades = [
  { name: "Casa de campo", rooms: 2 },
  { name: "Casa de playa", rooms: 2 },
  { name: "Casa en el centro", rooms: 1 },
  { name: "Casa rodante", rooms: 1 },
  { name: "Departamento", rooms: 3 },
  { name: "Mansión", rooms: 5 }
];

const arriendoPropiedades = [
  { name: "Departamento 712", rooms: 2 },
  { name: "Departamento 512", rooms: 2 },
  { name: "Departamento 701", rooms: 1 },
  { name: "Departamento 803", rooms: 1 },
  { name: "Departamento 11", rooms: 1 },
  { name: "Departamento 604", rooms: 1 }
];

// FUNCIÓN COMPRAR PROPIEDAD

const comprarPropiedad = () => {

  if (compraPropiedades.length === 0) {
    alert("No hay propiedades disponibles para arrendar.");
    bienvenida();
    return;
  }

  let mensajePropiedades = "Propiedades disponibles:\n";

  for (let compraPropiedad of compraPropiedades) {
    mensajePropiedades += `• ${compraPropiedad.name}\n`;
  }

  let numeroHabitaciones = prompt(mensajePropiedades + "\nIngresa el número de habitaciones que deseas:");

  if (numeroHabitaciones === null) {
    console.log("El usuario ha cancelado la operación compra.");
    bienvenida();
    return;
  }

  numeroHabitaciones = parseInt(numeroHabitaciones);

  let propiedadesDisponibles = [];

  for (let i = 0; i < compraPropiedades.length; i++) {
    if (compraPropiedades[i].rooms === numeroHabitaciones) {
      propiedadesDisponibles.push(compraPropiedades[i]);
    }
  }

  if (propiedadesDisponibles.length === 0) {
    alert("No hay propiedades con el número de habitaciones especificado.");
    comprarPropiedad();
    return;
  }

  let seleccion;

  do {
    let mensaje = "Propiedades encontradas:\n";

    for (let i = 0; i < propiedadesDisponibles.length; i++) {
      mensaje += `${i + 1}. ${propiedadesDisponibles[i].name}\n`;
    }

    seleccion = prompt(mensaje + "Selecciona el número de la propiedad que deseas comprar:");

    if (seleccion === null) {
      console.warn("Usuario no seleccionó la propiedad");
      comprarPropiedad();
      return;
    }

    seleccion = parseInt(seleccion);

    if (!isNaN(seleccion) && seleccion > 0 && seleccion <= propiedadesDisponibles.length) {
      let propiedadSeleccionada = propiedadesDisponibles[seleccion - 1];

      // Confirmación
      const confirmacion = confirm(`¿Deseas confirmar la compra de la propiedad?\nNombre: ${propiedadSeleccionada.name}, Habitaciones: ${propiedadSeleccionada.rooms}`);
      
      if (confirmacion) {
        alert(`¡Felicidades!. Compraste : ${propiedadSeleccionada.name}, ¡Te deseamos suerte y éxito en este nuevo proyecto!`);

        const eliminarPropiedad = compraPropiedades.indexOf(propiedadSeleccionada);
        if (eliminarPropiedad !== -1) {
          compraPropiedades.splice(eliminarPropiedad, 1);
        }
        bienvenida();
        return;
      } else {
        alert("Operación cancelada. La propiedad no fue comprada.");
        bienvenida();
        return;
      }
    } else {
      alert("Selección inválida. Inténtalo nuevamente.");
    }
  } while (true);
};



// FUNCIÓN ARRENDAR PROPIEDAD

const arrendarPropiedad = () => {

  if (arriendoPropiedades.length === 0) {
    alert("No hay propiedades disponibles para arrendar.");
    bienvenida();
    return;
  }

  let mensajePropiedades = "Propiedades disponibles:\n";

  for (let arriendoPropiedad of arriendoPropiedades) {
    mensajePropiedades += `• ${arriendoPropiedad.name}\n`;
  }

  let numeroHabitaciones = prompt(mensajePropiedades + "\nIngresa el número de habitaciones que deseas arrendar:");

  if (numeroHabitaciones === null) {
    console.log("El usuario ha cancelado la operación arriendo.");
    bienvenida();
    return;
  }

  numeroHabitaciones = parseInt(numeroHabitaciones);

  let propiedadesDisponibles = [];

  for (let i = 0; i < arriendoPropiedades.length; i++) {
    if (arriendoPropiedades[i].rooms === numeroHabitaciones) {
      propiedadesDisponibles.push(arriendoPropiedades[i]);
    }
  }

  if (propiedadesDisponibles.length === 0) {
    alert("No hay propiedades con el número de habitaciones especificado.");
    arrendarPropiedad();
    return;
  }

  let seleccion;

  do {
    let mensaje = "Propiedades encontradas:\n";

    for (let i = 0; i < propiedadesDisponibles.length; i++) {
      mensaje += `${i + 1}. ${propiedadesDisponibles[i].name}\n`;
    }

    seleccion = prompt(mensaje + "Selecciona el número de la propiedad que deseas arrendar:");

    if (seleccion === null) {
      console.warn("Usuario no seleccionó la propiedad");
      arrendarPropiedad();
      return;
    }

    seleccion = parseInt(seleccion);

    if (!isNaN(seleccion) && seleccion > 0 && seleccion <= propiedadesDisponibles.length) {
      let propiedadSeleccionada = propiedadesDisponibles[seleccion - 1];

      // Confirmación
      const confirmacion = confirm(`¿Deseas confirmar el arriendo de la propiedad?\nNombre: ${propiedadSeleccionada.name}, Habitaciones: ${propiedadSeleccionada.rooms}`);
      
      if (confirmacion) {
        alert(`¡Felicidades!. Arrendaste : ${propiedadSeleccionada.name}, el propietario pronto se pondrá en contacto.`);

        const eliminarPropiedad = arriendoPropiedades.indexOf(propiedadSeleccionada);
        if (eliminarPropiedad !== -1) {
          arriendoPropiedades.splice(eliminarPropiedad, 1);
        }
        bienvenida();
        return;
      } else {
        alert("Operación cancelada. La propiedad no fue arrendada.");
        bienvenida();
        return;
      }
    } else {
      alert("Selección inválida. Inténtalo nuevamente.");
    }
  } while (true);
};


// FUNCIÓN VENDER PROPIEDAD
const publicarPropiedad = () => {
  let opcionVenta = prompt("Ingresa el número de la opción que quieras realizar:\n1 - Vender tu propiedad\n2 - Arrendar tu propiedad");

  if (opcionVenta === null) {
    console.log("El usuario ha cancelado la operación de Publicación");
    bienvenida();
    return;
  }

  opcionVenta = parseInt(opcionVenta);

  if (![1, 2].includes(opcionVenta)) {
    alert("Opción inválida. Inténtalo nuevamente.");
    publicarPropiedad();
    return;
  }

  let nombrePropiedad;

  do {
    nombrePropiedad = prompt("Ingresa el nombre de la propiedad:");
    if (nombrePropiedad === null) {
      console.log("El usuario ha cancelado la operación de Publicación");
      bienvenida();
      return;
    }
    nombrePropiedad = nombrePropiedad.trim(); // Elimina espacios en blanco al principio y al final

    if (nombrePropiedad === '') {
      alert("Debes ingresar un nombre para la propiedad.");
    }
    
  } while (nombrePropiedad === ''); // Continúa pidiendo el nombre hasta que no sea vacío

  let numeroHabitaciones = prompt("Ingresa el número de habitaciones de la propiedad:");
  numeroHabitaciones = parseInt(numeroHabitaciones);

  if (isNaN(numeroHabitaciones)) {
    alert("Número de habitaciones inválido. Inténtalo nuevamente.");
    publicarPropiedad();
    return;
  }

  const nuevaPropiedad = { name: nombrePropiedad, rooms: numeroHabitaciones };

  // Confirmación
  const confirmacion = confirm(`¿Deseas confirmar la publicación de la propiedad?\nNombre: ${nombrePropiedad}, Habitaciones: ${numeroHabitaciones}`);
  
  if (confirmacion) {
    if (opcionVenta === 1) {
      compraPropiedades.push(nuevaPropiedad);
      alert(`¡Propiedad agregada para compra! Nombre: ${nombrePropiedad}, Habitaciones: ${numeroHabitaciones}`);
    } else {
      arriendoPropiedades.push(nuevaPropiedad);
      alert(`¡Propiedad agregada para arriendo! Nombre: ${nombrePropiedad}, Habitaciones: ${numeroHabitaciones}`);
    }
  } else {
    alert("Operación cancelada. La propiedad no fue publicada.");
  }
  bienvenida();
};


// INICIO DE LA APLICACIÓN

const bienvenida = () => {
  let opcion = prompt(`Bienvenido a Portal Inmobiliario. \n Selecciona la opción de lo que deseas hacer: \n 1 - Comprar \n 2 - Arrendar \n 3 - Publica tu propiedad`);

  if (opcion === null) {
    console.log("El usuario ha cancelado la aplicación. La página dejará de cargarse.");
    return;
  }
  switch (opcion) {
    case "1":
      comprarPropiedad();
      break;
    case "2":
      arrendarPropiedad();
      break;
    case "3":
      publicarPropiedad();
      break;
    default:
      alert("Ingreso un valor inválido");
      bienvenida();
  }
};

// APLICACIÓN INICIADA

bienvenida();


