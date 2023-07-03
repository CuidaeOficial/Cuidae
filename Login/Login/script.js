// Selecionando elementos
const container = document.querySelector(".container"); // Seleciona o elemento com a classe "container"
const pwShowHide = document.querySelectorAll(".showHidePw"); // Seleciona todos os elementos com a classe "showHidePw"
const pwFields = document.querySelectorAll(".password"); // Seleciona todos os elementos com a classe "password"
const signUp = document.querySelector(".signup-link"); // Seleciona o elemento com a classe "signup-link"
const login = document.querySelector(".login-link"); // Seleciona o elemento com a classe "login-link"

// Função para mostrar/ocultar a senha e alterar o ícone
pwShowHide.forEach(eyeIcon => {
    eyeIcon.addEventListener("click", () => {
        pwFields.forEach(pwField => {
            if (pwField.type === "password") { // Verifica se o tipo do campo de senha é "password"
                pwField.type = "text"; // Muda o tipo do campo de senha para "text"

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye-slash", "uil-eye"); // Substitui a classe do ícone para exibir o olho aberto
                });
            } else {
                pwField.type = "password"; // Muda o tipo do campo de senha para "password"

                pwShowHide.forEach(icon => {
                    icon.classList.replace("uil-eye", "uil-eye-slash"); // Substitui a classe do ícone para exibir o olho riscado
                });
            }
        });
    });
});

    // js code to appear signup and login form
    // signUp.addEventListener("click", ( )=>{
    //     container.classList.add("active");
    // });
    // login.addEventListener("click", ( )=>{
    //     container.classList.remove("active");
    // });