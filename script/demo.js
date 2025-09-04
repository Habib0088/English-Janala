// (----1----) 
let urlAll = "https://openapi.programming-hero.com/api/levels/all";
fetch(urlAll)
  .then((data) => data.json())
  .then((datas) => lessonBtn(datas.data));

let wordLessons=(id)=>{
    let wordUrl=`https://openapi.programming-hero.com/api/level/${id}`
    fetch(wordUrl).then(a=>a.json()).then(b=>showWordCard(b.data)
    )
    

}

let showWordCard=(cards)=>{
    cards.forEach(card=>{
        let cardArea=document.getElementById('word-container')

        let cardCreate=document.createElement('div');
        cardCreate.innerHTML=`
         <div class="card shadow p-4">
          <div class="card-body items-center text-center">
            <h2 class="card-title text-2xl">${card.word}!</h2>
            <p>pronouciation</p>
            <p class="text-[#18181B] text-2xl">${card.pronunciation}</p>
            <div class="card-actions flex justify-between w-full">
              <div><i class="fa-solid fa-circle-question"></i></div>
              <div><i class="fa-solid fa-volume-high"></i></div>
            </div>
          </div>
        </div>
        `
        cardArea.appendChild(cardCreate);
    })
}

// (----2----)  Making btn funtio calling getting data from the 1st function
  let lessonBtn=(lessons)=>{

    const btnArea=document.getElementById('lession-btn-container');
    lessons.forEach(lesson=>{
        let btn=document.createElement('div');
        btn.innerHTML=`
         <button onclick="wordLessons(${lesson.level_no})" class="btn btn-soft text-[#422AD5] border-[#422AD5] ">
            <i class="fa-solid fa-book-open"></i>Lession-${lesson.level_no}
          </button>
        `
        btnArea.appendChild(btn);
    })
  }