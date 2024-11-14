import React from "react";
import logo from "../imagen/logo.jpg";

export const Navigation = (props) => {
  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            {" "}
            <span className="sr-only">Toggle navigation</span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
            <span className="icon-bar"></span>{" "}
          </button>
          <a 
            className="navbar-brand page-scroll" 
            target="_blank" 
            rel="noopener noreferrer"
            href="https://educacion.uncuyo.edu.ar/">
            <img 
              style={{width: "300px", height: "auto", marginTop: "-15px"}}
              className="logo"
              src={logo} 
              alt="" />
          </a>{" "}
        </div>

        <div
          className="collapse navbar-collapse"
          id="bs-example-navbar-collapse-1"
        >
          <ul className="nav navbar-nav navbar-right">
            <li>
              <a href="#page-top" className="page-scroll">
                Home
              </a>
            </li>
            <li>
              <a href="#about" className="page-scroll">
                Nosotros
              </a>
            </li>
            <li>
              <a href="#services" className="page-scroll">
                Temas
              </a>
            </li>
            <li>
              <a href="#portfolio" className="page-scroll">
                Galería IA
              </a>
            </li>
            <li>
              <a href="#testimonials" className="page-scroll">
                Reflexiones
              </a>
            </li>
            <li>
              <a href="#team" className="page-scroll">
                Equipo
              </a>
            </li>
            <li>
              <a href="#contact" className="page-scroll">
                Contacto
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
