        let tiempoTerminado;
        let intervaloDeTeimpo;

        function comenzarCuentaRegresiva(){
            tiempoTerminado = setTimeout(tiempoCumplido, 30000);
            intervaloDeTeimpo = setInterval(ticTac, 1000);

            document.getElementById("cuentaRegresiva").textContent = 30;
        }

        function ticTac(){
            const tiempo = document.getElementById("cuentaRegresiva").textContent;
            document.getElementById("cuentaRegresiva").textContent = String(tiempo -1).padStart(2, "0");
        }

        function tiempoCumplido(){
            clearInterval(intervaloDeTeimpo)
            document.getElementById("cuentaRegresiva").textContent = 0;
            document.getElementById("audioFinal").play();
            alert("GAME OVER: INTENTA DE NUEVO");
        }
        

        function finalizado(){
            clearTimeout(tiempoTerminado);
            clearInterval(intervaloDeTeimpo);


            const fecha = new Date();
            const respuesta1 = document.getElementById("respuesta1").value;
            const respuesta2 = document.getElementById("respuesta2").value;
            const respuesta3 = document.getElementById("respuesta3").value;
            const respuesta4 = document.getElementById("respuesta4").value;
            const respuesta5 = document.getElementById("respuesta5").value;

            const elementoAlerta = fecha.toLocaleDateString("es-Es") + "\n" +
                        "1. " +     respuesta1+  "\n" +
                        "2. " +     respuesta2+  "\n" +
                        "3. " +     respuesta3+  "\n" +
                        "4. " +     respuesta4+  "\n" +
                        "5. " +     respuesta5;

            alert(elementoAlerta);

        }

        function volverAIntentar(){
            location.reload();
        }

