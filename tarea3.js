const $botonCalcular = document.querySelector("button");

$botonCalcular.onclick = function () {
  const $arrayValores = document.querySelectorAll("li");
  let minimo = Number.POSITIVE_INFINITY;
  let maximo = Number.NEGATIVE_INFINITY;
  let sumatoria = 0;
  let repeticiones = [];
  let indexMaxRepeticiones = 0;

  for (let i = 0; i < $arrayValores.length; i++) {
    if (Number($arrayValores[i].innerText) < minimo) {
      minimo = Number($arrayValores[i].innerText);
    }
    if (Number($arrayValores[i].innerText) > maximo) {
      maximo = Number($arrayValores[i].innerText);
    }
    sumatoria = sumatoria + Number($arrayValores[i].innerText) || 0;
    repeticiones.push(0);
    for (let j = 0; j < $arrayValores.length; j++) {
      if (Number($arrayValores[i].innerText) === Number($arrayValores[j].innerText)) {
        repeticiones[i]++;
      }
    }
    if (repeticiones[i] > indexMaxRepeticiones) {
      indexMaxRepeticiones = i;
    }
  }

  let promedio = sumatoria / $arrayValores.length;
  document.querySelector("#minimo").innerText = "El valor minimo es " + minimo;
  document.querySelector("#maximo").innerText = "El valor maximo es " + maximo;
  document.querySelector("#promedio").innerText = "El valor promedio es " + promedio;
  document.querySelector("#repetido").innerText = "El valor mas repetido es " + $arrayValores[indexMaxRepeticiones].innerText;
};
