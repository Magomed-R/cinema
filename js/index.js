//кнопки-фильтры в header-е
let filmsButton = document.querySelector(`#films`);
let seriesButton = document.querySelector(`#series`);
let animeButton = document.querySelector(`#anime`);
let multfilmsButton = document.querySelector(`#multfilms`);

//кнопка купить
let vanhelsingButton = document.querySelector(`#bilet-of-van-helsing`);
let wayneButton = document.querySelector(`#bilet-of-wayne`);
let neslomlenniyButton = document.querySelector(`#bilet-of-neslomlenniy`);
let malchikButton = document.querySelector(`#bilet-of-malchik`);
let RikAndMortiButton = document.querySelector(`#bilet-of-rik-and-morti`);

//сама карта с фильмом
let vanhelsingNode = document.querySelector(`#van-helsing`);
let wayneNode = document.querySelector(`#wayne`);
let neslomlenniyNode = document.querySelector(`#neslomlenniy`);
let malchikNode = document.querySelector(`#malchik`);
let RikAndMortiNode = document.querySelector(`#rik-and-morti`);
let noAnimeNode = document.querySelector(`#no-anime`)
let film = document.querySelector(`#film`);

//страницы
let section1Node = document.querySelector(`#section-1`);
let section2Node = document.querySelector(`#section-2`);

//что произойдет при нажатии на кнопки-фильтры
filmsButton.addEventListener(`click`, function () {
    vanhelsingNode.classList.remove(`d-none`);
    wayneNode.classList.add(`d-none`);
    neslomlenniyNode.classList.remove(`d-none`);
    malchikNode.classList.remove(`d-none`);
    RikAndMortiNode.classList.add(`d-none`);
    section1Node.classList.remove(`d-none`);
    section2Node.classList.add(`d-none`);
    noAnimeNode.classList.add(`d-none`);
});

seriesButton.addEventListener(`click`, function () {
    vanhelsingNode.classList.add(`d-none`);
    wayneNode.classList.remove(`d-none`);
    neslomlenniyNode.classList.add(`d-none`);
    malchikNode.classList.add(`d-none`);
    RikAndMortiNode.classList.remove(`d-none`);
    section1Node.classList.remove(`d-none`);
    section2Node.classList.add(`d-none`);
    noAnimeNode.classList.add(`d-none`);
});

animeButton.addEventListener(`click`, function () {
    vanhelsingNode.classList.add(`d-none`);
    wayneNode.classList.add(`d-none`);
    neslomlenniyNode.classList.add(`d-none`);
    malchikNode.classList.add(`d-none`);
    RikAndMortiNode.classList.add(`d-none`);
    section1Node.classList.remove(`d-none`);
    section2Node.classList.add(`d-none`);
    noAnimeNode.classList.remove(`d-none`);
});

multfilmsButton.addEventListener(`click`, function () {
    vanhelsingNode.classList.add(`d-none`);
    wayneNode.classList.add(`d-none`);
    neslomlenniyNode.classList.add(`d-none`);
    malchikNode.classList.add(`d-none`);
    RikAndMortiNode.classList.remove(`d-none`);
    section1Node.classList.remove(`d-none`);
    section2Node.classList.add(`d-none`);
    noAnimeNode.classList.add(`d-none`);
});

//что произойдет при нажатии на "купить билет"
vanhelsingButton.addEventListener(`click`, function () {
    section1Node.classList.add(`d-none`);
    section2Node.classList.remove(`d-none`);
    film.innerHTML = `Фильм: Ван Хельсинг`;
});

wayneButton.addEventListener(`click`, function () {
    section1Node.classList.add(`d-none`);
    section2Node.classList.remove(`d-none`);
    film.innerHTML = `Сериал: Уейн`;
});

neslomlenniyButton.addEventListener(`click`, function () {
    section1Node.classList.add(`d-none`);
    section2Node.classList.remove(`d-none`);
    film.innerHTML = `Фильм: Несломленный`;
});

