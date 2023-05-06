function carregar() {
    var msg = window.document.getElementById('msg')
    var img = window.document.getElementById('imagem')
    var data = new Date()
     var hora = data.getHours()
    
    
    
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora < 12) {
        // Bom dia!
        img.src = 'manha.jpg'
        document.body.style.background = '#4887cf'
    } else if (hora >= 12 && hora <= 18) {
        // boa tarde!
        img.src = 'tarde.jpg'
        document.body.style.background = '#dab336'
    } else {
        // boa noite!
        img.src = 'noite.jpg'
        document.body.style.background = '#4e4a7e'
    }




    }