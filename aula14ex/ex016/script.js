function contar () {
    var ini = document.getElementById("ini")
    var fim = document.getElementById("fim")
    var pas = document.getElementById("pas")
    var res = document.getElementById("res")

    if(ini.value.length == 0 || fim.value.length == 0 || pas.value.length == 0) {
        res.innerHTML = "Impossível contar!"
    }else {
        res.innerHTML = "Contando: <br>"
        let i = Number(ini.value)
        let f = Number(fim.value)
        let p = Number(pas.value)

        if(p <= 0) {
            window.alert("Passo indisponível, passo considerado 1.")
            p = 1
        }
        if (i < f){
            //contagem crescente
            for(let c = i; c <= f; c += p){
                res.innerHTML += `${c} \u{1F449}`
            }
        }else {
            for(let c = i; c >= f; c -= p){
                res.innerHTML += `${c} \u{1F449}`
        }
        
    }
    res.innerHTML += `\u{1F3C1}`
}

}

