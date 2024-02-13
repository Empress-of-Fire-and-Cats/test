btn.addEventListener('click', createObject);

function createObject() {
    var user = {
        name: input_name.value,
        surname: input_surname.value,
        age: +input_age.value
    };
    if (user.name == "" || user.surname == "" || user.age == "") {
        greeting.innerHTML = "Вы не заполнили все поля, не будьте, как Сережа Малышев, фу-фу-фу, а то ездить вам всю жизнь на детроит дизеле и ни одна милфа на вас не посмотрит, а жена будет с вашим отцом вечера проводить";
    } else {
        greeting.innerHTML = "Привет, " + user.name + " " + user.surname + ", круто, что тебе " + user.age;
    };
}


