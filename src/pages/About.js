import React from 'react'

import {Container, Col, Row} from 'reactstrap';
import dnaImage from '../assets/dnaHead.jpg';

const About = () => {
    return (
        <Container>
            <br/>
            <Row>
                <Col lg = '6' >
                <h1>
                    About Genesim
                </h1>
                <p> 
                    Genesim was inspire by a DNA + Latinx class at Williams College.
                    This course built the scientific foundations and historical context around DNA then proceeded
                    to show how powerful genetic code is. Since genetic code represents different illnesses, fields like
                    Computational Biology have brought incredible insights into epidemiology, oncology research, and degenerative diseases.
                    <br/>
                    <br/>
                    
                    This project is an attempt to simulate a gene selection process and capture the intersection between
                    genetics, anthropology, computer science, and math/statistics. The avatars generated will have a 
                    short history snippet attached to them based on the features selected and their country of origin. 

                    
                    For example, much of the cancer research is  if From the basic building blocks to sequence someone's
                    appearance, medical conditions, or special 

                    highlighted the scientific backgroun of DNA 
                </p>
                </Col>
                <Col lg = '6'>
                    <img src = {dnaImage}></img>
                </Col>
            </Row>
            <Row>
                <Col lg  = '6'>
                    <h2>Future work</h2>
                </Col>
            </Row>

            <Row>
                <Col lg = '6'>
                <h2>About the author</h2>
                    <p1> My name is Eddy Varela and I am a software developer with a computer science and math major, however,
                        I also love storytelling, filmmaking, and video. I am interested in how people decide which traits are
                        more favorable in terms of eye color, skin complexion, hair, nose, etc and how this plays out in their
                        lived experience. Many narratives that we have seen in the course heavily revolve around physical
                        appearance defining a person’s country of origin and their lived experience.</p1>
                </Col>
            </Row>
            
        </Container>
    )
}

export default About;