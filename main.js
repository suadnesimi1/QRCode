const currentDate = Date();
window.addEventListener("load", () => {
    var qrc = new QRCode(document.getElementById("qrcode"),currentDate);
    console.log("QR Code Generated!");
})

setTimeout(() => {
    document.location.reload();
  }, 60000);