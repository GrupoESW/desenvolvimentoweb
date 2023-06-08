function enviarEmail() {

    var telefone = document.dados.telefone;
    var cpf = document.dados.cpf;
    var email = document.dados.email;
    var mensagem = document.dados.msg;
    var assunto = document.dados.assunto;
    
    var regex = /^\d{10,11}$/;
    if(regex.test(telefone.value) == false)
    {
    alert( "Preencha campo telefone corretamente!" );
    telefone.focus();
    return false;
    }

    
    if(cpf.value=="" ||
    cpf.value.length != 11)
    {
    alert( "Preencha campo cpf corretamente!" );
    cpf.focus();
    return false;
    }

    
    if( email.value=="" ||
    email.value.indexOf('@')==-1 ||
    email.value.indexOf('.')==-1 )
    {
    alert( "Preencha campo E-MAIL corretamente!" );
    email.focus();
    return false;
    }


    if (mensagem.value=="")
    {
    alert( "Preencha o campo MENSAGEM!" );
    mensagem.focus();
    return false;
    }

    if (mensagem.value.length < 10 )
    {
    alert( "É necessario preencher o campo MENSAGEM com mais de 10 caracteres!" );
    mensagem.focus();
    return false;
    }

    //return true;

  
    var corpoEmail = 'Dados do formulário de contato:' + '\n';
    corpoEmail += 'CPF:' + cpf.value + '\n';
    corpoEmail += 'Email: ' + email.value + '\n';
    corpoEmail += 'Assunto: ' + assunto.value + '\n';
    corpoEmail += 'Telefone: ' + telefone.value + '\n';
    corpoEmail += 'Mensagem: ' + mensagem.value + '\n';
    
    var linkEmail = 'mailto:cezarbrumjr@gmail.com';
    linkEmail += '?subject=' + encodeURIComponent(assunto.value);
    linkEmail += '&body=' + encodeURIComponent(corpoEmail);
    
  
    window.location.href = linkEmail;
  }