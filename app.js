const Btn = document.createElement("button");
Btn.textContent = "Nice Message";
document.body.appendChild(Btn);
Btn.className = "button-class"

$('.button-class').click(function () {
    alert('I love Josh/Garrett/Haylee!');
});

const Btn2 = document.createElement("button");
Btn2.textContent = "Text Box Message";
document.body.appendChild(Btn2);
Btn2.className ='button2-class'

const Div = document.createElement("input");
document.body.appendChild(Div);
Div.className = "div-class"

$('.button2-class').click(function () {
    alert(Div.value);
});

const Div2 = document.createElement("");
document.body.appendChild(Div2);
Div2.className = "div2-class"

$('.div2-class').click(function () {
    $('.red').css('color', 'red');
});

$(document).ready(function () {
    $('<div></div>').css({
        'background-color': 'red',
        'height': '100px',
        'width': '100px'
    }).insertAfter('.div2-class');
});