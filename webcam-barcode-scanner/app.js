const video = document.getElementById('video');
const resultDiv = document.getElementById('result');
const startBtn = document.getElementById('start-btn');

function startScanner() {
    resultDiv.textContent = '';
    Quagga.init({
        inputStream: {
            name: "Live",
            type: "LiveStream",
            target: video,
            constraints: {
                facingMode: "environment"
            }
        },
        decoder: {
            readers: ["ean_reader", "code_128_reader", "upc_reader", "code_39_reader"]
        }
    }, function(err) {
        if (err) {
            resultDiv.textContent = 'Erreur lors de l\'initialisation : ' + err;
            return;
        }
        Quagga.start();
    });

    Quagga.onDetected(function(data) {
        if (data && data.codeResult && data.codeResult.code) {
            resultDiv.textContent = 'Code-barres détecté : ' + data.codeResult.code;
            Quagga.stop();
        }
    });
}

startBtn.addEventListener('click', startScanner);
