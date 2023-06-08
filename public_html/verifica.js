// verifica se o email recebido está no formato correto //
function verificaemail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
  }

function enviardados(){
var telefone = document.dados.cpf.value;
var regex = new RegExp('^\\([0-9]{2}\\)((3[0-9]{3}-[0-9]{4})|(9[0-9]{3}-[0-9]{5}))$');

if(regex.test(telefone))
{
alert( "Preencha campo telefone corretamente!" );
document.dados.cpf.focus();
return false;
}

if(document.dados.cpf.value=="" ||
document.dados.cpf.value.length != 11)
{
alert( "Preencha campo cpf corretamente!" );
document.dados.cpf.focus();
return false;
}


if( document.dados.email.value=="" ||
document.dados.email.value.indexOf('@')==-1 ||
document.dados.email.value.indexOf('.')==-1 )
{
alert( "Preencha campo E-MAIL corretamente!" );
document.dados.email.focus();
return false;
}

if (document.dados.tx_mensagem.value=="")
{
alert( "Preencha o campo MENSAGEM!" );
document.dados.tx_mensagem.focus();
return false;
}

if (document.dados.tx_mensagem.value.length < 50 )
{
alert( "É necessario preencher o campo MENSAGEM com mais de 50 caracteres!" );
document.dados.tx_mensagem.focus();
return false;
}

return true;
}


//Serviços ↓ //

let slides = document.querySelectorAll('.slide-servicos-conteudo-texto');
let index = 0

function next(){
  slides[index].classList.remove('active');
  index = (index + 1) % slides.length;
  slides[index].classList.add('active');
}

function prev(){
  slides[index].classList.remove('active');
  index = (index - 1 + slides.length) % slides.length;
  slides[index].classList.add('active');
}

setInterval(next, 7000);
