//В конце, я сделал Модалку для кнопки записаться, посмотрите пожалуйста

let inpModalName = document.querySelector(".inp-edit-name");
let inpModalJob = document.querySelector(".inp-edit-job");
let inpModalImg = document.querySelector(".inp-edit-img");
let btnModalSave = document.querySelector(".btn-save");
let imgAdd = document.querySelector("#add");
let modalDiv = document.querySelector(".main-modal");
let btnClose = document.querySelector(".btn-closer");
let modalForm = document.querySelector("#modalForm");
let cards = document.querySelector(".cards");
let cards2 = document.querySelector(".cards2");

readFunc(); // вызываем функцию отображения глобально
// Create 1
imgAdd.addEventListener("click", () => {
  // навесили событие на иконку добавления выпускника
  modalDiv.style.display = "block"; // при нажатии display модального окна меняется с none на block
});
modalForm.addEventListener("submit", (event) => {
  // Кнопка сохраняет данные и отправляет и отправляет их в local storage
  event.preventDefault(); // Это нужно, чтобы страница не обновлялась при нажатии на кнопку

  if (
    !inpModalName.value.trim() ||
    !inpModalJob.value.trim() ||
    !inpModalImg.value.trim()
  ) {
    // Это идет проверка, на заполнении инпутов
    alert("Заполните все данные");
  } else {
    let obj = {
      name: inpModalName.value,
      job: inpModalJob.value,
      image: inpModalImg.value,
    }; // добавляет объект со значениями введенными в инпуты

    function setItemToStorage(t) {
      // создаем функцию отправки значений на localStorage
      let data = JSON.parse(localStorage.getItem("people")) || []; // мы берем данные с localStorage в виде массива
      data.push(t); // Пушим эти данные в наш объект
      localStorage.setItem("people", JSON.stringify(data)); // мы отправляем введенные данные обратно в localStorage, преобразовывая их
    }
    setItemToStorage(obj); //вот отправление
    readFunc();

    inpModalImg.value = ""; //чтобы подефолту они были пустыми
    inpModalJob.value = "";
    inpModalName.value = "";

    modalDiv.style.display = "none"; //закрытие модального ока после преобразовывания
  }
});

btnClose.addEventListener("click", () => {
  modalDiv.style.display = "none"; // Чтобы закрыть модалку
});

// READ 1
function readFunc() {
  // Создаем функцию отображения
  if (!localStorage.getItem("people")) {
    // Если там нет ключа people
    localStorage.setItem("people", "[]"); //то добавь ключ people
  }

  let data = JSON.parse(localStorage.getItem("people")); //После добавления мы его вытаскиваем и присваиваем к переменной data
  cards2.innerHTML = ""; // По дефолту делаем его пустым
  data.forEach((elem, index) => {
    //Мы его перебираем
    cards2.innerHTML += `
    <div class="person">
          <div class="imgPerson">
            <div class="card-image">
            <img src="${elem.image}" alt="image">

            </div>
            <div class="card-description">
              <h3>${elem.name}</h3>
              <h3>${elem.job}</h3>
            </div>
            <button class="btn1Edit" onclick = "editFunc(${index})">Edit</button>
            <button class="btn1Delete" onclick = "deleteFunc(${index})">Delete</button>
          </div>
        </div>

    `;
    //Присвоили динамически значения для card2(новая карточка)
  });
}

//DELETE 1
function deleteFunc(index) {
  //функция удаления
  let data = JSON.parse(localStorage.getItem("people"));
  data.splice(index, 1);
  localStorage.setItem("people", JSON.stringify(data));
  readFunc(); //Вызов функции отображения
}

// Edit 1 редактирование
let modalDiv2 = document.querySelector(".main-modal2"); // мы создали еще одно модальное окно и вытащили все кнопки и инпуты для редактирования
let inpModalName2 = document.querySelector(".inp-edit-name2");
let inpModalJob2 = document.querySelector(".inp-edit-job2");
let inpModalImg2 = document.querySelector(".inp-edit-img2");
let btnModalSave2 = document.querySelector(".btn-save2");
let btnClose2 = document.querySelector(".btn-closer2");
let modalForm2 = document.querySelector("#modalForm2");

// Inside the editFunc() function
function editFunc(index) {
  modalDiv.style.display = "none";
  modalDiv2.style.display = "block";
  let data = JSON.parse(localStorage.getItem("people"));
  inpModalName2.value = data[index].name;
  inpModalName2.setAttribute("data-index", index);
  inpModalJob2.value = data[index].job;
  inpModalJob2.setAttribute("data-index", index);
  inpModalImg2.value = data[index].image;
  inpModalImg2.setAttribute("data-index", index);
}

btnClose2.addEventListener("click", () => {
  modalDiv2.style.display = "none"; // Use modalDiv2
});

