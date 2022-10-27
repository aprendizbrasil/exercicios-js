prt = (p1='',p2='',p3='',p4='',p5='',p6='',p7='',p8='') => console.log(p1,p2,p3,p4,p5,p6,p7,p8)

Array.prototype.map2 = function(callback) {
    const newArray = []
    for (let i=0; i<this.length; i++) {
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

const carrinho = [
    '{"nome": "Borracha", "Preco": 3.45}',
    '{"nome": "Caderno", "Preco": 6.90}',
    '{"nome": "Lapis", "Preco": 1.05}',
    '{"nome": "Caneta", "Preco": 2.45}'
]

const paraObjeto = json => JSON.parse(json) // De Array de str para Array de Obj
const soPreco = produto => produto.Preco

const res = carrinho.map2(paraObjeto).map2(soPreco)
prt(res) 