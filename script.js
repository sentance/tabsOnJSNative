window.addEventListener('DOMContentLoaded', function(){
    'use stict';
    //take parent class with tabs
    let tab = document.querySelectorAll('.info-header-tab'),
    //take header class
    info = document.querySelector('.info-header'),
    //tab with our content
    tabContent = document.querySelectorAll ('.info-tabcontent');
    
    //hide all content
    function hideTabContent(a) {
        for (let i = a; i < tabContent.length; i++){
            tabContent[i].classList.remove('show');
            tabContent[i].classList.add('hide');
        }
    }
    hideTabContent(1);

    //show tabcontent
    function showTabContent(b){
        if(tabContent[b].classList.contains('hide')) {
            tabContent[b].classList.remove('hide');
            tabContent[b].classList.add('show');
        }
    }


    //add eventlistener to our tabs. When we click on header tab script shows content
    info.addEventListener('click', function(event){
        let target = event.target;
        if(target && target.classList.contains('info-header-tab')) {
            for (let i =0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTabContent(0);
                    showTabContent(i);
                    break;
                }
            }
        }
    });
});