btnModalSave2.addEventListener("click", (event) => {
  event.preventDefault();
  //   modalForm.style.display = "none"; // Use modalForm
  if (
    !inpModalName2.value.trim() ||
    !inpModalJob2.value.trim() ||
    !inpModalImg2.value.trim()
  ) {
    alert("Заполните все данные");
  } else {
    let index = inpModalName2.getAttribute("data-index"); // Use a single index variable
    let data = JSON.parse(localStorage.getItem("people"));

    // Update the data array directly
    data[index].name = inpModalName2.value;
    data[index].job = inpModalJob2.value;
    data[index].image = inpModalImg2.value;

    localStorage.setItem("people", JSON.stringify(data));

    readFunc();
    modalDiv2.style.display = "none";
  }
});

// Create 2
let inpModalTitle = document.querySelector(".inp-edit-title");
let inpModalText = document.querySelector(".inp-edit-text");
let btnModalSave3 = document.querySelector(".btn-save3");
let modalDiv3 = document.querySelector(".main-modal3");
let btnClose3 = document.querySelector(".btn-closer3");
let modalForm5 = document.querySelector("#modalForm5");
let imgAdd2 = document.querySelector("#add-p");
let blockInfo2 = document.querySelector(".block-info2");

readFunc2(); // вызываем функцию отображения глобально
imgAdd2.addEventListener("click", () => {
  // навесили событие на иконку добавления выпускника
  modalDiv3.style.display = "block"; // при нажатии display модального окна меняется с none на block
});
modalForm3.addEventListener("submit", (event) => {
  // Кнопка сохраняет данные и отправляет и отправляет их в local storage
  event.preventDefault(); // Это нужно, чтобы страница не обновлялась при нажатии на кнопку
  if (!inpModalTitle.value.trim() || !inpModalText.value.trim()) {
    // Это идет проверка, на заполнении инпутов
    alert("Заполните все данные");
  } else {
    let obj = {
      title: inpModalTitle.value,
      text: inpModalText.value,
    }; // добавляет объект со значениями введенными в инпуты

    function setItemToStorage2(a) {
      // создаем функцию отправки значений на localStorage
      let data = JSON.parse(localStorage.getItem("paragraph")) || []; // мы берем данные с localStorage в виде массива
      data.push(a); // Пушим эти данные в наш объект
      localStorage.setItem("paragraph", JSON.stringify(data)); // мы отправляем введенные данные обратно в localStorage, преобразовывая их
    }
    setItemToStorage2(obj); //вот отправление
    readFunc2();

    inpModalTitle.value = ""; //чтобы подефолту они были пустыми
    inpModalText.value = "";

    modalDiv3.style.display = "none"; //закрытие модального ока после преобразовывания
  }
});

btnClose3.addEventListener("click", () => {
  modalDiv3.style.display = "none"; // Чтобы закрыть модалку
});

// READ 2
function readFunc2() {
  // Создаем функцию отображения
  if (!localStorage.getItem("paragraph")) {
    // Если там нет ключа people
    localStorage.setItem("paragraph", "[]"); //то добавь ключ people
  }

  let data = JSON.parse(localStorage.getItem("paragraph")); //После добавления мы его вытаскиваем и присваиваем к переменной data
  blockInfo2.innerHTML = ""; // По дефолту делаем его пустым
  data.forEach((elem, index) => {
    //Мы его перебираем
    blockInfo2.innerHTML += `
    <h4>${elem.title}</h4>
    <p>
              ${elem.text}
    </p>
    <br>
    <button class="btn1Edit" onclick = "editFunc2(${index})">Edit</button>
    <button class="btn1Delete" onclick = "deleteFunc2(${index})">Delete</button>
    <hr />

    `;
    //Присвоили динамически значения для card2(новая карточка)
  });
}

//DELETE 2
function deleteFunc2(index) {
  //функция удаления
  let data = JSON.parse(localStorage.getItem("paragraph"));
  data.splice(index, 1);
  localStorage.setItem("paragraph", JSON.stringify(data));
  readFunc2(); //Вызов функции отображения
}

//Edit 2
let inpModalTitle2 = document.querySelector(".inp-edit-title2");
let inpModalText2 = document.querySelector(".inp-edit-text2");
let btnModalSave4 = document.querySelector(".btn-save4");
let modalDiv4 = document.querySelector(".main-modal4");
let btnClose4 = document.querySelector(".btn-closer4");
let modalForm4 = document.querySelector("#modalForm4");

function editFunc2(index) {
  modalDiv2.style.display = "none";
  modalDiv3.style.display = "none"; // Close the paragraphs edit modal
  modalDiv4.style.display = "block"; // Open the paragraphs edit modal
  let data = JSON.parse(localStorage.getItem("paragraph"));
  inpModalTitle2.value = data[index].title;
  inpModalTitle2.setAttribute("data-index", index);
  inpModalText2.value = data[index].text;
  inpModalText2.setAttribute("data-index", index);
}

