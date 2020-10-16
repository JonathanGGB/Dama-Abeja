$(document).ready(main);

var contador = 1;

function main() {
    $('.menu').click(function() {
        if (contador == 1) {
            $('nav').animate({
                left: '0'
            });
            contador = 0;
            $('ul').click(function() {
                $('nav').animate({
                    left: '-100%'
                });
                var auxiliar = document.getElementById("lista").text;
                document.getElementById("cabecera").href = '#' + auxiliar;
            })
        } else {
            contador = 1;
            $('nav').animate({
                left: '-100%'
            });
        }
    });

}
