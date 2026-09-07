const form = document.querySelector("#contactForm");
const formMessage = document.querySelector("#formMessage");

form.addEventListener("submit", function(event){
    event.preventDefault();

    formMessage.innerText = "Информацията за връзка е попълнена успешно.";
});