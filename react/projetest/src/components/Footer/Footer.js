import React, {Component} from "react";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import "../../css/charte.less" ;


class Footer extends Component {
    render() {
        return (
                <footer className=" footer">
                    <Container>
                        <Row className=" align-items-center justify-content-md-between">
                            <Col md="6">
                                <div className=" copyright">
                                    <a> © Asso MIAGE Lille
                                    </a>
                                </div>
                            </Col>
                            <Col md="6">
                                <Nav className=" nav-footer justify-content-end">

                                    <NavItem>
                                        <NavLink
                                            href="https://www.facebook.com/AssoMIAGELille"
                                            target="_blank"
                                        >
                                            Facebook
                                        </NavLink>

                                    </NavItem>
                                </Nav>
                            </Col>
                        </Row>
                    </Container>
                </footer>

        );
    }
}

export default Footer;