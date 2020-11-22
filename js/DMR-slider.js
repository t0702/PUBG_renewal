var DmrSlides = document.getElementsByClassName('DMR-slider'),
    DmrSlideCount = DmrSlides.length,
    DmrCurrentIndex = 0,
    btnPrev = document.getElementById('prev'),
    btnNext = document.getElementById('nex');

for( var i = 0; i < DmrSlideCount; i++){
    DmrSlides[i].style.left = (i * 100)+ '%';
}

function DmrGoToSlide(idx){
    sliderContainer[2].style.left = (idx * -100) + '%';
    sliderContainer[2].classList.add('animated');
    DmrCurrentIndex = idx;
}

btnPrev.addEventListener('click',function(e){
    e.preventDefault();
    if(DmrCurrentIndex > 0){
        DmrGoToSlide(DmrCurrentIndex - 1);
    }else{
        DmrGoToSlide(DmrSlideCount-1);
    }

});
btnNext.addEventListener('click',function(e){
    e.preventDefault();
    if(DmrCurrentIndex < DmrSlideCount - 1){
        DmrGoToSlide(DmrCurrentIndex + 1);
    }else{
        DmrGoToSlide(0);
    }
});
DmrGoToSlide(0);
