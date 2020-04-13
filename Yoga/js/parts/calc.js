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



    //module.exports = calc;