malchikButton.addEventListener(`click`, function () {
    section1Node.classList.add(`d-none`);
    section2Node.classList.remove(`d-none`);
    film.innerHTML = `Фильм: Мальчик, который обуздал ветер`;
});

RikAndMortiButton.addEventListener(`click`, function () {
    section1Node.classList.add(`d-none`);
    section2Node.classList.remove(`d-none`);
    film.innerHTML = `Сериал: Рик и Морти`;
});

//кнопки мест в зале
let x1y1Button = document.querySelector(`#x1y1`);
let x1y2Button = document.querySelector(`#x1y2`);
let x1y3Button = document.querySelector(`#x1y3`);
let x1y4Button = document.querySelector(`#x1y4`);
let x1y5Button = document.querySelector(`#x1y5`);
let x2y1Button = document.querySelector(`#x2y1`);
let x2y2Button = document.querySelector(`#x2y2`);
let x2y3Button = document.querySelector(`#x2y3`);
let x2y4Button = document.querySelector(`#x2y4`);
let x2y5Button = document.querySelector(`#x2y5`);
let x3y1Button = document.querySelector(`#x3y1`);
let x3y2Button = document.querySelector(`#x3y2`);
let x3y3Button = document.querySelector(`#x3y3`);
let x3y4Button = document.querySelector(`#x3y4`);
let x3y5Button = document.querySelector(`#x3y5`);
let x4y1Button = document.querySelector(`#x4y1`);
let x4y2Button = document.querySelector(`#x4y2`);
let x4y3Button = document.querySelector(`#x4y3`);
let x4y4Button = document.querySelector(`#x4y4`);
let x4y5Button = document.querySelector(`#x4y5`);

//всё, что идёт ниже мест в зале
let placesInfoNode = document.querySelector(`#places-info`);
let confirmButton = document.querySelector(`#confirm`);
let placeCountNode = document.querySelector(`#place-count`);
let priceNode = document.querySelector(`#price`);
let countSelectedPlaces = 0;
let countPriceOfAll = 0;
let formForm = document.querySelector(`#form`)

