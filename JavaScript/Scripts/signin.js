// FUNCIÓN DE CONTROL DE INICIO DE SESIÓN. 3 USUARIOS CON SUS RESPECTIVAS CONTRASEÑAS
function myFunction() {
    const user1 = "bob";
    const pass1 = "123";
    const user2 = "rob";
    const pass2 = "456";
    const user3 = "kob";
    const pass3 = "789";
    var userlogin = document.getElementById("username").value;
    var passlogin = document.getElementById("pwd").value;

    


     switch(userlogin) {
        case user1:
            if (passlogin == pass1) {
                /* CARGAR OTRA PÁGINA CUANDO EL LOGIN ES SATISFACTORIO */
                location.href = "welcome.html";


            }
            else {
                // CUANDO USUARIO Y/O CONTRASEÑA SON INCORRECTOS MOSTRAMOS MENSAJE DE ERROR EN ROJO
                document.getElementById("invalid").style.color = "red"
                document.getElementById("invalid").style.fontWeight = "bold";
                document.getElementById("invalid").innerHTML = "Wrong username or password. Please, try again."
            }
          // code block
          break;
        case user2: 
            if(passlogin == pass2) {
            document.getElementById("logininfo").innerHTML = "SUCCESS"
            }
            else {
                document.getElementById("invalid").style.color = "red"
                document.getElementById("invalid").style.fontWeight = "bold";
                document.getElementById("invalid").innerHTML = "Wrong username or password. Please, try again."
            }
          // code block
          break;
        case user3:
            if (passlogin == pass3) {document.getElementById("logininfo").innerHTML = "SUCCESS"
            }
            else {
                document.getElementById("invalid").style.color = "red"
                document.getElementById("invalid").style.fontWeight = "bold";
                document.getElementById("invalid").innerHTML = "Wrong username or password. Please, try again."
            }
      // code block
      break;

                
        default:
          // code block
                document.getElementById("invalid").style.color = "red"
                document.getElementById("invalid").style.fontWeight = "bold";
                document.getElementById("invalid").innerHTML = "Wrong username or password. Please, try again."
      }
  }