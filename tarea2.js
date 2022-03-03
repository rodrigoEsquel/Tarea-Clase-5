const $botonSumarTiempos = document.querySelector("button");
$botonSumarTiempos.onclick = function () {
  let horas = 0;
  let minutos = 0;
  let segundos = 0;
  const $arrayHora = document.querySelectorAll(".hh");
  const $arrayMinuto = document.querySelectorAll(".mm");
  const $arraySegundo = document.querySelectorAll(".ss");
  for (let i = 0; i < $arraySegundo.length; i++) {
    segundos = segundos + Number($arraySegundo[i].value) || 0;
  }
  minutos = Math.trunc(segundos / 60);
  segundos = segundos % 60;
  for (let i = 0; i < $arrayMinuto.length; i++) {
    minutos = minutos + Number($arrayMinuto[i].value) || 0;
  }
  horas = Math.trunc(minutos / 60);
  minutos = minutos % 60;
  for (let i = 0; i < $arrayHora.length; i++) {
    horas = horas + Number($arrayHora[i].value) || 0;
  }
  document.querySelector("#resultado").value =
    horas + ":" + minutos + ":" + segundos;
  return false;
};
