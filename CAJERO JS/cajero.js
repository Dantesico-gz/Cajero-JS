var cuentas = [
    { nombre: "Mali", saldo: 200, password: "1234" },
    { nombre: "Gera", saldo: 290, password: "5678" },
    { nombre: "Maui", saldo: 67, password: "9012" }
  ];


  function ingresarMonto(cuenta, monto) {
    if (cuenta.saldo + monto > 990) {
      return "No puedes tener más de $990 en tu cuenta.";
    } else {
      cuenta.saldo += monto;
      return "Has ingresado $" + monto + ". Tu nuevo saldo es $" + cuenta.saldo + ".";
    }
  }
  
  function retirarMonto(cuenta, monto) {
    if (cuenta.saldo - monto < 10) {
      return "No puedes tener menos de $10 en tu cuenta.";
    } else {
      cuenta.saldo -= monto;
      return "Has retirado $" + monto + ". Tu nuevo saldo es $" + cuenta.saldo + ".";
    }
  }
  
  function consultarSaldo(cuenta) {
    return "Tu saldo actual es $" + cuenta.saldo + ".";
  }
  
  function seleccionarCuenta(nombre, password) {
    for (var i = 0; i < cuentas.length; i++) {
      if (cuentas[i].nombre === nombre) {
        if (cuentas[i].password === password) {
          return cuentas[i];
        } else {
          return "Contraseña incorrecta.";
        }
      }
    }
    return "Cuenta no encontrada.";
  }
  


