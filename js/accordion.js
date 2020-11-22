var menuArea = document.getElementsByClassName('menu-area'),
    activeMenu = document.getElementsByClassName('menu-area active'),
    heading = document.getElementsByClassName('menu-heading'),
    listArea = document.getElementsByClassName('list-area');
    
for(var i = 0; i <heading.length; i++){
    heading[i].addEventListener('click', function(e){
        if(!e.target.parentNode.classList.contains('active')){
            for( var j = 0; j < menuArea.length; j++){
                menuArea[j].classList.remove('active');
                e.target.parentNode.classList.add('active');
            }
        } else {
            e.target.parentNode.classList.remove('active');
        }
        activelist(); 
    })              
}

function activelist(){
    for(var x = 0; x < listArea.length; x++){
        listArea[x].style.display = 'none';
    }
    const activePanel = document.querySelectorAll('.menu-area.active .list-area'); //querySelector : css선택자
    for( var y = 0; y < activePanel.length; y++){
        activePanel[y].style.display = "block";
    }
    
}