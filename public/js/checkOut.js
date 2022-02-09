var emailPromo = document.querySelector('form-control')
 let promoemail = {

}


function promo (){
  promoemail = {
    email: document.querySelector('#email').value
  }
  const body = JSON.stringify(promoemail)
    fetch('/promos', {
        method: "POST",
        body: body,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })

    .then((res) => res.json())
        .then((data) => {
            if (data.error) throw data.error
            let keys = JSON.stringify(data[0])
            localStorage.setItem('email', keys)
            getUser()
            reset()
        })
        .catch(err => msg(err))
  console.log(promo) 
}




function finalizar(finalizarCompra) {

     compra = {
        nome: document.querySelectorById('#nome').value,
        numero: document.querySelectorById('#numero').value,
        valiade: document.querySelectorById('#validade').value,
        cvc: document.querySelectorById('#cvc').value
    }
    const body = JSON.stringify(compra)
    fetch('/finalizarCompra', {
        method: "POST",
        body: body,
        headers: {
            "Content-type": "application/json; charset=UTF-8"
        }
    })
        .then((res) => res.text())
        .then((data) => {
            if (data) throw data
            reset()
            metodoCadOrLogin()
            msg()
        })
        .catch(err => msg(err))
}