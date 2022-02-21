window.onload = () => {

const Btn = document.createElement("button");
Btn.textContent = "Nice Message";
document.body.appendChild(Btn);

Btn.addEventListener('click', function () {
    alert('I love Josh/Garrett/Haylee!');
});

const HR = document.createElement("hr");
document.body.appendChild(HR);

const Btn2 = document.createElement("button");
Btn2.textContent = "Text Box Message";
document.body.appendChild(Btn2);

const Div = document.createElement("input");
document.body.appendChild(Div);
Div.className = "div-class"

Btn2.addEventListener('click', function () {
    alert(Div.value);
});

const HR2 = document.createElement("hr");
document.body.appendChild(HR2);

const Div2 = document.createElement("div");
Div2.textContent = "( ͡° ͜ʖ ͡°)"
Div2.className = "div2-class"
document.body.appendChild(Div2);

Div2.addEventListener('mouseenter', function () {
    Div2.style.backgroundColor = "blue";
});

Div2.addEventListener('mouseleave', function () {
    Div2.style.backgroundColor = 'red';
});

const HR3 = document.createElement("hr");
document.body.appendChild(HR3);

const Div3 = document.createElement("p");
Div3.textContent = "Can you paint with all the colors of the wind?"
document.body.appendChild(Div3)

Div3.addEventListener('click', function () {
    Div3.style.color = getRandomColor();
})

function getRandomColor() {
    let letters = '0123456789ABCDEF';
    let color = '#';
    for (i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

const HR4 = document.createElement("hr");
document.body.appendChild(HR4);

const Btn3 = document.createElement("button");
Btn3.textContent = "Who's that pokemon?";
document.body.appendChild(Btn3);



const Div4 = document.createElement("div");
Div4.textContent = ""
document.body.appendChild(Div4);
Div4.className = "div4-class"


Btn3.addEventListener('click', function () {
    const Span = document.createElement('span')
    Span.textContent = "Reid McLain"
    Div4.appendChild(Span);
});

const HR5 = document.createElement("hr");
document.body.appendChild(HR5);

const Btn4 = document.createElement("button");
Btn4.textContent = "Friends";
document.body.appendChild(Btn4);

const UL = document.createElement("ul");
document.body.appendChild(UL);

const friends = ["William", "John", "Landon", "Chad", "Noah", "Sage", "Austin", "Emily", "Cameron", "Jordan"];

let friendCounter = 0;

Btn4.addEventListener('click', function () {
    if (friendCounter < friends.length) {
    let LI = document.createElement("li");
    let name = document.createTextNode(friends[friendCounter]);
    UL.appendChild(LI);
    LI.appendChild(name);
    friendCounter++;
    }
    else {
        alert('out of friends');
    }
});
}