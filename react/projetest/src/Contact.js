import React, {Component} from "react";
import {Col, Container, Nav, NavItem, NavLink, Row, Button, Card, CardHeader, Link} from "reactstrap";
import Footer from "./Footer";

class Contact extends Component {

    constructor(props) {
        super(props);

        this.state = {
            email: "",
            entreprise: "",
            nom: ""
        };
    }

    componentDidMount() {
        document.documentElement.scrollTop = 0;
        document.scrollingElement.scrollTop = 0;
        this.refs.main.scrollTop = 0;
        /**fetch(API)
            .then(response => response.json())
            .then(hits => this.setState({hits}));
**/
    }

    render() {
        const {email, entreprise,nom} = this.state;
        return (


            <section className="ligne" id="contact">
                <div className="container">

                    <Col>
                        <Container className="pt-lg-md">
                            <Row className="justify-content-start">
                                <Col lg="5">
                                    <Card className="bg-secondary shadow border-0">
                                        <CardHeader className="bg-white pb-5 ">
                                            <div className="text-center">
                                                <h2>Formulaire de contact</h2>
                                            </div>
                                        </CardHeader>

                                        <form
                                            className="text-center"
                                            onSubmit={this.handleSubmit}>
                                            <label htmlFor="email"></label>
                                            <input
                                                name="email"
                                                type="text"
                                                placeholder="Email"
                                                value={email}
                                                onChange={this.handleChange}
                                            />
                                            <label htmlFor="nom"></label>
                                            <input
                                                name="nom"
                                                type="text"
                                                placeholder="Votre nom"
                                                value={nom}
                                                onChange={this.handleChange}
                                            />
                                            <label htmlFor="entreprise"></label>
                                            <p></p>
                                            <input
                                                name="nom de l'entreprise"
                                                type="text"
                                                placeholder="Nom de votre entreprise"
                                                value={entreprise}
                                                onChange={this.handleChange}
                                            />

                                            <p></p>
                                            <Button
                                                className="btn-neutral btn-icon ml-1 "
                                                type="submit">
                                                <Link
                                                    to={"/presentation"} >
                                                    Envoyer

                                                </Link>
                                            </Button>
                                        </form>
                                    </Card>

                                </Col>
                            </Row>
                        </Container>
                    </Col>
                </div>
                <Footer></Footer>
            </section>
        );
    }
}

export default Contact;