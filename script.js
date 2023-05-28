const roz = document.querySelector("#roz");
const font = document.querySelector("#font");
const cz = document.querySelector("#cz");
const ni = document.querySelector("#ni");
const zi = document.querySelector("#zi");
const wyn = document.querySelector("#wynik");

addEventListener('change', () => {
    let rozX = roz.value;

    wyn.style.fontSize = rozX + '%';

    if(font.value === "0") {
        wyn.style.fontStyle = 'normal';
    } else if (font.value === "1") {
        wyn.style.fontStyle = 'italic';
    }
});

cz.addEventListener('click', () => {
    wyn.style.color = 'red';
});
ni.addEventListener('click', () => {
    wyn.style.color = 'blue';
});
zi.addEventListener('click', () => {
    wyn.style.color = 'green';
});