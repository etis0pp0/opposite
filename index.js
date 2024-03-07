function changeName(){
    const logoName = document.getElementById('name')
    if(logoName.innerText == 'E T I S O P P O' ){
        logoName.innerHTML = '<h1>O P P O S I T E</h1>'
    }
    else{
        logoName.innerHTML = '<h1>E T I S O P P O</h1>'
    }
}
