import React, {Component} from "react";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import "../../css/footer.css"

class Footer extends Component {
    render() {
        return (
            <section className="ligne" id="footer">
                <div className="container">
                    <div className="col">
                        <i className="fa fa-info"></i>
                        <div>
                            <span className="category">Asso MIAGE</span><br/>
                            association Loi 1901<br/>
                            fondée le 15 avril 1977<br/>
                        </div>
                    </div>
                    <div className="col">
                        <i className="fa fa-map-marker-alt"></i>
                        <div>
                            <span className="category">Locaux</span><br/>
                            <address>
                                Bâtiment M3 - Cité Scientifique<br/>
                                59650 Villeneuve-d'Ascq<br/>
                            </address>
                        </div>
                    </div>
                    <div className="col">
                        <i className="fa fa-coffee"></i>
                        <div>
                            <span className="category">Partenaires</span><br/>
                            AEI Lille<br/>
                            MIAGE Connection<br/>
                            FAEL
                        </div>
                    </div>
                    <div className="col">
                        <i className="fas fa-copyright"></i>
                        <div>
                            <span className="category">Copyright</span><br/>
                            Tous droits réservés<br/>
                            Asso MIAGE Lille 2019<br/>
                            Hugo GIL
                        </div>
                    </div>
                </div>
            </section>
        );
    }
}

export default Footer;