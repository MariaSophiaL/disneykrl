document.addEventListener("DOMContentLoaded", function() {
    
    function registerUser(event) {
        event.preventDefault();


        const nome = document.getElementById("nome").value;
        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        if (nome && email && senha) {
          
            const users = JSON.parse(localStorage.getItem("users")) || [];
            users.push({ nome, email, senha });
            localStorage.setItem("users", JSON.stringify(users));

            alert("Cadastro realizado com sucesso! Você pode agora explorar o Mundo Mágico da Disney.");

            window.location.href = "home.html"; 
        } else {
            alert("Por favor, preencha todos os campos.");
        }
    }

    function loginUser(event) {
        event.preventDefault();

        const email = document.getElementById("email").value;
        const senha = document.getElementById("senha").value;

        const users = JSON.parse(localStorage.getItem("users")) || [];
        const user = users.find(u => u.email === email && u.senha === senha);

        if (user) {
            alert("Bem-vindo, " + user.nome + "!");
           
            window.location.href = "home.html";  
        } else {
            alert("Credenciais inválidas. Tente novamente.");
        }
    }

    
    window.registerUser = registerUser;
    window.loginUser = loginUser;
});
