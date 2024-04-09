//quanod a contagem for par, mostra "tic"
//quando a contagem for impar, mosta a mensagem "tac"
//quando a contagem chegar em zero, mostra a mensagem "boom"

let contagem = 10

while(contagem >= 0){
    if(contagem % 2 === 0){
    console.log(`tic`)
} else {
    console.log(`tac`)
}contagem --
}
console.log('BOOOM')