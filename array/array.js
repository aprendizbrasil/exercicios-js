const prt = (p1,p2='',p3='',p4='',p5='',p6='',p7='',p8='') => console.log(p1,p2,p3,p4,p5,p6,p7,p8)

lista = ['a','b','c','d','e','f','g']
prt(lista)

lista.pop()  // Remove último elemento
prt(lista)

lista.push('7') // Adiciona ao final
prt(lista)

lista.shift()     // Remove primeiro elemento
prt(lista)

lista.unshift('1')  // Adiciona ao inicio
prt(lista)

// SPLICE 
lista = ['a','b','c','d','e','f','g']
lista.splice(2,0,'X','Y')  // Add 'X','Y' na posição 2, sem remover ninguém
prt(lista)

lista = ['a','b','c','d','e','f','g']
lista.splice(3,2,'X','Y')  // Add 'X','Y' na posição 3, removendo 1 item
prt(lista)

lista = ['a','b','c','d','e','f','g']
lista.splice(4,2)  // Remove 2 itens, a partir da posição 4
prt(lista)


// SLICE
lista = ['a','b','c','d','e','f','g']
const pedaco1 = lista.splice(1,4)  // Escolhe 4 itens, a partir da posição 1
prt(pedaco1)







