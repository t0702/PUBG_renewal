/* PC */
var heroName = document.getElementsByClassName("type_wrap"),
    heroLi = document.querySelectorAll(".type"),
    hmcHero = document.getElementsByClassName("weapon-wrap2");

for (var i = 0; i < heroLi.length; i++) {
  heroLi[i].addEventListener("click", function(ev) {
    for (var j = 0; j < heroName.length; j++) {
      heroName[j].classList.remove("active");
      ev.target.parentNode.classList.add("active");
      heroLi = Array.prototype.slice.call(heroLi);
      var el = ev.currentTarget, index = heroLi.indexOf(el);
          SlideCountAll = SlidesContainer[index].children.length;
          console.log(SlideCountAll);

      idx = 0;
      activateBody();
      goToSlide(0);
    }
  });
}
function activateBody() {
  for (var j = 0; j < hmcHero.length; j++) {
    hmcHero[j].style.display = "none";
  }
  var activePanel = document.querySelector(".type_wrap.active .weapon-wrap2");
  activePanel.style.display = "flex";
}
activateBody();

var sliderContainer = document.querySelectorAll('.type_wrap .slider-container'),
    SlidesContainer = document.querySelectorAll('.slider-container'),
    Slides = document.querySelectorAll('.slider'),
    currentIndex = 0,
    SlideCountAll = SlidesContainer[0].children.length;
    btnPrev = document.getElementById('prev'),
    btnNext = document.getElementById('nex');

SlidesContainer = Array.prototype.slice.call(SlidesContainer);
Slides = Array.prototype.slice.call(Slides);
console.log(SlidesContainer[0].children);

for(var i = 0; i < SlidesContainer.length; i++ ){
  for(var j = 0; j < SlidesContainer[i].children.length; j++){
    SlidesContainer[i].children[j].style.left = (j * 100)+ '%';
  }
}

function goToSlide(idx){ // 슬라이드 이동 함수 
  for(var k = 0; k < sliderContainer.length; k++){
    sliderContainer[k].style.left = (idx * -100) + '%';
    sliderContainer[k].classList.add('animated');
  }
    currentIndex = idx;
    console.log(idx);
}

btnPrev.addEventListener('click',function(e){
    e.preventDefault();
    if(currentIndex > 0){
        goToSlide(currentIndex - 1);
    }else{
        goToSlide(SlideCountAll-1);
    }
});

btnNext.addEventListener('click',function(e){
    e.preventDefault();
    if(currentIndex < SlideCountAll - 1){
        goToSlide(currentIndex + 1);
    }else{
        goToSlide(0);
    }
});

goToSlide(0);


