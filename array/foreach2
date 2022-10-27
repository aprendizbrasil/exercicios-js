prt = (p1='',p2='',p3='',p4='',p5='',p6='',p7='',p8='') => console.log(p1,p2,p3,p4,p5,p6,p7,p8)

// Cria nosso próprio forEach
Array.prototype.forEach2 = function(callback) {
    for (let i=0; i<this.length; i++) {
        callback(this[i],i,this)
    }
}


const aprov = ['ana', 'bia', 'che', 'den', 'elo', 'foe']
prt (aprov)

aprov.forEach2(function(nome,i){
    prt(`${i + 1}) ${nome}`)
    }
)