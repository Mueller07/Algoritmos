const personagens = ["bob esponja", "patrick", "dory", "nemo", "ben10", "vegeta", "goku","naruto","NAIN", "florzinha","docinho", "lindinha", "Denis", "Mavis","Drácula", "jonhatan"]

function retornarPersonagemAleatorio(personagens) {
    let indiceAleatorio = Math.floor(Math.random() * personagens.length);
    return personagens[indiceAleatorio];
  }

let personagemSorteado = retornarPersonagemAleatorio(personagens);
console.log(personagemSorteado);