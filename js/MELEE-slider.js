// 변수 지정
var sliderContainer = document.getElementsByClassName('slider-container'),
    MeleeSlides = document.getElementsByClassName('MELEE-slider'),
    MeleeSlideCount = MeleeSlides.length,
    MeleeCurrentIndex = 0,
    btnPrev = document.getElementById('prev'),
    btnNext = document.getElementById('nex');

// 슬라이드가 있으면 가로로 배열하기
for( var i = 0; i < MeleeSlideCount; i++){
    MeleeSlides[i].style.left = (i * 100)+ '%';
}

// 슬라이드 이동 함수 
function MeleeGoToSlide(idx){
    sliderContainer[7].style.left = (idx * -100) + '%';
    sliderContainer[7].classList.add('animated');
    MeleeCurrentIndex = idx;
}


//버튼 클릭하면 슬라이드 이동시키기
btnPrev.addEventListener('click',function(e){
    e.preventDefault();
    if(MeleeCurrentIndex > 0){
        MeleeGoToSlide(MeleeCurrentIndex - 1);
    }else{
        MeleeGoToSlide(MeleeSlideCount-1);
    }

});

btnNext.addEventListener('click',function(e){
    e.preventDefault();
    //goToSlide(currentIndex + 1);

    if(MeleeCurrentIndex < MeleeSlideCount - 1){
        MeleeGoToSlide(MeleeCurrentIndex + 1);
    }else{
        MeleeGoToSlide(0);
    }
});

// 첫번째 슬라이드 먼저 보이도록 하기
MeleeGoToSlide(0);



