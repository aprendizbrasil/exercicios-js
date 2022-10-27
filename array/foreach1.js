prt = (p1='',p2='',p3='',p4='',p5='',p6='',p7='',p8='') => console.log(p1,p2,p3,p4,p5,p6,p7,p8)

const aprov = ['ana', 'bia', 'che', 'den', 'elo', 'foe']
prt (aprov)

aprov.forEach(function(nome, i) {
    prt(`${i + 1}) ${nome}`)
    }
    )

aprov.forEach((nome, i) => prt(i+1,')',nome) )

aprov.forEach((nome, i) => prt(`${i+1}) ${nome}`))

const exibirAprov = aprovado => console.log(aprov)

aprov.forEach(exibirAprov)