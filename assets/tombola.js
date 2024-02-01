// FUNZIONE TABELLA TOMBOLA
const generateMainTable = function () {
  const tabellone = document.querySelector(".tabellone");

  for (let i = 1; i < 91; i++) {
    // const divTabel = document.createElement("div");
    // divTabel.className = "numTabella";
    // const spanNumTabel = document.createElement("span");
    // spanNumTabel.className = "numTab";
    // spanNumTabel.innerText = i;
    // divTabel.appendChild(spanNumTabel);
    // tabellone.appendChild(divTabel);
    tabellone.innerHTML += `<div class="numTabella"><span class="numTab">${i}</span></div>`;
  }
};

// GENERATORE CARTELLE UTENTE
const generateCard = (inputNumber) => {
  const cardTable = document.querySelector(".card-table");

  for (let j = 0; j < inputNumber; j++) {
    const divCard = document.createElement("div");
    divCard.className = "card";
    let usedNumbers = [];
    for (let i = 0; i < 24; i++) {
      const card = document.createElement("div");
      card.className = "casellina";
      let randNum;

      do {
        randNum = Math.floor(Math.random() * 90);
      } while (usedNumbers.includes(randNum));
      usedNumbers.push(randNum);
      card.innerText = randNum;
      divCard.appendChild(card);
    }
    cardTable.appendChild(divCard);
  }
};

// PULSANTE PESCA UN NUMERO
let usedIndex = [];
const btnPesca = document
  .getElementById("btnPesca")
  .addEventListener("click", function (e) {
    let randNum;

    do {
      randNum = Math.floor(Math.random() * 90);
    } while (usedIndex.includes(randNum));
    usedIndex.push(randNum);

    return changeNumber(randNum);
  });

// NUMERO ESTRATTO FUNZIONE
const changeNumber = (randNum) => {
  if (usedIndex.length === 90) {
    return alert("LA PARTITA E' FINITA");
  }

  // cambio stile NUMERO ESTRATTO
  const numberExtracted = document.getElementById("extracted");
  numberExtracted.classList.add("hasNum");
  numberExtracted.innerText = randNum + 1;

  // cambio stile NUMERO TABELLA
  const numTombola = document.querySelectorAll(".numTabella");
  numTombola[randNum].classList.add("selected");

  // cambio stile NUMERO CASELLA
  const cardNumber = document.querySelectorAll(".casellina");
  cardNumber[randNum].classList.add("extracted");
  // if (cardNumber.innerText === randNum + 1) {
  //   cardNumber.classList.add("extracted");
  // }
};

// PULSANTE AGGIUNGI CARTELLE legato a INPUT
const btnList = document
  .getElementById("btnCard")
  .addEventListener("click", function (e) {
    const inputNumber = document.getElementById("randNum");
    const myData = inputNumber.valueAsNumber;

    generateCard(myData);
    inputNumber.value = "";
  });

// GENERAZIONE TABELLA TOMBOLA
window.onload = function () {
  generateMainTable();
};
