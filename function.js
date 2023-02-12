var user = { username: "", password: "" };

var usuarioCorreto = {
  username: "Gabi",
  password: "123456",
};

let login = document.getElementById("login");
let username = document.getElementById("username");
let password = document.getElementById("password");
const handleChangeUsername = (e) => {
  user.username = e.target.value;
};
const handleChangePassword = (e) => {
  user.password = e.target.value;
};

login.addEventListener("click", clicou);
username.addEventListener("change", handleChangeUsername);
password.addEventListener("change", handleChangePassword);

let checkUsuario;
let checkSenha;

function clicou() {
  let checkUsuario = username.value == usuarioCorreto.username;
  let checkSenha = password.value == usuarioCorreto.password;

  if (checkUsuario && checkSenha) {
    alert("Pode entrar");
  } else {
    alert("Credenciais incorretos");
  }
}