btnClose4.addEventListener("click", () => {
  modalDiv4.style.display = "none"; // Use modalDiv2
});

btnModalSave4.addEventListener("click", (event) => {
  event.preventDefault();
  //   modalForm.style.display = "none"; // Use modalForm
  if (!inpModalTitle2.value.trim() || !inpModalText2.value.trim()) {
    alert("Заполните все данные");
  } else {
    let index = inpModalTitle2.getAttribute("data-index"); // Use a single index variable
    let data = JSON.parse(localStorage.getItem("paragraph"));

    // Update the data array directly
    data[index].title = inpModalTitle2.value;
    data[index].text = inpModalText2.value;

    localStorage.setItem("paragraph", JSON.stringify(data));

    readFunc2();
    modalDiv4.style.display = "none";
  }
});

// Crud 3
//Create
let inpModalWayNum = document.querySelector(".inp-edit-wayNum");
let inpModalWayTitle = document.querySelector(".inp-edit-wayTitle");
let inpModalWayText = document.querySelector(".inp-edit-wayText");
let btnModalSave5 = document.querySelector(".btn-save5");
let buttAdd = document.querySelector("#buttAdd");
let modalDiv5 = document.querySelector(".main-modal5");
let btnClose5 = document.querySelector(".btn-closer5");
let modalForm7 = document.querySelector("#modalForm7");
let wayLine2 = document.querySelector(".way-line2");
let wayFull2 = document.querySelector(".way-full2");
let way2 = document.querySelector(".way2");

readFunc3(); // вызываем функцию отображения глобально
buttAdd.addEventListener("click", () => {
  // навесили событие на иконку добавления выпускника
  modalDiv5.style.display = "block"; // при нажатии display модального окна меняется с none на block
});
modalForm7.addEventListener("submit", (event) => {
  // Кнопка сохраняет данные и отправляет и отправляет их в local storage
  event.preventDefault(); // Это нужно, чтобы страница не обновлялась при нажатии на кнопку
  if (
    !inpModalWayNum.value.trim() ||
    !inpModalWayTitle.value.trim() ||
    !inpModalWayText.value.trim()
  ) {
    // Это идет проверка, на заполнении инпутов
    alert("Заполните все данные");
  } else {
    let obj = {
      num: inpModalWayNum.value,
      title: inpModalWayTitle.value,
      text: inpModalWayText.value,
    }; // добавляет объект со значениями введенными в инпуты

    function setItemToStorage5(b) {
      // создаем функцию отправки значений на localStorage
      let data = JSON.parse(localStorage.getItem("newPar")) || []; // мы берем данные с localStorage в виде массива
      data.push(b); // Пушим эти данные в наш объект
      localStorage.setItem("newPar", JSON.stringify(data)); // мы отправляем введенные данные обратно в localStorage, преобразовывая их
    }
    setItemToStorage5(obj); //вот отправление
    readFunc3();

    inpModalWayNum.value = ""; //чтобы подефолту они были пустыми
    inpModalWayTitle.value = "";
    inpModalWayText.value = "";

    modalDiv5.style.display = "none"; //закрытие модального ока после преобразовывания
  }
});

btnClose5.addEventListener("click", () => {
  modalDiv5.style.display = "none"; // Чтобы закрыть модалку
});

// READ 3
function readFunc3() {
  // Создаем функцию отображения
  if (!localStorage.getItem("newPar")) {
    // Если там нет ключа people
    localStorage.setItem("newPar", "[]"); //то добавь ключ people
  }

  let data = JSON.parse(localStorage.getItem("newPar")); //После добавления мы его вытаскиваем и присваиваем к переменной data
  way2.innerHTML = ""; // По дефолту делаем его пустым
  data.forEach((elem, index) => {
    //Мы его перебираем
    way2.innerHTML += `
    <div class="way-full1">
        <div class="way-line1">
            <div class="way-line-about">
              <div class="number-part">
                <h4>${elem.num}</h4>
              </div>
              <div class="way-line-title">
                <h4>${elem.title}</h4>
              </div>
              <div class="way-line-p">
                <p>
                  ${elem.text}
                </p>
              </div>
              <button class="btn4Edit" onclick = "editFunc3(${index})">Edit</button>
                <button class="btn4Delete" onclick = "deleteFunc3(${index})">Delete</button>
            </div>
        </div>
    </div>

    `;
    //Присвоили динамически значения для card2(новая карточка)
  });
}

//DELETE 3
function deleteFunc3(index) {
  //функция удаления
  let data = JSON.parse(localStorage.getItem("newPar"));
  data.splice(index, 1);
  localStorage.setItem("newPar", JSON.stringify(data));
  readFunc3(); //Вызов функции отображения
}

