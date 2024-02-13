btn.addEventListener('click', createObject);

function createObject() {
    var user = {
        name: input_name.value,
        surname: input_surname.value,
        age: +input_age.value
    };
    greeting.innerHTML = "Привет, " + user.name + " " + user.surname + ", круто, что тебе " + user.age;
}


