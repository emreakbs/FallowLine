$(document).ready(function () {
    var theCanvas = document.getElementById('canvas');
    var ctx = theCanvas.getContext('2d');
    theCanvas.width = 1349;
    theCanvas.height = 650;

    //canvas ın o anki left(x) ve top(y) değerlerini alır. offset'te kullanılabilir. 
    var canvasPosition = $('#canvas').position();

    //canvas'ın orsasını bulmak ve çizgiyi başlatmak için kullanıldı.
    var lineStart = {
        x: theCanvas.width / 2, //genişliin yarısı
        y: theCanvas.height / 2 //yüksekliğin yarısı
    }
    //mouse canvas üzerinde hareket etmeye devam ettiğinde
    $('#canvas').mousemove(function (e) {
        ctx.clearRect(0, 0, theCanvas.width, theCanvas.height); //x:0 y:0 noktasından başlar ve canvasın genişliği ve yüksekliği kadar sayfayı temizler.
        ctx.beginPath(); //kendisinden önceki çizgiyi sıfırlar.
        ctx.moveTo(lineStart.x, lineStart.y); //çizginin x ve y düzlemindeki başlangıç noktasını belirtir.
        ctx.lineTo(e.pageX - canvasPosition.left, e.pageY - canvasPosition.top); //başlatılan çizginin son naktasını belirtir.
        ctx.strokeStyle = 'red'; //oluşturulan çizginin rengini belirtir
        ctx.lineWidth = 3; //oluşturulan çizginin kalınlığını belirtir.
        ctx.stroke(); //oluşturulan çizgiyi ekrana basar. kullanılmazsa ekranda herhangi birşey görünmez.
    });
});
/*
pageX= sayfanın o anki yatay düzlemdeki koordinatını alır.
pageY=sayfanın o anki dikey düzlemdeki değerini alır.

*/