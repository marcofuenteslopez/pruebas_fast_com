function prueba(maximo = 120, milisegundos = 300000){
  var boton = document.getElementById('speed-progress-indicator-icon');
  var resultado = document.getElementById('speed-value');
  var pruebas = 1;
  var resultados = {};

  function saveText(text, name){
    var a = document.createElement('a');
    a.setAttribute('href','data:text/plain;charset=utf-8,'+encodeURIComponent(text));
    a.setAttribute('download', name);
    a.click();
  }

  boton.click();
  var intervalo = setInterval(realizaPrueba,milisegundos);

  function realizaPrueba(){
    resultados[pruebas] = resultado.innerText;
    pruebas++;
    if (pruebas > maximo) {
      clearInterval(intervalo);
      saveText(JSON.stringify(resultados),'resultados.json');
    }else{
      boton.click();
    }
  }
}
