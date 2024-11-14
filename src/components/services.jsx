import React from "react";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
          <h2>Contenidos Temáticos</h2>
          <p>
            En nuestra clase de Didáctica de la Informática, exploramos contenidos que combinan teoría y práctica para proporcionar a los futuros docentes las herramientas necesarias para enseñar informática de manera efectiva y adaptada a las necesidades del mundo actual.
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <a href={d.link} target="_blank" rel="noopener noreferrer">
                    <i className={d.icon}></i>
                  </a>
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
