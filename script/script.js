let url = "https://openapi.programming-hero.com/api/levels/all";

fetch(url)
  .then((res) => res.json())
  .then((book) => showData(book.data));


const showData = (lessions) => {
  lessions.forEach((lession) => {
    let container=document.getElementById('lession-btn-container')

    let area=document.createElement('div');
    area.innerHTML=`
    
     <button class="btn btn-soft text-[#422AD5] border-[#422AD5] ">
            <i class="fa-solid fa-book-open"></i>Lession-${lession.level_no}
          </button>

    `
    container.appendChild(area);

    
    
  });
};

