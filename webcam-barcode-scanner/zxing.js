// Utilisation de ZXing-js/browser pour scanner les codes-barres
import { BrowserBarcodeReader } from 'https://cdn.jsdelivr.net/npm/@zxing/browser@0.2.8/esm/index.min.js';

const video = document.getElementById('video');
const resultDiv = document.getElementById('result');
const startBtn = document.getElementById('start-btn');
let codeReader;

startBtn.addEventListener('click', async () => {
    resultDiv.textContent = '';
    if (!codeReader) {
        codeReader = new BrowserBarcodeReader();
    }
    try {
        const result = await codeReader.decodeOnceFromVideoDevice(undefined, video);
        resultDiv.textContent = 'Code-barres détecté : ' + result.text;
        codeReader.reset();
    } catch (err) {
        resultDiv.textContent = 'Erreur : ' + err;
    }
});
