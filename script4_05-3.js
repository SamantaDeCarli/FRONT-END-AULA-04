let i,j,x;
i=100;
j=100;
i++;//101
i++;//102
i++;//103
i++;//104
j--;//99
j--;//98
j--;//97
x=i+j;// variavel que recebe qualquer alteração de valor é do lado esquerdo
i+=j;//
document.write(`i=${i} j=${j} x=${x}`);//i=104 j=97