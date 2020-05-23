import React from 'react'
import { Container, Label, Input, FormGroup, Button} from 'reactstrap';
import Col from 'reactstrap/lib/Col';
import Form from 'reactstrap/lib/Form';

import './home.css';
export default class Home extends React.Component {
    render() {
        return (
        <Container>
            <hr/>
            <h3>Sequence your avatar</h3>

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
                            <option>Light (TAC CCC GGG)</option>
                            <option>Medium (TAC CCC AGG)</option>
                            <option>Dark (TAC CCC AAG)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Nose Size</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Small (TCT TAA AAA)</option>
                            <option>Average (TCT TGA AAA)</option>
                            <option>Larte (TCT TGG AAC)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Nose Shape</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Small (TCT TAA AAA)</option>
                            <option>Average (TCT TGA AAA)</option>
                            <option>Larte (TCT TGG AAC)</option>
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
                        <Label for="exampleSelect">Nose Shape</Label>
                        <Input type="select" name="select" id="exampleSelect">
                            <option>Small (TCT TAA AAA)</option>
                            <option>Average (TCT TGA AAA)</option>
                            <option>Larte (TCT TGG AAC)</option>
                        </Input>
                    </FormGroup>
                </Form>
                <Button className = "submit-form" color = "success">Submit</Button>{' '}
            </Col>
        </Container>
        )
    }
}