//Edit
let inpModalWayNum2 = document.querySelector(".inp-edit-wayNum2");
let inpModalWayTitle2 = document.querySelector(".inp-edit-wayTitle2");
let inpModalWayText2 = document.querySelector(".inp-edit-wayText2");
let btnModalSave6 = document.querySelector(".btn-save5");
let buttSave = document.querySelector(".buttSave");
let modalDiv6 = document.querySelector(".main-modal6");
let btnClose6 = document.querySelector(".btn-closer6");
let modalForm6 = document.querySelector("#modalForm6");

function editFunc3(index) {
  modalDiv2.style.display = "none";
  modalDiv3.style.display = "none"; // Close the paragraphs edit modal
  modalDiv4.style.display = "none"; // Open the paragraphs edit modal
  modalDiv5.style.display = "none";
  modalDiv6.style.display = "block";
  let data = JSON.parse(localStorage.getItem("newPar"));
  inpModalWayNum2.value = data[index].num;
  inpModalWayNum2.setAttribute("data-index", index);
  inpModalWayTitle2.value = data[index].title;
  inpModalWayTitle2.setAttribute("data-index", index);
  inpModalWayText2.value = data[index].text;
  inpModalWayText2.setAttribute("data-index", index);
}

btnClose6.addEventListener("click", () => {
  modalDiv6.style.display = "none"; // Use modalDiv2
});

btnModalSave6.addEventListener("click", (event) => {
  event.preventDefault();
  //   modalForm.style.display = "none"; // Use modalForm
  if (
    !inpModalWayNum2.value.trim() ||
    !inpModalWayTitle2.value.trim() ||
    !inpModalWayText2.value.trim()
  ) {
    alert("Заполните все данные");
  } else {
    let index = inpModalWayNum2.getAttribute("data-index"); // Use a single index variable
    let data = JSON.parse(localStorage.getItem("newPar"));

    // Update the data array directly
    data[index].num = inpModalWayNum2.value;
    data[index].title = inpModalWayTitle2.value;
    data[index].text = inpModalWayText2.value;

    localStorage.setItem("newPar", JSON.stringify(data));

    readFunc3();
    modalDiv6.style.display = "none";
  }
});

//Create extra Чекните
let inpModalNameR = document.querySelector(".inpSpName");
let inpModalPhoneR = document.querySelector(".inpSpPhone");
let btnModalSaveR = document.querySelector(".btn-saveSp");
let buttR = document.querySelector(".pr");
let modalDivSp = document.querySelector(".main-modalSp");
let modalDivSpr = document.querySelector(".main-modalSpr");
let btnCloseSp = document.querySelector(".btn-closerSp");
let btnCloseSpr = document.querySelector(".btn-closerSpr");
let modalFormSp = document.querySelector("#modalFormSp");

buttR.addEventListener("click", () => {
  // навесили событие на иконку добавления выпускника
  modalDivSp.style.display = "block"; // при нажатии display модального окна меняется с none на block
});
modalFormSp.addEventListener("submit", (event) => {
  // Кнопка сохраняет данные и отправляет и отправляет их в local storage
  event.preventDefault(); // Это нужно, чтобы страница не обновлялась при нажатии на кнопку
  if (!inpModalNameR.value.trim() || !inpModalPhoneR.value.trim()) {
    // Это идет проверка, на заполнении инпутов
    alert("Заполните все данные");
  } else {
    let obj = {
      num: inpModalNameR.value,
      phone: inpModalPhoneR.value,
    }; // добавляет объект со значениями введенными в инпуты

    function setItemToStorage5(c) {
      // создаем функцию отправки значений на localStorage
      let data = JSON.parse(localStorage.getItem("Reg")) || []; // мы берем данные с localStorage в виде массива
      data.push(c); // Пушим эти данные в наш объект
      localStorage.setItem("Reg", JSON.stringify(data)); // мы отправляем введенные данные обратно в localStorage, преобразовывая их
    }
    setItemToStorage5(obj); //вот отправление

    inpModalNameR.value = ""; //чтобы подефолту они были пустыми
    inpModalPhoneR.value = "";

    modalDivSp.style.display = "none"; //закрытие модального ока после преобразовывания
  }
});

btnCloseSp.addEventListener("click", () => {
  modalDivSp.style.display = "none"; // Чтобы закрыть модалку
});

btnModalSaveR.addEventListener("click", () => {
  if (inpModalNameR.value && inpModalPhoneR.value) {
    modalDivSpr.style.display = "block";
  }
});

btnCloseSpr.addEventListener("click", () => {
  modalDivSpr.style.display = "none"; // Чтобы закрыть модалку
});
