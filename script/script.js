let url = "https://openapi.programming-hero.com/api/levels/all";

fetch(url)
  .then((res) => res.json())
  .then((book) => showData(book.data));

const loadLiveWord = (id) => {
  let url = `https://openapi.programming-hero.com/api/level/${id}`;
  // console.log(url);
  fetch(url)
    .then((respon) => respon.json())
    .then((responData) => showWord(responData.data));
};

const showWord = (words) => {
  let wordArea = document.getElementById("word-container");
  wordArea.innerHTML = "";
  words.forEach((word) => {
    let wordElement = document.createElement("div");

    wordElement.innerHTML = `
     <div class="card shadow p-4">
          <div class="card-body items-center text-center">
            <h2 class="card-title text-2xl">${word.word}!</h2>
            <p>pronouciation</p>
            <p class="text-[#18181B] text-2xl">${word.pronunciation}</p>
            <div class="card-actions flex justify-between w-full">
              <div><i class="fa-solid fa-circle-question"></i></div>
              <div><i class="fa-solid fa-volume-high"></i></div>
            </div>
          </div>
        </div>
    `;
    wordArea.appendChild(wordElement);
  });
};

const showData = (lessions) => {
  lessions.forEach((lession) => {
    let container = document.getElementById("lession-btn-container");

    let area = document.createElement("div");
    area.innerHTML = `
    
     <button onclick='loadLiveWord(${lession.level_no})' class="btn btn-soft text-[#422AD5] border-[#422AD5] ">
            <i class="fa-solid fa-book-open"></i>Lession-${lession.level_no}
          </button>

    `;
    container.appendChild(area);
  });
};
