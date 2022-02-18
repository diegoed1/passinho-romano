let botao = document.querySelector("#buttons")

let texto = document.getElementById("codigo")

let resultField = document.querySelector('resultado')


let inputCodificar = document.querySelector("#codificar")
let inputDecodificar = document.querySelector("#decodificar")

function mudaCodigo() {
    botao.textContent = "Codificar Mensagem!"
    
}
function mudarDec() {
    botao.textContent = "Decodificar Mensagem!"
    onclick=decode()
}

inputCodificar.addEventListener("click", function () {
    mudaCodigo()
})

inputDecodificar.addEventListener("click", function () {
    mudarDec()
})

//aparecer uma div consoante a select escolhida js puro
var select = document.getElementById("id_escolha");
var incrementos = document.querySelectorAll('.incremento');

select.onchange = function () {
    for (var i = 0; i < incrementos.length; i++) incrementos[i].style.display = 'none';
    var divID = select.options[select.selectedIndex].value;
    var div = document.getElementById(divID);
    div.style.display = 'block';
};

//reconhecer texto adicionado e codificar e descodificar César
document.getElementById("cifrar").addEventListener("click", code);
document.getElementById("decifrar").addEventListener("click", decode);
document.getElementById("limpar").addEventListener("click", limpar);

function cifrar(string, offset) {
  let newText = "";
  let num;
  for (let i = 0; i < string.length; i++) {
    num = string.charCodeAt([i]);
    if (num >= 65 && num <= 90) {
      num = ((num - 65 + offset) % 26) + 65;
      newText = newText.concat(String.fromCharCode(num));
    }
    else if (num >= 97 && num <= 122) {
      num = ((num - 97 + offset) % 26) + 97;
      newText = newText.concat(String.fromCharCode(num));
    }
    else {
      newText = newText.concat(String.fromCharCode(num));
    }
  }
  return newText;
}

function code() {
  const string = document.getElementById("texto").value;
  const offset = parseInt(document.getElementById("offset").value);
  const result = cifrar(string, offset);

  document.getElementById("result").innerHTML =
  ("<br>"+"<h3 id='titulo2'>Mensagem cifrada:</h3>" +
    "<textarea rows=5 cols=40>" + result + "</textarea><br>");
}

function decifrar(string, offset) {
  let newText = "";
  let num;
  for (let i = 0; i < string.length; i++) {
    num = string.charCodeAt([i]);
    if (num >= 65 && num <= 90) {
      num = ((num - 90 - offset) % 26) + 90;
      newText = newText.concat(String.fromCharCode(num));
    }
    else if (num >= 97 && num <= 122) {
      num = ((num - 122 - offset) % 26) + 122;
      newText = newText.concat(String.fromCharCode(num));
    }
    else {
      newText = newText.concat(String.fromCharCode(num));
    }
  }
  return newText;
}

function decode() {
  const string = document.getElementById("texto").value;
  const offset = parseInt(document.getElementById("offset").value);
  const result = decifrar(string, offset);

  document.getElementById("result").innerHTML =
    ("<br>"+"<h3 id='titulo2'>Mensagem decifrada:</h3>" +
      "<textarea rows=5 cols=40>" + result + "</textarea><br>");
}

function limpar() {
  location.reload();
}


