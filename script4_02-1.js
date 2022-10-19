let a, b, c;
a = prompt("Digite um número");
a = parseInt(a);//transforma em inteiro
b = parseInt(prompt("Digite outro número"));
document.write (`soma: ${(a + b)} <br>`);//template string
document.write ("subtração: "+ (a - b) + "<br>");
document.write (`A multiplicação de ${a} por ${b} é ${a*b}<br>`);
document.write (`A divisão de ${a} por ${b} é ${a/b} <br>`)
document.write (`O resto da divisão de ${a} por ${b} é ${a%b} <br>`)
document.write (`A potencia de ${a} por ${b} é ${a**b} <br>`)