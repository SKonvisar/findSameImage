var images = [  {link:"https://kde.link/test/0.png",index : 0},
                {link:"https://kde.link/test/1.png",index : 1},
                {link:"https://kde.link/test/2.png",index : 2},
                {link:"https://kde.link/test/3.png",index : 3},
                {link:"https://kde.link/test/4.png",index : 4},
                {link:"https://kde.link/test/5.png",index : 5},
                {link:"https://kde.link/test/6.png",index : 6},
                {link:"https://kde.link/test/7.png",index : 7},
                {link:"https://kde.link/test/8.png",index : 8},
                {link:"https://kde.link/test/9.png",index : 9}
            ];

/* Создание Ajax запроса */

var xml = new XMLHttpRequest();

xml.open("GET", "https://kde.link/test/get_field_size.php", false);
xml.send();

console.log(xml.responseText);

// Размеры поля

var width = JSON.parse(xml.responseText).width,
    height = JSON.parse(xml.responseText).height,
    totalEl = width * height;

// Создаем элементы

var arrOfElem = [],
    //example = document.createElement("img"),
    example = document.createElement("div"),
    wrapper = document.querySelector(".wrap"),
    img = document.createElement('img');

wrapper.style.width = String((width * 100) + 80) + 'px';    

example.className = "itm";
example.appendChild(img);

for (let i = 0; i < totalEl; i++){
    arrOfElem[i] = example.cloneNode(true);
}

console.log();
//  Добавляем картинки

if ((totalEl / 4) <= 10) {
    let j = 0;
    for (let i = 0; i < totalEl; i += 2){
        if (j == 10){j = 0}
        arrOfElem[i].firstChild.src = images[j].link;
        arrOfElem[i + 1].firstChild.src = images[j].link;
        arrOfElem[i].id = images[j].index;
        arrOfElem[i + 1].id = images[j].index;
        j++;
    }
} else {
    let j = 0;
    for (let i = 0; i < totalEl; i += 2){
        if (j == 10){j = 0}
        arrOfElem[i].firstChild.src = images[j].link;
        arrOfElem[i + 1].firstChild.src = images[j].link;
        arrOfElem[i].id = images[j].index;
        arrOfElem[i + 1].id = images[j].index;
        j++;
    }
}
shake(arrOfElem);

for (let i = 0; i < totalEl; i += 2){
    wrapper.appendChild(arrOfElem[i]);
    wrapper.appendChild(arrOfElem[i + 1]);
}

function shake(arr) { // Разбрасываем по полю рандомно
    let cash,
        randomNumber;
    
    for (let i = 0; i < arr.length; i++){
        randomNumber = Math.floor(Math.random() * ((arr.length - 1) - 0 + 1));
        cash = arr[randomNumber];
        arr[randomNumber] = arr[i];
        arr[i] = cash;
    }
}
