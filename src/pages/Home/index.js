import React from 'react'
import { Container, Label, Input, FormGroup, Button, Row, Col, Form} from 'reactstrap';

import Axios from 'axios';

import placeHolder from './avatarSamples/placeholder.png';

import './home.css';
export default class Home extends React.Component {
    render() {

        Axios({
            method: "POST",
            url: "http://localhost:5000/",
            headers: {
              "Content-Type": "application/json"
            }
          }).then(res => {
            console.log(res.data.message);
        });


        return (
        <Container className = "content-container">
            <hr/>
            <h3>Sequence your avatar</h3>

            <Row>
            <Col sm = "6" lg = "6" >
                <Form>
                    <FormGroup>
                        <Label for="exampleSelect">Country of Origin</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Brazil</option>
                            <option>Cuba</option>
                            <option>Dominican Republic</option>
                            <option>Other</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Skin Color</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Light (TAC CCC GGG)</option>
                            <option>Medium (TAC CCC AGG)</option>
                            <option>Dark (TAC CCC AAG)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Hair Texture</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Curly (CCC GGG AAA)</option>
                            <option>Wavy (CCC GGG TAA)</option>
                            <option>Straight (CCC GGG TTA)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Nose Size</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Small (TCT TAA AAA)</option>
                            <option>Average (TCT TGA AAA)</option>
                            <option>Large (TCT TGG AAC)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Nose Shape</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Pointed (ACC CGA TAT)</option>
                            <option>Average (ACC CGA TTC)</option>
                            <option>Rounded (ACC GGA TTC)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Lip Shape</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Thin (GAG ACT AAA)</option>
                            <option>Average (TCT TGA AAA)</option>
                            <option>Full (TCT TGG AAC)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Lip color</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Purplish (CAG TTT AAA)</option>
                            <option>Brownish (CAG TAT ACC)</option>
                            <option>Pinkish (CAG AAT ACA)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Sex</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Male (AAA TTT GCA)</option>
                            <option>Female (AAA TTT TCC)</option>
                        </Input>
                    </FormGroup>
                </Form>
                <Button className = "submit-form">Submit</Button>{' '}
            </Col>
                <Col className = "avatar-col">
                    <Row>
                        <img src = {placeHolder}/>
                    </Row>
                    <Row className = "avatar-info">
                        <h3>Your current Avatar</h3>
                    </Row>
                </Col>
            </Row>
        </Container>
        )
    }
}