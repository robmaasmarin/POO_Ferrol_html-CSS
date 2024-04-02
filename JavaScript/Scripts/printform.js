
// CÓDIGO PARA IMPRIMIR LOS DATOS DEL FORMULARIO EN PDF

function printDiv() { 
    var divContents = document.getElementById("contactform").innerHTML; 
    var a = window.open('', '', 'height=500, width=500'); 
    
    a.document.write(divContents); 
    
    a.document.close(); 
    a.print(); 
} 