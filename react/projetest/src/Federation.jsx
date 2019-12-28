import React, {Component} from "react";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";
import fael from "./components/img/fael.png"
import mc from "./components/img/mc.jpg"
import banniere from "./components/img/banniere.png";

class Federation extends Component {
    render() {
        return (

            <section className="ligne" id="formation">
                <Header/>
                <div className="container">
                    <h2>Nos fédérations</h2>
                    <section>
                        <img src={fael} className="logo_fael" alt="fael" width="200vh"/>

                        <h4> La Fédération des Associations Etudiantes de Lille (FAEL) </h4>
                        <a> La vocation de la FAEL est de fédérer les associations étudiantes (BDE, corpo, amicales) de l’université de Lille ainsi que des établissements d’enseignement supérieur non rattachés à l’université. Elle est actuellement composée de 15 associations adhérente et de 3 membres associés.

                            Cette Fédération a plusieurs buts : animer, former, représenter et rendre service. </a>
                        <a>https://www.fael-lille.com/</a>
                    </section>
                    <section>
                        <img src={mc} className="logo_mc" alt="mc" width="200vh"/>
                        <h4>Miage Connection (MC)</h4>
                        <a> MIAGE Connection, la fédération nationale des étudiants et diplômés de MIAGE est une association de loi 1901.

                            Issue, en mai 2004, de la volonté des représentants des associations de se voir en dehors des Journées Nationales MIAGE, MIAGE Connection prend sa source à Lyon, par la création d’un forum permettant de communiquer entre MIAGE toute l’année. Il en résultera très vite un cadre juridique par la création de l’association en juillet de la même année, durant la première Assemblée Générale Ordinaire. En juillet 2005, MIAGE Connection met en place des responsables de zones afin d’être plus proches des adhérents puis dépose le mois suivant le dossier en préfecture et parait au Journal Officiel (n° W59-500-3003). Aux JNM 2006, MIAGE Connection présente son site web.

                            Depuis 2006, grâce à son adhésion à la FAGE (Fédération des Associations Générales Étudiantes), MIAGE Connection fait partie de la première organisation en nombre d’élus dans les universités et bénéficie indirectement du statut d’organisation représentative étudiante aux termes de l’article 13 de la loi Jospin du 10 juillet 1989.</a>
                        <a> https://www.miage.net/</a>
                    </section>
                </div>
                <Footer></Footer>
            </section>
        );
    }
}

export default Federation;