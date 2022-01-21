botaoCriptografar = document.querySelector('#btn-cripto');
botaoDescriptografar = document.querySelector('#btn-descripto')
botaoCopiar = document.querySelector('#btn-copy')

var textoCriptografado = '';
var textoCapturado = '';

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
    document.querySelector('#msg').value =textoCapturado;          
      
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
    document.querySelector('#msg').value =textoCriptografado;
 
})

/*Função Copiar*/

botaoCopiar.addEventListener("click", function copiar(){
  navigator.clipboard.writeText(document.querySelector('#msg').value); 
    
})
/* Regras Codificador: 
"e" é convertido para "enter" 
"i" é convertido para "imes"
"a" é convertido para "ai"
"o" é convertido para "ober"
"u" é convertido para "ufat"
Apenas letras minúsculas
Não permite acentuação   
*/

/* Regras Decodificador: 
"enter" é convertido para "e" 
"imes" é convertido para "i"
"ai" é convertido para "a"
"ober" é convertido para "o"
"ufat" é convertido para "u"
Apenas letras minúsculas
Não permite acentuação     
*/