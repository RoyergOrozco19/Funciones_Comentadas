const denominations = [50000,20000,10000,5000, 2000, 1000];
//Esta función permite al usuario ingresar una cantidad(monto de dinero). la función retorna el número ingresado por el usuario.;/

function getWithdrawalAmount() {
  const userInput = prompt("¿Cuánto dinero deseas retirar  ?");
  return parseFloat(userInput);
}
// La función calculateBilletsNeeded calcula la cantidad de billetes necesarios para retirar el monto solicitado por el usuario.;/
function calculateBilletsNeeded(amount) {
  return denominations.map(denomination => {
    const billetsNeeded = Math.floor(amount / denomination);
    amount -= billetsNeeded * denomination;
    return billetsNeeded;
  });
}
// La función isValidWithdrawaAmount permite verificar si el monto solicitado por el usuario es válido, es decir si el monto es un número entero positivo.;/
function isValidWithdrawalAmount(amount) {
  return amount > 0 && amount % 1 === 0;
}
//Esta función se encarga de realizar la transacción de retiro de dinero en el cajero automático.;/
function ATMTransaction() {
  const withdrawalAmount = getWithdrawalAmount();

  if (!isValidWithdrawalAmount(withdrawalAmount)) {
    alert("El monto solicitado no es válido.");
    return;
  }

  const billetsNeeded = calculateBilletsNeeded(withdrawalAmount);

  alert("Para retirar $" + withdrawalAmount + ", necesitas:");
  denominations.forEach((denomination, index) => {
    if (billetsNeeded[index] > 0) {
      alert("- " + billetsNeeded[index] + " billetes de $" + denomination);
    }
  });
}


ATMTransaction();