//что произойдет при нажатии на место в зале
x1y1Button.addEventListener(`click`, function () {
    if (x1y1Button.classList.contains(`btn-danger`) == true) {
        x1y1Button.classList.remove(`btn-danger`);
        x1y1Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 600;
        countSelectedPlaces++;
    } else if (x1y1Button.classList.contains(`btn-warning`) == true) {
        x1y1Button.classList.add(`btn-danger`);
        x1y1Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 600;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x1y2Button.addEventListener(`click`, function () {
    if (x1y2Button.classList.contains(`btn-danger`) == true) {
        x1y2Button.classList.remove(`btn-danger`);
        x1y2Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 600;
        countSelectedPlaces++;
    } else if (x1y2Button.classList.contains(`btn-warning`) == true) {
        x1y2Button.classList.add(`btn-danger`);
        x1y2Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 600;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x1y3Button.addEventListener(`click`, function () {
    if (x1y3Button.classList.contains(`btn-danger`) == true) {
        x1y3Button.classList.remove(`btn-danger`);
        x1y3Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 600;
        countSelectedPlaces++;
    } else if (x1y3Button.classList.contains(`btn-warning`) == true) {
        x1y3Button.classList.add(`btn-danger`);
        x1y3Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 600;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x1y4Button.addEventListener(`click`, function () {
    if (x1y4Button.classList.contains(`btn-danger`) == true) {
        x1y4Button.classList.remove(`btn-danger`);
        x1y4Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 600;
        countSelectedPlaces++;
    } else if (x1y4Button.classList.contains(`btn-warning`) == true) {
        x1y4Button.classList.add(`btn-danger`);
        x1y4Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 600;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x1y5Button.addEventListener(`click`, function () {
    if (x1y5Button.classList.contains(`btn-danger`) == true) {
        x1y5Button.classList.remove(`btn-danger`);
        x1y5Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 600;
        countSelectedPlaces++;
    } else if (x1y5Button.classList.contains(`btn-warning`) == true) {
        x1y5Button.classList.add(`btn-danger`);
        x1y5Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 600;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x2y1Button.addEventListener(`click`, function () {
    if (x2y1Button.classList.contains(`btn-danger`) == true) {
        x2y1Button.classList.remove(`btn-danger`);
        x2y1Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 500;
        countSelectedPlaces++;
    } else if (x2y1Button.classList.contains(`btn-warning`) == true) {
        x2y1Button.classList.add(`btn-danger`);
        x2y1Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 500;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x2y2Button.addEventListener(`click`, function () {
    if (x2y2Button.classList.contains(`btn-danger`) == true) {
        x2y2Button.classList.remove(`btn-danger`);
        x2y2Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 500;
        countSelectedPlaces++;
    } else if (x2y2Button.classList.contains(`btn-warning`) == true) {
        x2y2Button.classList.add(`btn-danger`);
        x2y2Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 500;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x2y3Button.addEventListener(`click`, function () {
    if (x2y3Button.classList.contains(`btn-danger`) == true) {
        x2y3Button.classList.remove(`btn-danger`);
        x2y3Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 500;
        countSelectedPlaces++;
    } else if (x2y3Button.classList.contains(`btn-warning`) == true) {
        x2y3Button.classList.add(`btn-danger`);
        x2y3Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 500;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x2y4Button.addEventListener(`click`, function () {
    if (x2y4Button.classList.contains(`btn-danger`) == true) {
        x2y4Button.classList.remove(`btn-danger`);
        x2y4Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 500;
        countSelectedPlaces++;
    } else if (x2y4Button.classList.contains(`btn-warning`) == true) {
        x2y4Button.classList.add(`btn-danger`);
        x2y4Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 500;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x2y5Button.addEventListener(`click`, function () {
    if (x2y5Button.classList.contains(`btn-danger`) == true) {
        x2y5Button.classList.remove(`btn-danger`);
        x2y5Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 500;
        countSelectedPlaces++;
    } else if (x2y5Button.classList.contains(`btn-warning`) == true) {
        x2y5Button.classList.add(`btn-danger`);
        x2y5Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 500;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x3y1Button.addEventListener(`click`, function () {
    if (x3y1Button.classList.contains(`btn-danger`) == true) {
        x3y1Button.classList.remove(`btn-danger`);
        x3y1Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 400;
        countSelectedPlaces++;
    } else if (x3y1Button.classList.contains(`btn-warning`) == true) {
        x3y1Button.classList.add(`btn-danger`);
        x3y1Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 400;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x3y2Button.addEventListener(`click`, function () {
    if (x3y2Button.classList.contains(`btn-danger`) == true) {
        x3y2Button.classList.remove(`btn-danger`);
        x3y2Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 400;
        countSelectedPlaces++;
    } else if (x3y2Button.classList.contains(`btn-warning`) == true) {
        x3y2Button.classList.add(`btn-danger`);
        x3y2Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 400;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x3y3Button.addEventListener(`click`, function () {
    if (x3y3Button.classList.contains(`btn-danger`) == true) {
        x3y3Button.classList.remove(`btn-danger`);
        x3y3Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 400;
        countSelectedPlaces++;
    } else if (x3y3Button.classList.contains(`btn-warning`) == true) {
        x3y3Button.classList.add(`btn-danger`);
        x3y3Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 400;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x3y4Button.addEventListener(`click`, function () {
    if (x3y4Button.classList.contains(`btn-danger`) == true) {
        x3y4Button.classList.remove(`btn-danger`);
        x3y4Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 400;
        countSelectedPlaces++;
    } else if (x3y4Button.classList.contains(`btn-warning`) == true) {
        x3y4Button.classList.add(`btn-danger`);
        x3y4Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 400;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x3y5Button.addEventListener(`click`, function () {
    if (x3y5Button.classList.contains(`btn-danger`) == true) {
        x3y5Button.classList.remove(`btn-danger`);
        x3y5Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 400;
        countSelectedPlaces++;
    } else if (x3y5Button.classList.contains(`btn-warning`) == true) {
        x3y5Button.classList.add(`btn-danger`);
        x3y5Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 400;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x4y1Button.addEventListener(`click`, function () {
    if (x4y1Button.classList.contains(`btn-danger`) == true) {
        x4y1Button.classList.remove(`btn-danger`);
        x4y1Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 300;
        countSelectedPlaces++;
    } else if (x4y1Button.classList.contains(`btn-warning`) == true) {
        x4y1Button.classList.add(`btn-danger`);
        x4y1Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 300;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x4y2Button.addEventListener(`click`, function () {
    if (x4y2Button.classList.contains(`btn-danger`) == true) {
        x4y2Button.classList.remove(`btn-danger`);
        x4y2Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 300;
        countSelectedPlaces++;
    } else if (x4y2Button.classList.contains(`btn-warning`) == true) {
        x4y2Button.classList.add(`btn-danger`);
        x4y2Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 300;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x4y3Button.addEventListener(`click`, function () {
    if (x4y3Button.classList.contains(`btn-danger`) == true) {
        x4y3Button.classList.remove(`btn-danger`);
        x4y3Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 300;
        countSelectedPlaces++;
    } else if (x4y3Button.classList.contains(`btn-warning`) == true) {
        x4y3Button.classList.add(`btn-danger`);
        x4y3Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 300;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x4y4Button.addEventListener(`click`, function () {
    if (x4y4Button.classList.contains(`btn-danger`) == true) {
        x4y4Button.classList.remove(`btn-danger`);
        x4y4Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 300;
        countSelectedPlaces++;
    } else if (x4y4Button.classList.contains(`btn-warning`) == true) {
        x4y4Button.classList.add(`btn-danger`);
        x4y4Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 300;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

x4y5Button.addEventListener(`click`, function () {
    if (x4y5Button.classList.contains(`btn-danger`) == true) {
        x4y5Button.classList.remove(`btn-danger`);
        x4y5Button.classList.add(`btn-warning`);
        countPriceOfAll = countPriceOfAll + 300;
        countSelectedPlaces++;
    } else if (x4y5Button.classList.contains(`btn-warning`) == true) {
        x4y5Button.classList.add(`btn-danger`);
        x4y5Button.classList.remove(`btn-warning`);
        countPriceOfAll = countPriceOfAll - 300;
        countSelectedPlaces--;
    }
    priceNode.innerHTML = `Стоимость билетов: ${countPriceOfAll}р`;
    placeCountNode.innerHTML = `Мест выбрано: ${countSelectedPlaces}`;
});

//что будет при нажатии на "оформить"
confirmButton.addEventListener(`click`, function () {
    formForm.classList.remove(`d-none`);

    if (x1y1Button.classList.contains(`btn-warning`)) {
        x1y1Button.classList.remove(`btn-warning`);
        x1y1Button.classList.add(`disabled`);
        x1y1Button.classList.add(`btn-info`);
    }
    if (x1y2Button.classList.contains(`btn-warning`)) {
        x1y2Button.classList.remove(`btn-warning`);
        x1y2Button.classList.add(`disabled`);
        x1y2Button.classList.add(`btn-info`);
    }
    if (x1y3Button.classList.contains(`btn-warning`)) {
        x1y3Button.classList.remove(`btn-warning`);
        x1y3Button.classList.add(`disabled`);
        x1y3Button.classList.add(`btn-info`);
    }
    if (x1y4Button.classList.contains(`btn-warning`)) {
        x1y4Button.classList.remove(`btn-warning`);
        x1y4Button.classList.add(`disabled`);
        x1y4Button.classList.add(`btn-info`);
    }
    if (x1y5Button.classList.contains(`btn-warning`)) {
        x1y5Button.classList.remove(`btn-warning`);
        x1y5Button.classList.add(`disabled`);
        x1y5Button.classList.add(`btn-info`);
    }
    if (x2y1Button.classList.contains(`btn-warning`)) {
        x2y1Button.classList.remove(`btn-warning`);
        x2y1Button.classList.add(`disabled`);
        x2y1Button.classList.add(`btn-info`);
    }
    if (x2y2Button.classList.contains(`btn-warning`)) {
        x2y2Button.classList.remove(`btn-warning`);
        x2y2Button.classList.add(`disabled`);
        x2y2Button.classList.add(`btn-info`);
    }
    if (x2y3Button.classList.contains(`btn-warning`)) {
        x2y3Button.classList.remove(`btn-warning`);
        x2y3Button.classList.add(`disabled`);
        x2y3Button.classList.add(`btn-info`);
    }
    if (x2y4Button.classList.contains(`btn-warning`)) {
        x2y4Button.classList.remove(`btn-warning`);
        x2y4Button.classList.add(`disabled`);
        x2y4Button.classList.add(`btn-info`);
    }
    if (x2y5Button.classList.contains(`btn-warning`)) {
        x2y5Button.classList.remove(`btn-warning`);
        x2y5Button.classList.add(`disabled`);
        x2y5Button.classList.add(`btn-info`);
    }
    if (x3y1Button.classList.contains(`btn-warning`)) {
        x3y1Button.classList.remove(`btn-warning`);
        x3y1Button.classList.add(`disabled`);
        x3y1Button.classList.add(`btn-info`);
    }
    if (x3y2Button.classList.contains(`btn-warning`)) {
        x3y2Button.classList.remove(`btn-warning`);
        x3y2Button.classList.add(`disabled`);
        x3y2Button.classList.add(`btn-info`);
    }
    if (x3y3Button.classList.contains(`btn-warning`)) {
        x3y3Button.classList.remove(`btn-warning`);
        x3y3Button.classList.add(`disabled`);
        x3y3Button.classList.add(`btn-info`);
    }
    if (x3y4Button.classList.contains(`btn-warning`)) {
        x3y4Button.classList.remove(`btn-warning`);
        x3y4Button.classList.add(`disabled`);
        x3y4Button.classList.add(`btn-info`);
    }
    if (x3y5Button.classList.contains(`btn-warning`)) {
        x3y5Button.classList.remove(`btn-warning`);
        x3y5Button.classList.add(`disabled`);
        x3y5Button.classList.add(`btn-info`);
    }
    if (x4y1Button.classList.contains(`btn-warning`)) {
        x4y1Button.classList.remove(`btn-warning`);
        x4y1Button.classList.add(`disabled`);
        x4y1Button.classList.add(`btn-info`);
    }
    if (x4y2Button.classList.contains(`btn-warning`)) {
        x4y2Button.classList.remove(`btn-warning`);
        x4y2Button.classList.add(`disabled`);
        x4y2Button.classList.add(`btn-info`);
    }
    if (x4y3Button.classList.contains(`btn-warning`)) {
        x4y3Button.classList.remove(`btn-warning`);
        x4y3Button.classList.add(`disabled`);
        x4y3Button.classList.add(`btn-info`);
    }
    if (x4y4Button.classList.contains(`btn-warning`)) {
        x4y4Button.classList.remove(`btn-warning`);
        x4y4Button.classList.add(`disabled`);
        x4y4Button.classList.add(`btn-info`);
    }
    if (x4y5Button.classList.contains(`btn-warning`)) {
        x4y5Button.classList.remove(`btn-warning`);
        x4y5Button.classList.add(`disabled`);
        x4y5Button.classList.add(`btn-info`);
    }
});

//что будет при нажатии на кнопку "купить"
let buyButton = document.querySelector(`#buy`);