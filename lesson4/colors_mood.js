"use strict";

function randomDiap(n,m) {
    return Math.floor(Math.random()*(m-n+1))+n;
}

function mood(colorsCount) {
    var colors=[ '', 'красный', 'оранжевый', 'жёлтый', 'зелёный', 'голубой', 'синий', 'фиолетовый' ];
    var control = {};

    console.log( 'цветов: ' + colorsCount );

    for ( var i=1; i<=colorsCount; i++ ) {
        do {
            var n=randomDiap(1,7);
            var colorName=colors[n];
        } while (n in control);
        control[n] = colorName;
        console.log( colorName );
    }
}

mood(3);