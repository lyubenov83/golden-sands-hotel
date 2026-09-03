const form = document.querySelector("form");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", function(event){
    event.preventDefault();

    formMessage.textContent = "Информацията за връзка е попълнена успешно.";
});