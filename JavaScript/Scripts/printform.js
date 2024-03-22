function printDiv() { 
    var divContents = document.getElementById("contactform").innerHTML; 
    var a = window.open('', '', 'height=1000, width=1000'); 
    
    a.document.write(divContents); 
    
    a.document.close(); 
    a.print(); 
} 