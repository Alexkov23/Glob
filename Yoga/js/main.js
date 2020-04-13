window.addEventListener('DOMContentLoaded', function(){
    'use strict';

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


                //Timer
   

    //let deadline = prompt('Введите дату дедлайна в формате 2020-10-10: ', '');  //1
        
        let deadline = '2020-03-28';
        
        function getTimeRemaining(endtime) {//2
            let t = Date.parse(endtime) - Date.parse(new Date()),
                 seconds = Math.floor((t/1000) % 60),
                minutes = Math.floor((t/1000/60) % 60),
                hours = Math.floor((t/(1000*60*60)));
                //days = Math.floor((t/1000/60/60*24)));
                //hours = Math.floor((t/1000/60/60) % 24);


                return {
                   // let param = `totla: ${t}; hours:${hours}; seconds:${seconds}; minutes:${minutes}`;
                    'total' : t,
                    'hours' : hours,
                    'seconds' : seconds,
                    'minutes' : minutes
                };

        }
   

        function setClock(id, endtime) {
            let timer = document.getElementById(id),
                hours = timer.querySelector('.hours'),
                minutes = timer.querySelector('.minutes'),
                seconds = timer.querySelector('.seconds'),
                timeInterval = setInterval(updateClock, 1000);

                function updateClock() {
                    let t = getTimeRemaining(endtime);


                    function addZero(num){
                        if(num <= 9) {
                            return '0' + num;
                        } else return num;
                    };


                    hours.textContent = t.hours;
                    minutes.textContent = t.minutes;
                    seconds.textContent = t.seconds;

                    if (t.total <= 0){
                         clearInterval(timeInterval);   
                         hours.textContent = '00';
                         minutes.textContent = '00';
                         seconds.textContent = '00';
                    }

                }

        }

        setClock('timer', deadline);

        // Modal

        let more = document.querySelector('.more'),
            overlay = document.querySelector('.overlay'),
            close = document.querySelector('.popup-close'),
            tabBtn = document.querySelectorAll('.description-btn');

            tabBtn.forEach(function(item) {
                item.addEventListener('click', function() {
                    overlay.style.display = 'block';
                    this.classList.add('more-splash');
                    document.body.style.overflow = 'hidden';
                });
            });

            more.addEventListener('click', function() {
                 overlay.style.display = 'block';
                    this.classList.add('more-splash');
                    document.body.style.overflow = 'hidden';
            });

            close.addEventListener('click', function() {
                overlay.style.display = 'none';
                more.classList.remove('more-splash');
                document.body.style.overflow = '';
            });

            // Form


            //создаем объект в котором будет содержаться состояние нашего запроса

            let message = {
                loading: 'Загрузка...',
                success: 'Спасибо, скоро с Вами свяжемся',
                failure: 'Что-то пошло не так'
            };

            // Теперь получаем на странице те элементы, с которыми будем работать

            let form = document.querySelector('.main-form'),
                input = form.getElementsByTagName('input'),
                statusMessage = document.createElement('div');

                statusMessage.classList.add('status');

                form.addEventListener('submit', function(event) {
                    event.preventDefault(); //отменяем стандартную перезагрузку страницы
                    form.appendChild(statusMessage);

                    let request = new XMLHttpRequest();
                    //настраиваем запрос
                    request.open('POST', 'server.php');
                    // request.setRequestHeader('Content-type', 'application/x-www-form-urlencoded');

                    //если надо отправить данные на сервер в джейсон формате то используем эту строчку 
                    request.setRequestHeader('Content-type', 'application/json; charset=utf8');

                    //получаем данные которые ввел пользователь
                    let formData = new FormData(form);

                    //если надо отправить данные на сервер в джейсон формате то используем эту строчку 
                    //преобразовывавем данные в джейсон формат.

                    let obj = {};
                    formData.forEach(function(value, key){
                           obj[key] = value; 
                    });
                    let json = JSON.stringify(obj);



                    request.send(json);

                    request.addEventListener('readystatechange', function() {
                        if (request.readyState < 4) {
                            statusMessage.innerHTML = message.loading;
                        } else if (request.readyState === 4 && request.status == 200) {
                            statusMessage.innerHTML = message.success;
                        } else {
                            statusMessage.innerHTML = message.failure;
                        }
                    });


                    //очищаем инпуты перебирая их

                    for (let i = 0; i < input.length; i++) {
                        input[i].value = ' '; //input[i] каждый импут находим
                    }

                });



                // contact form
                // Теперь получаем на странице те элементы, с которыми будем работать


                let contactForm = document.getElementById('form'),
                    contactInput = contactForm.getElementsByTagName('input'),
                    contactMessage = document.createElement('div'); // создали новый элемент на странице

                    contactMessage.classList.add('status'); // это мы создали новый класс на странице 

                    // навешиваем обработчик событий на всю форму, а не на кнопку отправить
                    contactForm.addEventListener('submit', function(event) {
                        event.preventDefault(); //отменяем стандартную перезагрузку страницы
                        contactForm.appendChild(contactMessage); // добавляем статус запроса в конец формы, будет на странице под формой показываться

                        // создание запроса

                        let request = new XMLHttpRequest();
                         //настраиваем запрос
                         request.open("POST", "server.php");
                        //отправляем данные на сервер в джейсон формате то используем эту строчку
                        request.setRequestHeader("Content-type", "application/json; chatset=utf8");

                        //получаем данные которые ввел пользователь
                        let formData = new FormData(contactForm); // это мы создаем однотипный объект с помощью функции-конструктора
                        //если надо отправить данные на сервер в джейсон формате то используем эту строчку 
                        //преобразовывавем данные в джейсон формат.

                        let obj = {};
                        formData.forEach(function(value, key){
                        obj[key] = value; 
                         });
                        let json = JSON.stringify(obj);

                        request.send(json);


                        // обработчик событий навешиваем на запрос чтобы выводить соответствующий статус взависимости от состояния сервера
                        request.addEventListener('readystatechange', function() {
                            if (request.readyState < 4) {
                                contactForm.innerHTML = message.loading; 
                            } else if (request.readyState === 4 && request.status == 200) {
                                contactForm.innerHTML = message.success;
                            } else {
                                contactForm.innerHTML = message.failure;
                            }

                            // очищаем интпут после ввода
                            for (let i = 0; i < contactInput.length; i++) {
                                contactInput[i].value = ' ';
                            }

                        });
                    
                    });


                    //Slider
                    
                    let slideIndex = 1, //тот слайд который показывается в текущий момент
                        slides = document.querySelectorAll('.slider-item'),
                        prev = document.querySelector('.prev'),
                        next = document.querySelector('.next'),
                        dotsWrap = document.querySelector('.slider-dots'),
                        dots = document.querySelectorAll('.dot');
                        
                    showSlides(slideIndex);


                    // нам нужно несколько функций 
                    
                    function showSlides(n) {

                        if (n > slides.length){
                            slideIndex = 1;
                        }
                        if (n< 1) {
                            slideIndex = slides.length;
                        }

                        slides.forEach((item) => item.style.display = 'none');


                        // for (let i = 0; i < slides.length; i++) {
                        //     slides[i].style.display = 'none';
                        // }

                        dots.forEach((item) => item.classList.remove('dot-active'));
                        
                        slides[slideIndex - 1].style.display = 'block';
                        dots[slideIndex - 1].classList.add('dot-active');
                        

                    }

                    function plusSlides (n) {
                        showSlides(slideIndex += n);

                    }


                    function currentSlide(n) {
                        showSlides(slideIndex = n);
                    }

                    prev.addEventListener('click', function() {
                        plusSlides(-1);
                    });

                    next.addEventListener('click', function() {
                        plusSlides(1);
                    });

                    // делегирование для кликания по точкам, поэтому обязательно нужен evant

                    dotsWrap.addEventListener('click', function(event) {
                        for (let i = 0; i < dots.length + 1; i++) {
                            if (event.target.classList.contains('dot') && event.taget == dots[i-1]) {
                                currentSlide(i);
                            }
                        }
                    });

                    // Калькулятор


                    let persons = document.querySelectorAll('.counter-block-input')[0],
                        restDays = document.querySelectorAll('.counter-block-input')[1],
                        place = document.getElementById('select'),
                        totalValue = document.getElementById('total'),
                        personsSum = 0,
                        daysSum = 0,
                        total = 0;

                        totalValue.innerHTML = 0;


                        persons.addEventListener('change', function() {
                            personsSum = +this.value; // записывем то значение, которое ввел пользователь
                            total = (daysSum * personsSum) * 4000;

                            if(restDays.value == '' /*|| persons.value == ''*/) {
                                totalValue.innerHTML = 0;
                            } else {
                                totalValue.innerHTML = total;
                            }
                        });


                        restDays.addEventListener('change', function() {
                            daysSum = +this.value; // записывем то значение, которое ввел пользователь
                            total = (daysSum * personsSum) * 4000;

                            if(persons.value == '' /*|| restDays.value == ''*/) {
                                totalValue.innerHTML = 0;
                            } else {
                                totalValue.innerHTML = total;
                            }
                        });




                        place.addEventListener('change', function() {
                            if(persons.value == '' || restDays.value == '') {
                                totalValue.innerHTML = 0;
                            } else {
                                let a = total; // чтобы постоянно не увеличивалась сумма
                                totalValue.innerHTML = a * this.options[this.selectedIndex].value;
                            }
                        });

    });