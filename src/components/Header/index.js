import React from "react";

export default function Header() {
  return (
    <div className="menu">
      <h1 className="header-title">
        Simulador de riesgo de contagio por aerosoles en ambientes cerrados
      </h1>
      <h2 className="header-subtitle">Desarrollado por ADOX S.A.</h2>
      <h3>
        ¡Probá nuestra{" "}
        <span className="resaltado">herramienta interactiva</span> y observá los
        resultados!
      </h3>
      <p className="header-text">
        Modificá las distintas variables disponibles en la sección de{" "}
        <b>Parámetros interactivos del ambiente</b>. Podrás cambiar la cantidad
        de personas presentes, los infectados (paciente cero), duración del
        evento, la superficie del salón, el tipo de barbijo y la ventilación
        disponible. Dinámicamente verás reflejados estos cambios en los
        resultados disponibles debajo. Además encontrarás expresadas las
        distintas precondiciones asumidas para la realización de los cálculos.
      </p>
    </div>
  );
}
