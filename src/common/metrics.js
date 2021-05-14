var updateRoom = (function () {
  // Efectividad de las mascarillas
  var masks = {
    NO: 0,
    TELA: 0.5,
    QUIRURGICO: 0.65,
    N95: 0.9,
  };

  // Tasa de exhalación por minuto
  var tasaExhalacion = {
    ALUMNO: 0.24636,
    PROFESOR: 0.36812,
  };

  // Renovaciones de aire por hora
  var renovacionesDeAire = {
    CERRADA: 0.1,
    PARCIAL: 3,
    ABIERTA: 5,
    SISTEMA: 7,
  };

  var medidasHabitacion = {
    ALTO: 2.4,
    ANCHO: 6,
    LARGO: 10,
  };

  var volumenHabitacion =
    medidasHabitacion.ALTO * medidasHabitacion.ANCHO * medidasHabitacion.LARGO;

  var duracionEncuentro = 5;

  // Funciones para cálculo de resultados
  return {
    totalCO2Exhalado: function (alumnos, profesores) {
      var totalCO2Exhalado =
        alumnos * tasaExhalacion.ALUMNO + profesores * tasaExhalacion.PROFESOR;
      return totalCO2Exhalado;
    },

    totalCO2ExhaladoPMinuto: function (totalCO2Exhalado) {
      var totalCO2ExhaladoPMinuto = totalCO2Exhalado / 60;
      return totalCO2ExhaladoPMinuto;
    },

    totalCO2ppm: function () {
        var totalCO2ppm = 
    }

  };
})();
