window.onload = function(){
//variaveis
var valor1;
var valor2;
var operador;


  var btn7 = document.getElementById('btn7');
  btn7.addEventListener('click', function(){
  document.getElementById('display').value += 7;
  });

  var btn8 = document.getElementById('btn8');
  btn8.addEventListener('click', function(){
  document.getElementById('display').value += 8;
  });

  var btn9 = document.getElementById('btn9');
  btn9.addEventListener('click', function(){
  document.getElementById('display').value += 9;
  });

  var btn4 = document.getElementById('btn4');
  btn4.addEventListener('click', function(){
  document.getElementById('display').value += 4;
  });

  var btn5 = document.getElementById('btn5');
  btn5.addEventListener('click', function(){
  document.getElementById('display').value += 5;
  });

  var btn6 = document.getElementById('btn6');
  btn6.addEventListener('click', function(){
  document.getElementById('display').value += 6;
  });

  var btn1 = document.getElementById('btn1');
  btn1.addEventListener('click', function(){
  document.getElementById('display').value += 1;
  });

  var btn2 = document.getElementById('btn2');
  btn2.addEventListener('click', function(){
  document.getElementById('display').value += 2;
  });

  var btn3 = document.getElementById('btn3');
  btn3.addEventListener('click', function(){
  document.getElementById('display').value += 3;
  });

  var btn0 = document.getElementById('btn0');
  btn0.addEventListener('click', function(){
  document.getElementById('display').value += 0;
  });

  var btnCE = document.getElementById('btnCE');
  btnCE.addEventListener('click', function(){
  document.getElementById('display').value = "";
  });

  var btnSomar = document.getElementById('btnSomar');
  btnSomar.addEventListener('click', function(){
      valor1 = document.getElementById('display').value;
      operador = "somar";
      document.getElementById('display').value = "";
  });

  var btnSub = document.getElementById('btnSub');
  btnSub.addEventListener('click', function(){
      valor1 = document.getElementById('display').value;
      operador = "sub";
      document.getElementById('display').value = "";
  });

  var btnDiv = document.getElementById('btnDiv');
  btnDiv.addEventListener('click', function(){
      valor1 = document.getElementById('display').value;
      operador = "div";
      document.getElementById('display').value = "";
  });

  var btnMult = document.getElementById('btnMult');
  btnMult.addEventListener('click', function(){
      valor1 = document.getElementById('display').value;
      operador = "mult";
      document.getElementById('display').value = "";
  });

  var btnIgual = document.getElementById('btnIgual');
  btnIgual.addEventListener('click', function(){
      valor2 = document.getElementById('display').value;
      if(operador == "somar"){
        result = parseInt(valor1) + parseInt (valor2);
      }
      if(operador == "sub"){
        result = parseInt(valor1) - parseInt (valor2);
      }
      if(operador == "mult"){
        result = parseInt(valor1) * parseInt (valor2);
      }
      if(operador == "div"){
        result = parseInt(valor1) / parseInt (valor2);
      }
      document.getElementById('display').value = result;
  });

}
var btnponto = document.getElementById('btnPonto');
btnPonto.addEventListener('click', function(){
document.getElementById('display').value = ",";
});
