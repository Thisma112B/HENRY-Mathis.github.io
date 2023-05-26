var STARSNUM = 100;
var SPEED = 1;

var windowW = $(window).width(),
    windowH = $(window).height(),
    sky = $('#sky');

for (var i=0; i<STARSNUM; i++) {
    var size = Math.floor((Math.random()*5)+2),
        animDur = Math.floor((Math.random()*10)+4) / (SPEED/2),
        posX = Math.floor((Math.random()*windowW)+1),
        posY = Math.floor((Math.random()*windowH)+1);
    
    var randomAnimDuration = [
        '-webkit-animation-duration: ' + animDur + 's;',
        '-moz-animation-duration: ' + animDur + 's;',
        '-ms-animation-duration: ' + animDur + 's;',
        '-o-animation-duration: ' + animDur + 's;',
        'animation-duration: ' + animDur + 's;'
    ].join('');
    
    var style = 'width: ' + size + 'px; height: ' + size + 'px; left: ' + posX + 'px; top: ' + posY + 'px;' + randomAnimDuration;
    
    sky.append('<div class="star" style="' + style + '"></div>');
}