let url = "https://openapi.programming-hero.com/api/levels/all";

fetch(url)
  .then((res) => res.json())
  .then((book) => showData(book.data));
// remove active class from all button
let removeActive = () => {
  let activebuttonClear = document.getElementsByClassName("common-btn");
  for (let actbtn of activebuttonClear) {
    actbtn.classList.remove("active");
  }
  // activebuttonClear.forEach((colorBtn)=>{
  //   colorBtn.classList.remove('active');
  // })
};

const loadLiveWord = (id) => {
  let url = `https://openapi.programming-hero.com/api/level/${id}`;
  let activeButton = document.getElementById(`activeBtn-${id}`);
  removeActive();
  activeButton.classList.add("active");

  // console.log(url);
  fetch(url)
    .then((respon) => respon.json())
    .then((responData) => showWord(responData.data));
};

const showWord = (words) => {
  let wordArea = document.getElementById("word-container");
  wordArea.innerHTML = "";

  if (words.length === 0) {
    wordArea.innerHTML = `
    <div class="default-text  col-span-full text-center p-10 space-y-9 bg-[#79716B10]">
     <img src="./assets/alert-error.png" alt="" class="mx-auto" >
        <p class="text-2xl font-semibold hind ">এই Lesson এ এখনো কোন Vocabulary যুক্ত করা হয়নি।</p>
        <h2 class="text-6xl font-bold hind">নেক্সট Lesson এ যান</h2>
      </div>
    `;
    return;
  }

  words.forEach((word) => {
    let wordElement = document.createElement("div");

    // console.log(word);

    wordElement.innerHTML = `
     <div class="card shadow p-4 h-full">
          <div class="card-body items-center text-center space-y-4 ">
            <h2 class="card-title text-2xl">${word.word}!</h2>
           
            <p class="text-[#18181B] text-2xl ">Meaning: ${
              word.meaning
                ? word.meaning
                : '<span class="text-[red] "> "অর্থ পাওয়া যায়নি"</span>'
            } </p>
            <p class="text-[#18181B] text-2xl">Pronouciation: ${
              word.pronunciation
                ? word.pronunciation
                : '<span class="text-[red]"> "উচ্চারন পাওয়া যায়নি"</span>'
            } </p>
            <div class="card-actions flex justify-between w-full">
              <button onclick="wordDetails(${
                word.id
              })"><i class="fa-solid fa-circle-question"></i></button>
              <button><i class="fa-solid fa-volume-high"></i></button>
            </div>
          </div>
        </div>
    `;
    // console.log(word);

    wordArea.appendChild(wordElement);
  });
};

// Word Details

let wordDetails = (id) => {
  let wordUrl = `https://openapi.programming-hero.com/api/word/${id}`;

  fetch(wordUrl)
    .then((res) => res.json())
    .then((data) => showWordDetails(data.data));
};
// Synonames function

let syno = (fruits) => {
  let newList = fruits.map((fruit) => `<span> ${fruit}</span>`);
  // return(newList.join(''));
  // console.log(newList);
  return newList.join(" ");

  // return newList;
};

let showWordDetails = (data) => {
  // console.log(data);

  // <h3 class="bg-blue-100 py-2 px-6 rounded-md">synonamesFunction(data.synonyms)</h3>
  my_modal_5.showModal();

  let wordArea = document.getElementById("my_modal_5");
  wordArea.innerHTML = `

  <div  class="p-2 space-y-5 bg-white rounded-md">
<div class="inner  space-y-2 p-4 rounded-md">
  <h2 class="text-2xl font-bold">${
    data.word
  } <span>(<i class="fa-solid fa-microphone-lines"></i>${
    data.pronunciation
  })</span></h2>
<p class="font-bold">Meaning</p>
<p class="font-semibold">${
    data.meaning
      ? data.meaning
      : `<span class="text-red-600">খুজে পাওয়া যায় নি</span>`
  }</p>
<p class="font-bold">example</p>
<p class="text-black">${data.sentence}</p>
<p class="font-bold">সমার্থক শব্দগুলো</p>
<div class="similarContainer flex gap-4 ">
  
  <div class="bg-blue-100 py-2 px-2 rounded-md mr-2">${syno(data.synonyms)}</div>

</div>
</div>
<button class="bg-[#422AD5] py-3 px-8 rounded-md text-white">Complete Learning</button>
     <div class="modal-action">
      <form method="dialog">
        <!-- if there is a button in form, it will close the modal -->
        <button class="btn">Close</button>
      </form>
    </div>
</div>
  
  `;
  document.getElementById("my_modal_5").showModal();
};

const showData = (lessions) => {
  lessions.forEach((lession) => {
    let container = document.getElementById("lession-btn-container");

    let area = document.createElement("div");
    area.innerHTML = `
    
     <button id="activeBtn-${lession.level_no}" onclick='loadLiveWord(${lession.level_no})' class="btn btn-soft text-[#422AD5] border-[#422AD5] common-btn">
            <i class="fa-solid fa-book-open"></i>Lession-${lession.level_no}
          </button>

    `;
    container.appendChild(area);
  });
};
