

function updateDiv() {
    document.getElementById("gracias").innerHTML = "Formulario enviado correctamente. Gracias por tu mensaje.";
    
    let text = "¿Quieres imprimir tu mensaje?";
    if (confirm(text) == true) {
        printDiv();
      } else {
        text = "You canceled!";
      }






    document.getElementById("contactform").reset();
    

    
}




function printDiv() { 
    var divContents = document.getElementById("contactform").innerHTML; 
    var a = window.open('', '', 'height=500, width=500'); 
    
    a.document.write(divContents); 
    
    a.document.close(); 
    a.print(); 
} 