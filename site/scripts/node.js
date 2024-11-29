// Manipulação de formulário (exemplo)
document.getElementById("login-form").addEventListener("submit", function(event) {
  event.preventDefault(); // Evita o recarregamento da página
  alert("Login enviado!");
});
function onSignIn(googleUser) {
    // Obtém o perfil do usuário
    var profile = googleUser.getBasicProfile();
    console.log("Nome: " + profile.getName());
    console.log("Email: " + profile.getEmail());

    // Pode armazenar o token de acesso ou usar as informações conforme necessário
    var id_token = googleUser.getAuthResponse().id_token;

    // Exemplo de redirecionamento após login com sucesso
    window.location.href = "pagina_principal.html"; // Redireciona para a página principal após login
}