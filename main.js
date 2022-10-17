window.addEventListener("load", () => {
    var qrc = new QRCode(document.getElementById("qrcode"), "https://time.is/")
    console.log(qrc);
    console.log("QR Code Generated!")
})

