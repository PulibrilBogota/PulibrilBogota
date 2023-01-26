import * as React from "react";
import Layout from "../components/Layout";
import { StaticImage } from "gatsby-plugin-image"

const PulidoPisosMadera = () => (

  
  <Layout>
    <div>
      <h1>Pisos Madera</h1>
    </div>
                  <div className="columns">
                    <div className="column is-12 has-text-centered">
                      <a href="tel:3042775545" className="btn">
                        Click para Llamar
                      </a>
                    </div>
                  </div>




    <StaticImage
      src="../images/Logo-WhatsApp.png"
      alt="WhatsApp"
      placeholder="blurred"
      layout="fixed"
      width={1600}
      height={309}
    />
      
  </Layout>
);

export default PulidoPisosMadera;
