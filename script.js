function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var n1 = document.getElementById('n1')
    var msg = document.querySelector('div#msg')
    if(n1.value.length == 0 || Number(n1.value) > ano ){
        window.alert('[ERRO] - Verifique e tente novamente !')
    } else {
        var fsex = document.getElementsByName('sexo')
        var idade = ano - Number(n1.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade < 13){
                img.setAttribute('src','img/imagem02.jpg')
                
            } else if(idade > 13 && idade < 29){
                img.setAttribute('src','img/imagem13.jpg')
                
            } else if(idade > 29 && idade < 60){
                img.setAttribute('src','img/imagem35.jpg')
                
            }else{
                img.setAttribute('src','img/imagem60.jpg')
                
            }
        } else if(fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade < 13){
                img.setAttribute('src','img/imagesf2.jpg')

            } else if(idade > 13 && idade < 29){
                img.setAttribute('src','img/imagemf8.jpg')
               
            } else if(idade > 29 && idade < 60){
                img.setAttribute('src','img/imagemf19.jpg')
                
            }else{
                img.setAttribute('src','img/imagemm18.jpg')     

            }
        }
        msg.style.display = 'flex'
        img.style.borderRadius = '500px'
        msg.style.textAlign = 'center'
        msg.innerHTML = `Essa pessoa e um ${genero} e tem ${idade} anos !`
        msg.appendChild(img)
}

}