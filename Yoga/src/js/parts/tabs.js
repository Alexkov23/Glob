function tabs(){
    let info = document.querySelector('.info-header'),
    tab = document.querySelectorAll('.info-header-tab'),
    tabContent = document.querySelectorAll('.info-tabcontent');
    

    let hideTab = (a) => {
        for(let i = a; i < tabContent.length; i++){
          tabContent[i].classList.remove('show'); 
          tabContent[i].classList.add('hide'); 
      }
    };
    hideTab(1);

    let showTab = (b) => {
         if(tabContent[b].classList.contains('hide')) {
        tabContent[b].classList.remove('hide'); 
        tabContent[b].classList.add('show');
      }
    };

  info.addEventListener('click', function(event) {
      let target = event.target;
      if(target && target.classList.contains('info-header-tab')) {
            for(let i = 0; i < tab.length; i++) {
                if(target == tab[i]) {
                    hideTab(0);
                    showTab(i);
                    break;
                }
            }
      }
  });
}

module.exports = tabs;