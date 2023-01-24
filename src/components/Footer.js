import * as React from "react";
import { Link } from "gatsby";

import logo from "../img/logo-pulido-pisos-bogota.svg";
import facebook from "../img/social/facebook.svg";
import instagram from "../img/social/instagram.svg";
import youtube from "../img/social/youtube.svg";

const Footer = () => {
  
    return (
      <footer className="footer has-background-black has-text-white-ter">
        <div className="content has-text-centered">
          <img
            src={logo}
            alt="Pulido De Pisos de Madera Mármol y Granito en Bogota - Celular 304 277 5545"
            style={{ width: "14em", height: "10em" }}
          />
        </div>
        <div className="content has-text-centered has-background-black has-text-white-ter">
          <div className="container has-background-black has-text-white-ter">
            <div style={{ maxWidth: "100vw" }} className="columns">
              <div className="column is-4">
                <section className="menu">
                  <ul className="menu-list">
                    <li>
                      <Link to="/" className="navbar-item">
                        Inicio
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/about">
                        Nosotros
                      </Link>
                    </li>                                    
                  </ul>
                </section>
              </div>
              <div className="column is-4">
                <section>
                  <ul className="menu-list">
                    <li>
                      <Link className="navbar-item" to="/blog">
                        Últimos Trabajos
                      </Link>
                    </li>
                    <li>
                      <Link className="navbar-item" to="/contact">
                        Contacto
                      </Link>
                    </li>
                  </ul>
                </section>
              </div>
              <div className="column is-4 social">
                <a title="facebook" href="https://www.facebook.com/pulibrilbogota">
                  <img
                    src={facebook}
                    alt="Facebook"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="instagram" href="https://www.instagram.com/pulibril_bogot_pisos_perfectos/">
                  <img
                    src={instagram}
                    alt="Instagram"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
                <a title="youtube" href="https://www.youtube.com/@PulibrilBogota/">
                  <img
                    src={youtube}
                    alt="Youtube"
                    style={{ width: "1em", height: "1em" }}
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
};

export default Footer;
