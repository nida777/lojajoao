var bodyDrop = document.querySelector('.drop')

function drop(produto, a) {
  bodyDrop.style.display='flex' 
  bodyDrop.innerHTML=null
  
  console.log(produto)
  if(a === 'entrar'){
    this.mode = "login"    
    bodyDrop.innerHTML+=`
    <div class="container-form">
            <a class="iconCloseLoginOrCad" onclick="down()"><i class="fa fa-window-close"></i></a>
            <div class="form-login-or-cad">
    <div class="cad row mt-2 mb-2 w-75">
        <input class="nome form-control" placeholder="Nome" type="text" id="nome" />
    </div>
    <div class="login row mb-2 w-75">
        <input class="form-control" placeholder="E-mail" type="email" id="email" />
    </div>
    <div class="login row mb-2 w-75">
        <input class="form-control" placeholder="Senha" type="password" id="password" />
    </div>
    <div class="cad row mb-2 w-75">
        <input class="form-control" placeholder="Repetir senha" type="password" id="repit-password" />
    </div>
    <div class="cad row mb-2 w-75">
        <input class="form-control" placeholder="CPF" maxlength="11" type="text" id="cpf" />
    </div>
    <div class="cad row mb-2 w-75">
        <input class="form-control" placeholder="CEP" maxlength="8" type="text" id="cep" />
    </div>
    <div class="row mb-2 w-75">
        <button class="btn-login-or-cad btn btn-primary btn-block" onclick="signinOrCad()" id="login-or-cad"></button>
    </div>
    <div class="mb-2 w-75">
        <a class="a-login-or-cad" onclick="metodoCadOrLogin()" id="cad-button"></a>
    </div>
</div>
        </div>`
  metodoCadOrLogin()
  } else if(a === 'dropCheckOut'){
    // console.log(produto)
    bodyDrop.innerHTML+=`
    <div class="containerCheckout">
        <a class="iconCloseLoginOrCad" onclick="down()"><i class="fa fa-window-close"></i></a>
        <div class="contentCheckOut">
            <div class="parte-checkout">
                <div class="camisa-checkout">
                    <img class="img-camisa-checkout" src="https://i.ibb.co/RhGt8RP/camiza-azul.png" >
                    <img class="img-estampa-checkout" src="https://i.ibb.co/zQsr2Xz/Printful-Peacock-removebg-preview.png" >
                </div>
                <div class="input-quant-valor">
                    <span>Quantidade </span>
                    <input class="form-control mb-2 ml-2 w-50" onkeyup="soma()" value="1" type="text" id="quantidade">
                    <input class="form-control" type="hidden" id="valor" value="19.99">
                    <div class="valor-checkout" type="text" id="valor-total">19.99</div>
                </div>
            </div>
            <div class="parte-checkout">
                <div class="endereco-entrega">
                    <h1>Endereço de entrega</h1>
                    <p><span type="text" >CEP </span></p>
                    <p><span type="text" >Localidade</span></p>
                    <p><span type="text">UF</span></p>
                    <p><span type="text">Bairro</span></p>
                    
                </div>
            </div>
            <div class="parte-checkout">
                <div class="cartao-credito">
                    Nome: <input class="form-control mb-2" id="nome">
                    Número do Cartão: <input class="form-control mb-2" maxlength="16" id="numero" >
                    <div class="row">
                        <div class="col-6">
                            Data de Validade: <input class="form-control mb-2 w-100" maxlength="5" id="validade">
                        </div>
                        <div class="col-6">
                            CVC: <input class="form-control mb-2 w-50" maxlength="3" id="cvc">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <button class="btn btn-primary mt-2" onclick="finalizar()">Finalizar</button>
    </div>`
  }
  

  $("#cep").focusout(function(){
		//Início do Comando AJAX
		$.ajax({
			//O campo URL diz o caminho de onde virá os dados
			//É importante concatenar o valor digitado no CEP
			url: 'https://viacep.com.br/ws/'+$(this).val()+'/json/unicode/',
			//Aqui você deve preencher o tipo de dados que será lido,
			//no caso, estamos lendo JSON.
			dataType: 'json',
			//SUCESS é referente a função que será executada caso
			//ele consiga ler a fonte de dados com sucesso.
			//O parâmetro dentro da função se refere ao nome da variável
			//que você vai dar para ler esse objeto.
			success: function(resposta){
				//Agora basta definir os valores que você deseja preencher
				//automaticamente nos campos acima.
				$("#logradouro").val(resposta.logradouro);
				$("#complemento").val(resposta.complemento);
				$("#bairro").val(resposta.bairro);
				$("#cidade").val(resposta.localidade);
				$("#uf").val(resposta.uf);
				//Vamos incluir para que o Número seja focado automaticamente
				//melhorando a experiência do usuário
				$("#numero").focus();
			}
		});
	});
}
function down() {
  this.mode = "login"
  bodyDrop.style.display='none'
}

