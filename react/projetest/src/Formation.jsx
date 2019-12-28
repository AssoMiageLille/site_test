import React, {Component} from "react";
import {Col, Container, Nav, NavItem, NavLink, Row} from "reactstrap";
import Footer from "./components/Footer/Footer";
import Header from "./components/Header/Header";


class Formation extends Component {
    render() {
        return (

            <section className="ligne" id="formation">
                <Header/>
                <div className="container">
                    <h2>Formation</h2>
                </div>
                <div className="description-formation" id="description-formation">
                    <div className = "container">
                        <div className = "row">
                            <a>Les MIAGE forment, dans un réseau de 20 universités françaises, des cadres spécialisés dans l’ingénierie des systèmes d’information et de décision des entreprises.

                                Ce réseau dynamique représente un total de 3 700 étudiants. Chaque année, plus de 1 000 étudiants obtiennent un Master MIAGE.

                                Le Master de Méthodes Informatiques Appliquées à la Gestion des Entreprises (MIAGE) est un diplôme universitaire français de niveau Bac+5, alliant une double compétence en informatique et en gestion, destiné à former des cadres d’entreprise experts en ingénierie et management des systèmes d’information.

                                Intégré dans le système d’harmonisation européenne LMD, ce cursus universitaire professionnalisant à vocation nationale et internationale est construit autour de 5 pôles de compétences :

                                scientifiques et technologiques
                                organisationnelles
                                méthodologiques
                                sociales
                                professionnelles (9 mois de stage minimum)

                                Ouvert, créatif et réactif, le Miagiste sait s’adapter aux mutations sociétales et évoluer dans sa vie professionnelle, ce qui lui permet une insertion rapide et durable ainsi qu’un épanouissement dans le monde professionnel. Le Miagiste est un collaborateur recherché dans les fonctions d’encadrement du secteur de l’informatique et de l’organisation d’entreprises.

                                Les MIAGE proposent plusieurs voies de formation pour répondre aux attentes de différents publics.

                                La formation initiale : dispensée dans les 18 MIAGE de France pour un public « classique » en formation initiale et un public de formation continue intégré au sein de la formation initiale.
                                La formation continue : certaines filières proposent un cursus spécifique pour les salariés et demandeurs d’emploi en journée et en cours du soir dans certaines universités. C’est aussi une formation proposée pour les personnes reprenant les études après être déjà entrées sur le marché du travail.
                                La VAE (Validation des Acquis de l’Expérience) : les équipes pédagogiques sont, depuis 2002, fortement sollicitées par ce même type de public pour des démarches de VAE. Au total plus de 200 dossiers ont été traités.
                                Formation en alternance : le pôle d’apprentissage au sein des MIAGE est unique en France pour des formations universitaires au niveau Master avec ses presque 20% d’étudiants apprentis. 10 filières en France proposent la voie de l’apprentissage.
                                Formation à distance : le dispositif « International e-mi@ge » offre quant à lui une réponse aux attentes d’un public réellement éloigné des centres de formation : publics de formation continue en France et public étranger en particulier. Cette dimension internationale à travers la formation via Internet est délivrée par sites centres de formation e-mi@ge en France.

                                Le réseau, composé de plus de 25 000 diplômés, est moteur de l’activité économique en France et à l’étranger. La formation est constituée de 9 mois de stages minimum sur l’ensemble de la formation. La Licence (bac +3) est dédiée à la pré professionnalisation en entreprise, tandis que le Master (bac +5) est la voie ultime pour la pré-insertion professionnelle. Depuis toujours, la MIAGE a su impliquer avec intelligence les partenaires du monde socio-économique au niveau de la dynamique des formations:

                                Dans les conseils de perfectionnement et des jurys de délivrance des diplômes, dans l’élaboration des programmes pédagogiques ;
                                Dans la définition de nouvelles offres de formation ;
                                Dans la mise en place d’un corps d’enseignants professionnels reconnu à la fois par le monde universitaire et industriel ;
                                Et enfin dans la stratégie de mise en place des différents stages du cursus et de l’accueil des étudiants en stage.

                                Les données d’enquête d’insertion professionnelle des étudiants des MIAGE montrent que l’embauche est quasi instantanée (dans les 3 mois qui suivent le stage) ou immédiate pour les apprentis dans 90% des cas. Dans la majeure partie des cas, il s’agit d’une embauche en CDI.</a>
                        </div>
                    </div>
                    <div className="container">
                        <div className = "row">
                            <div className = "col-lg-8 col-lg-offset-2" >
                                <p> Licence 3</p>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-lg-8 col-lg-offset-2" >
                                <p> Master 1</p>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-lg-8 col-lg-offset-2" >
                                <p> Master 2</p>
                            </div>
                        </div>
                        <div className = "row">
                            <div className = "col-lg-8 col-lg-offset-2" >
                                <p>Formation en alternance</p>
                            </div>
                        </div>
                    </div>
                </div>
                <Footer></Footer>
            </section>
        );
    }
}

export default Formation;