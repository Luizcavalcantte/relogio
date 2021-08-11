var body = document.getElementById("body");
var container = document.getElementById("container");
var horas = document.getElementById("horas");
var dataExtenso = document.getElementById("dataExtenso");
var dataNumber = document.getElementById("dataNumber");

body.style.display = "flex";
body.style.flexDirection = "column";
body.style.alignItems = "center";
body.style.backgroundColor = "gray";

container.style.fontFamily = "monospace";
container.style.fontSize = "30px";
container.style.textAlign = "center";
container.style.border = "white 1px solid";
container.style.borderRadius = "8px";
container.style.display = "inline-block";
container.style.padding = "15px";
container.style.backgroundColor = "black";
container.style.color = "white";

dataNumber.style.fontSize = "15px";
dataNumber.style.marginLeft = "80%";
dataNumber.style.marginTop = "10px";

function relogio() {
  var hora = new Date().getHours();
  var minuto = new Date().getMinutes();
  var segundos = new Date().getSeconds();

  var dia = new Date().getDate();
  var mes = new Date().getMonth() + 1;
  var ano = new Date().getFullYear();

  var semana = new Date().getDay();
  var diaSemana = "";
  var mesNome = "";
  switch (semana) {
    case 0:
      diaSemana = "Domingo";
      break;
    case 1:
      diaSemana = "Segunda-feira";
      break;
    case 2:
      diaSemana = "Terça-feira";
      break;
    case 3:
      diaSemana = "Quarta-feira";
      break;
    case 4:
      diaSemana = "Quinta-feira";
      break;
    case 5:
      diaSemana = "Sexta-feira";
      break;
    case 6:
      diaSemana = "Sabado";
      break;
    default:
      diaSemana = "";
  }
  switch (new Date().getMonth()) {
    case 0:
      mesNome = "Janeiro";
      break;
    case 1:
      mesNome = "Fevereiro";
      break;
    case 2:
      mesNome = "Março";
      break;
    case 3:
      mesNome = "Abril";
      break;
    case 4:
      mesNome = "Maio";
      break;
    case 5:
      mesNome = "Junho";
      break;
    case 6:
      mesNome = "Julho";
      break;
    case 7:
      mesNome = "Agosto";
      break;
    case 8:
      mesNome = "Setembro";
      break;
    case 9:
      mesNome = "Outubro";
      break;
    case 10:
      mesNome = "Novembro";
      break;
    case 11:
      mesNome = "Dezembro";
      break;
  }

  var formatoCalendario =
    (dia < 10 ? "0" + dia : dia) +
    "/" +
    (mes < 10 ? "0" + mes : mes) +
    "/" +
    ano;

  var formatoRelogio =
    (hora < 10 ? "0" + hora : hora) +
    ":" +
    (minuto < 10 ? "0" + minuto : minuto) +
    ":" +
    (segundos < 10 ? "0" + segundos : segundos);

  horas.innerHTML = formatoRelogio;
  dataExtenso.innerHTML = diaSemana + ", " + dia + " de " + mesNome;
  dataNumber.innerHTML = formatoCalendario;
}

relogio();
setInterval(relogio, 1000);
