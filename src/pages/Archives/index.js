import React from 'react'
import {Nav, NavItem, NavLink, Container, Row, Col} from 'reactstrap';

import './archives.css';

const Archives = () => {
    return (
        <Container className = "content-container">
            <h1>
                Historical Archives
            </h1>
            <Row>
            <Col lg = '3'>
                <Nav vertical>
                    <strong>Countries</strong>
                    <NavItem>
                        <NavLink id = "archive-link" href="#">Brazil</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink id = "archive-link" href="#">Cuba</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink id = "archive-link" href="#">Colombia</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink id = "archive-link" href="#">Dominican Republic</NavLink>
                    </NavItem>
                </Nav>
            </Col>
           
                <Col lg = '8'>
                    <ul>
                        <li>
                            <a href = "https://quod.lib.umich.edu/j/jii/4750978.0012.211/--shades-of-race-in-contemporary-cuba?rgn=main;view=fulltext">
                                Shades of race in contemporary Cuba [Umi Vaughan]
                            </a>
                        </li>

                        <li>

                            <a href = "https://journals.sagepub.com/doi/10.1177/1468796804045237">
                                Identities within the Global Coloniality [Ramán Grosfoguel]
                            </a>
                        </li>

                        <li>
                            <a href = "https://journals.sagepub.com/doi/10.1177/1468796803003004001">
                                Brazilian racial and ethnic identity in the United States. [Helen Marrow]
                            </a>
                        </li>

                        <li>
                            <a href = "https://remezcla.com/features/culture/when-it-comes-to-latinidad-who-is-included-and-who-isnt/">
                                When It Comes To Latinidad, who is included and who isn't. [Janel Martinez]
                            </a>
                        </li>

                        <li>
                            <a href = "https://www.researchgate.net/publication/304621285_Ni_de_aqui_ni_de_alla_Garifuna_Subjectivities_and_the_Politics_of_Diasporic_Belonging">
                                Ni de aquí, ni de alla: Garífuna Subjectivities... [Paul Joseph López Oro]
                            </a>
                        </li>

                        <li>
                            <a href = "https://www.dukeupress.edu/black-behind-the-ears">
                            Ch. 5 Black Women are Confusing, But the Hair Lets You Know: Perceiving the Boundaries of Dominicanidad [Ginetta E. B. Candelario]
                            </a>
                        </li>

                        <li>
                            <a href = "https://hms.harvard.edu/news/latino-genomes-reveal-hidden-dna">
                            Latino Genomes Reveal Hidden DNA [Jake Miller, Harvard Press]
                            </a>
                        </li>
                    </ul>
                </Col>
            </Row>
        </Container>
    )
}

export default Archives;