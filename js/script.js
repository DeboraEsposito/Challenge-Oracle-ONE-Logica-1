botaoCriptografar = document.querySelector('#btn-cripto');
botaoDescriptografar = document.querySelector('#btn-descripto')
botaoCopiar = document.querySelector('#btn-copy')


/*Função Criptografar*/

botaoCriptografar.addEventListener("click", function criptografar(event){

  event.preventDefault();
 
  form = document.querySelector("#form-entrada");
  var textoCapturado = form.inputTexto.value;
  
    textoCapturado = textoCapturado.replaceAll('e','enter');    
    textoCapturado = textoCapturado.replaceAll('i', 'imes');
    textoCapturado = textoCapturado.replaceAll('a','ai'); 
    textoCapturado = textoCapturado.replaceAll('o','ober'); 
    textoCapturado = textoCapturado.replaceAll('u','ufat');
    textoCapturado = textoCapturado.replaceAll(/[0-9]/g, numeroInvalido);
      
    
    document.querySelector('#msg').value = textoCapturado;   

  form.reset();
  
})

/*função Descriptografar*/

  botaoDescriptografar.addEventListener("click", function descriptografar(event){

    event.preventDefault();
    
    form = document.querySelector("#form-entrada");
    var textoCriptografado = form.inputTexto.value;    
      textoCriptografado = textoCriptografado.replaceAll('enter','e'); 
      textoCriptografado = textoCriptografado.replaceAll('imes', 'i');
      textoCriptografado = textoCriptografado.replaceAll('ai','a');
      textoCriptografado = textoCriptografado.replaceAll('ober','o'); 
      textoCriptografado = textoCriptografado.replaceAll('ufat','u'); 
      document.querySelector('#msg').value = textoCriptografado;

    form.reset();

  })

/*Função Copiar*/

botaoCopiar.addEventListener("click", function copiar(){
  navigator.clipboard.writeText(document.querySelector('#msg').value); 
    
})

/*Função não aceita numeros*/

function numeroInvalido(){
  
  alert('Não são aceitos número')

  return(' Inválido ')
}

/*Função não aceita letras maiúsculas*/
