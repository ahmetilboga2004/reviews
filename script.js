let data = [
    {
        "name": "Ahmet",
        "img": "/image/man-1.jpg",
        "about": "Merhaba, ben {isim} {yas} yaşındayım. Yazılımcıyım. Şuan da madin artuklu üniversitesi okuyorum"
    },
    {
        "name": "Mehmet",
        "img": "/image/man-2.jpg",
        "about": `Merhaba, ben {isim} {yas} yaşındayım. Yazılımcıyım. Şuan da madin artuklu üniversitesi okuyorum`
    },
    {
        "name": "Halil",
        "img": "/image/man-3.jpg",
        "about": "Merhaba, ben {isim}. {yas} yaşındayım. Yazılımcıyım. Şuan da madin artuklu üniversitesi okuyorum"
    },
    {
        "name": "Derya",
        "img": "/image/woman-1.jpg",
        "about": "Merhaba, ben {isim}. {yas} yaşındayım. Yazılımcıyım. Şuan da madin artuklu üniversitesi okuyorum"
    },
    {
        "name": "Gizem",
        "img": "/image/woman-2.jpg",
        "about": "Merhaba, ben {isim}. {yas} yaşındayım. Yazılımcıyım. Şuan da madin artuklu üniversitesi okuyorum"
    }
]

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
};
for (let i = 0; i < data.length; i++) {
    let name = data[i]["name"];
    let age = getRandomInt(18, 35);
    data[i]["about"] = data[i]["about"].replace("{isim}", `${name}`);
    data[i]["about"] = data[i]["about"].replace("{yas}", `${age}`);
}

let img_left = document.querySelector(".image-left");
let isim_left = document.querySelector(".name-left");
let about_left = document.querySelector(".about-left");

let img_right = document.querySelector(".image-right");
let isim_right = document.querySelector(".name-right");
let about_right = document.querySelector(".about-right");

let hr_right = document.querySelector(".hr_sag");
let hr_left = document.querySelector(".hr_sol");


let button = document.querySelector(".ortala");


counter = 0;
button.addEventListener("click", function () {
    let veri = data[Math.floor(Math.random() * data.length)];
    if ((counter % 2) == 0) {
        img_right.style.display = "initial";
        hr_right.style.display = "block";
        img_right.src = veri.img;
        isim_right.textContent = veri.name;
        about_right.textContent = veri.about;

        img_left.style.display = "none";
        hr_left.style.display = "none";
        isim_left.textContent = "";
        about_left.textContent = "";

    } else if ((counter % 2) == 1) {
        img_right.style.display = "none";
        hr_right.style.display = "none";
        isim_right.textContent = "";
        about_right.textContent = "";

        img_left.style.display = "initial";
        hr_left.style.display = "block";
        img_left.src = veri.img;
        isim_left.textContent = veri.name;
        about_left.textContent = veri.about;
    };
    counter++;
});

function randomNum() {
    return Math.floor(Math.random() * data.length);
};


