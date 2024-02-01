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
const generateCard = (inputNumber) => {
  const cardTable = document.querySelector(".card-table");

  for (let j = 0; j < inputNumber; j++) {
    const divCard = document.createElement("div");
    divCard.className = "card";
    let usedNumbers = [];
    console.log(usedNumbers);
    for (let i = 0; i < 24; i++) {
      const card = document.createElement("div");
      card.className = "casellina";
      let randNum;

      do {
        randNum = Math.floor(Math.random() * 90) + 1;
      } while (usedNumbers.includes(randNum));
      usedNumbers.push(randNum);
      card.innerText = randNum;
      divCard.appendChild(card);
    }
    cardTable.appendChild(divCard);
  }
};

const btnList = document
  .getElementById("btnCard")
  .addEventListener("click", function (e) {
    const inputNumber = document.getElementById("randNum");
    const myData = inputNumber.valueAsNumber;

    generateCard(myData);
    inputNumber.value = "";
  });

window.onload = function () {
  generateMainTable();
};
