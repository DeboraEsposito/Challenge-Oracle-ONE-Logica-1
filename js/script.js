botaoCriptografar = document.querySelector('#btn-cripto');

textoCapturado = "";
var textoCriptografado = '';

botaoCriptografar.addEventListener("click", function criptografar(event){

   event.preventDefault();
  
  form = document.querySelector("#form-entrada");
  var textoCapturado = form.inputTexto.value;

    textoCriptografado = textoCapturado.replace(/a/gi, 'ai'); 
    textoCriptografado = textoCapturado.replace(/e/gi, 'enter'); 
    textoCriptografado = textoCapturado.replace(/i/gi, 'imes'); 
    textoCriptografado = textoCapturado.replace(/o/gi, 'ober'); 
    textoCriptografado = textoCapturado.replace(/u/gi, 'ufat'); 

          
      
    return console.log(textoCriptografado);
  
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