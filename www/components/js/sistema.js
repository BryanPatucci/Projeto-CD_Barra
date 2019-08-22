function Leitor(){
  cordova.plugins.barcodeScanner.scan(
    function(result){
    if(result.text = 280720550){
      window.location.href = "disp1.html";
      alert("Leitura do Código de barras\n" +
      "Resultado" + result.text + "\n" +
      "Formato" + result.format + "\n" +
      "Cancelado" + result.cancelled);
    }
    else if(result.text = 989895555){
      window.location.href = "disp2.html";
      alert("Leitura do Código de barras\n" +
      "Resultado" + result.text + "\n" +
      "Formato" + result.format + "\n" +
      "Cancelado" + result.cancelled);
    }
    else if(result.text = 85236987){
      window.location.href = "disp3.html";
      alert("Leitura do Código de barras\n" +
      "Resultado" + result.text + "\n" +
      "Formato" + result.format + "\n" +
      "Cancelado" + result.cancelled);
    }
    else if(result.text = 85369877444){
      window.location.href = "disp4.html";
      alert("Leitura do Código de barras\n" +
      "Resultado" + result.text + "\n" +
      "Formato" + result.format + "\n" +
      "Cancelado" + result.cancelled);
    }
    },
    function (error){
      alert("Erro no escaneamento: " + error);
    },
    {
     preferFrontCamera : false, // iOS and Android
          showFlipCameraButton : true, // iOS and Android
          showTorchButton : true, // iOS and Android
          torchOn: false, // Android, launch with the torch switched on (if available)
          saveHistory: true, // Android, save scan history (default false)
          prompt : "Insira o Cósigo de barras na area", // Android
          resultDisplayDuration: 500, // Android, display scanned text for X ms. 0 suppresses it entirely, default 1500
          formats : "QR_CODE,PDF_417,CODE_39", // default: all but PDF_417 and RSS_EXPANDED
          orientation : "landscape", // Android only (portrait|landscape), default unset so it rotates with the device
          disableAnimations : false, // iOS
          disableSuccessBeep: false // iOS and Android
      }
    );
    }

