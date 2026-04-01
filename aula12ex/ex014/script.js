function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var data = new Date()
    hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 5 && hora < 12) {
        // BOM DIA!
        img.src = "./img/fotomanha.png"
        document.body.style.background = "#B8E8FF"
    } else if (hora >= 12 && hora <= 18) {
        //BOA TARDE!
        img.src = "./img/fototarde.png"
        document.body.style.background = "#FFD013"
    }else {
        //BOA NOITE!
        img.src = "./img/fotonoite.png"
        document.body.style.background = "#2B292A"
    }
}
