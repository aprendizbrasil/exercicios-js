prt = (p1='',p2='',p3='',p4='',p5='',p6='',p7='',p8='') => console.log(p1,p2,p3,p4,p5,p6,p7,p8)

const nums = [1,2,3,4,5]

// For com propósito
let res = nums.map(function(e) {
    return e*20
}
)
prt(res)

// Outro exemplo
const soma10 = e => e + 10
const triplo = e => e * 3
const toDinh = e => `R$ ${parseFloat(e).toFixed(2).replace('.',',')}`

res = nums.map(soma10).map(triplo).map(toDinh)
prt(res)

