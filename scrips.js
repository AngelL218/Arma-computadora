var formulario = document.getElementById("formulario");

function calcular(){
    var componente = formulario.componente.value;
    var procesador = formulario.procesador.value;
    var disco = formulario.disco.value;
    var ram = formulario.ram.value;
    var monitor = formulario.monitor.value;

    var total = 0

              if(componente == "moni") {
  total = total + 700;     } 

              else if(componente == "torre") {
  total = total + 1200;     } 

               else if(componente == "desk") {
  total = total + 550;     } 

               else if(componente == "gamer") {
  total = total + 2500;     } 

        else{
    alert("Por favor selecciona una opción de Componentes");
    return; } 



                if(procesador == "celeron") {
  total = total + 900;     } 

               else if(procesador == "intel3") {
  total = total + 1500;     } 

               else if(procesador == "intel5") {
  total = total + 3500;     } 
  
               else if(procesador == "intel7") {
  total = total + 5000;     } 

        else{
    alert("Por favor selecciona una opción de Procesador");
    return; } 



                if(disco == "hdd1") {
  total = total + 500;     } 

               else if(disco == "hdd2") {
  total = total + 800;     }

               else if(disco == "hdd3") {
  total = total +1000;     }

            else if(disco == "ssd1") {
  total = total + 900;     }

               else if(disco == "ssd2") {
  total = total + 1380;     }

          else{
    alert("Por favor selecciona una opción de Disco Duro");
    return; } 


                if(ram == "ram1") {
  total = total + 600;     }

               else if(ram == "ram2") {
  total = total + 1050;     }

               else if(ram == "ram3") {
  total = total + 1950;     }

          else{
    alert("Por favor selecciona una opción de RAM");
    return; } 



                if(monitor == "1") {
  total = total + 600;     }

               else if(monitor == "2") {
  total = total + 800;     }

               else if(monitor == "3") {
  total = total + 1050;     }

               else if(monitor == "4") {
  total = total + 1300;     }

               else if(monitor == "5") {
  total = total + 1550;     }
  
               else if(monitor == "6") {
  total = total + 1800;     }

          else{
    alert("Por favor selecciona una opción de Monitor");
    return; } 



        if(formulario.mouse.checked == true){
  total += 500; }   

        if(formulario.teclado.checked == true){
  total += 500; }   

        if(formulario.bocinas.checked == true){
  total += 500; }   

        if(formulario.webcam.checked == true){
  total += 500; }   

        if(formulario.ups.checked == true){
  total += 500; }   

        if(formulario.alfombra.checked == true){
  total += 500; }   

        if(formulario.control.checked == true){
  total += 500; }   

        if(formulario.rgb.checked == true){
  total += 500; }   

        if(formulario.silla.checked == true){
  total += 500; }   

        if(formulario.wifi.checked == true){
  total += 500; }   

        if(formulario.usb.checked == true){
  total += 500; }   

        if(formulario.audifonos.checked == true){
  total += 500; }   

        if(formulario.monitor2.checked == true){
  total += 500; }   

        if(formulario.soporte.checked == true){
  total += 500; }   

        if(formulario.ventilador.checked == true){
  total += 500; }   

        if(formulario.micro.checked == true){
  total += 500; }   

        if(formulario.lector.checked == true){
  total += 500; }   

        if(formulario.hdmi.checked == true){
  total += 500; }   

        if(formulario.refrigerante.checked == true){
  total += 500; }   

        if(formulario.herramientas.checked == true){
  total += 500; }   


         formulario.total.value = total;  
    document.getElementById('total').innerText = total;

        console.info("total");
}