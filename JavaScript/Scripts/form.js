// CÓDIGO PREGUNTANDO SI DESEAMOS IMPRIMIR LOS DATOS ENVIADOS A TRAVÉS DEL FORMULARIO

function updateDiv() {
    document.getElementById("gracias").innerHTML = "Formulario enviado correctamente. Gracias por tu mensaje.";
    //document.getElementById("print").style.backgroundColor = "red";
    let text = "¿Quieres imprimir tu mensaje?";
    if (confirm(text) == true) {
        printDiv();
      } else {
        text = "You canceled!";
      }

// RESTABLECEMOS EL FORMULARIO
    document.getElementById("contactform").reset();


    
}


// CÓDIGO PARA IMPRIMIR LOS DATOS DEL FORMULARIO EN PDF

function printDiv() { 
    var divContents = document.getElementById("contactform").innerHTML; 
    var a = window.open('', '', 'height=500, width=500'); 
    
    a.document.write(divContents); 
    
    a.document.close(); 
    a.print(); 
} 