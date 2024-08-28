 function encriptar() {
     let text = document.getElementById("texto").value;
     let messageTitle = document.getElementById("titulo-mjs");
     let messageParagraph = document.getElementById("parrafo");
    
   
     let encryptedText = text
       .replace(/a/gi, "ai")
       .replace(/e/gi, "enter")
       .replace(/i/gi, "imes")
       .replace(/o/gi, "ober")
       .replace(/u/gi, "ufat");
   
     if (text.length !== 0) {
     
       document.getElementById("texto").value = encryptedText;
       titleMessage.textContent = "Texto encriptado con éxito";
       messageParagraph.textContent = "";
     
     } else {
       
       titleMessage.textContent = "Ningún mensaje fue encontrado";
       messageParagraph.textContent = "Ingresa el texto que deseas encriptar o desencriptar";
       swal("Ooops!", "Debes ingresar un texto", "warning");
     }
   }
   
    
   function desencriptar() {
     let text = document.getElementById("texto").value;
     let titleMessage = document.getElementById("titulo-mensaje");
     let paragraph = document.getElementById("parrafo");
     let doll = document.getElementById("venom");
   
     let decryptedText = text
       .replace(/ai/gi, "a")
       .replace(/enter/gi, "e")
       .replace(/imes/gi, "i")
       .replace(/ober/gi, "o")
       .replace(/ufat/gi, "u");
   
     if (text.length !== 0) {
       document.getElementById("texto").value = decryptedText;
       titleMessage.textContent = "Texto desencriptado con éxito";
       paragraph.textContent = "";
       venom.src = "./imgs/venom.png";
     } else { 
       venom.src = "/imgs/venom.png";
       titleMessage.textContent = "No message found";
       paragraph.textContent = "Enter the text you want to encrypt or decrypt";
       swal("Ooops!", "You must enter some text", "warning");
     }
   }

