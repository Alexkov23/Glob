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

        module.exports = form;