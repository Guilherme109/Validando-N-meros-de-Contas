// O gets() receberá um número de conta como entrada:
const numeroConta = gets();

// Verifica se o número de conta consiste em exatamente 6 dígitos usando uma expressão regular:
if (/^\d{6}$/.test(numeroConta)) {
  const numArray = numeroConta.split('').map(Number);

  // Calcula a soma dos dígitos no número de conta
  const sum = numArray.reduce((a, b) => a + b, 0);

  // Verifica se o primeiro dígito é maior que zero e a soma dos dígitos é menor ou igual a 30
  if (numArray[0] > 0 && sum <= 30) {
    // Se a condição acima for verdadeira, imprima a mensagem esperada:
    print('Numero de conta valido.');
  } else {
    // Verifique se o numArray[0] referente ao primeiro dígito é igual a zero :
    if (numArray[0] === 0) {
      // Se o primeiro dígito for igual a zero, imprima a mensagem esperada:
      print('Numero de conta invalido: O primeiro digito deve ser maior que zero.');
    } else {
      print('Numero de conta invalido: A soma dos digitos e maior que 30.');
    }
  }
} else {
  // Se o número de conta não tiver exatamente 6 dígitos, imprima a mensagem esperada:
  print('Numero de conta invalido: Deve conter exatamente 6 digitos.');
}