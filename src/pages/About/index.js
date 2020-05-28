import React from 'react'

import {Container, Col, Row} from 'reactstrap';

//images
import dnaImage from './assets/dnaHead.jpg';
import neuralNet from './assets/neuralNet.png';
import headShot from './assets/headshot.jpeg';

import './about.css';

const About = () => {
    return (
        <Container className = "content-container">
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
                    <img className = "about-img" src = {dnaImage} alt = "dna strand"></img>
                </Col>
            </Row>
            <Row>
                <Col lg  = '6'>
                    <h2>Future work</h2>
                    <strong>Content</strong>
                    <p>I need to gather more information about racial stratifications and segmentations based on different countries. Right now, we only have three countries and 
                        those stories exist in the archives section. The goal is to have some artificial intelligence generate an avatar, and attach a respective story that will inform
                        the user of the various forms of discrimination this group faced in their respective country.
                    </p>
                    <strong>Technology</strong>
                    <p>This project was initially created to learn a little more using <a href = "https://en.wikipedia.org/wiki/Artificial_neural_network">
                        neural networks </a> (a field of Artificial Intelligence) to generate avatars. These avatars would then random and parameterized by what
                        the users select and some input image. Furthermore, I wanted to get some feedback after the image was generated to improve the neural network
                        <br/><br/> 
                    I also wanted to store the user data, with their consent to create a statistical analysis of what traits are deemed favorable</p>
                    
                </Col>
                <Col lg = '6'>
                    <img className = "nn-img" src = {neuralNet} alt = "diagram of neural network"></img>
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
                <Col lg = '6'>
                    <img className = "nn-img" src= {headShot} alt = "author of genesim"/>
                </Col>
            </Row>
            
        </Container>
    )
}

export default About;