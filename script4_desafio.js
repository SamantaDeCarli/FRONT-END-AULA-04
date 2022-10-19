let av1, av2, Media, Resultado;
av1 = prompt(parseFloat("Digite Nota Av1"));
av2 = prompt(parseFloat("Digite Nota Av2"));
Media = (av1+av2)/2;
Resultado = (Media>=6) ? "Aprovado" : "Reprovado";
document.write(`Resultado = ${Resultado}<br>`);