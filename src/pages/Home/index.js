import React from 'react'

//styling deps
import { Container, Label, Input, FormGroup, Button, Row, Col, Form} from 'reactstrap';
import './home.css';

//functional deps
import Axios from 'axios';

//img deps
import placeHolder from './avatarSamples/placeholder.png';

class Home extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            originCountry : "Brazil",
            skinCol : "Light (TAC CCC GGG)",
            hairText : "Curly (CCC GGG AAA)",
            noseSize : "Small (TCT TAA AAA)",
            noseShape : "Pointed (ACC CGA TAT)",
            lipShape : "Thin (GAG ACT AAA)",
            lipColor : "Purplish (CAG TTT AAA)",
            sex: "Male (AAA TTT GCA)",
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    
    handleChange(event){

        this.setState({
            [event.target.name] : event.target.value
        })
    }

    handleSubmit(event) {
         event.preventDefault();
        
        const formResponse = {
            originCountry : this.state.originCountry,
            skinCol:this.state.skinCol,
            hairText: this.state.hairText,
            noseSize: this.state.noseSize,
            noseShape: this.state.noseShape,
            lipShape: this.state.lipShape,
            lipColor:this.state.lipColor,
            sex: this.state.sex,
        }        

        Axios.post('http://localhost:5000/api/form', {formResponse})
        .then(function(res) {
            console.log(res.data);
            console.log(res.status);
        })
    }

    render() {


        return (
        <Container className = "content-container">
            <hr/>
            <h3>Sequence your avatar</h3>

            <Row>
            <Col sm = "6" lg = "6" >
                <Form>
                    <FormGroup>
                        <Label for="exampleSelect">Country of Origin</Label>
                        <Input type="select" name="originCountry" onChange = {this.handleChange}>
                            <option>Brazil</option>
                            <option>Cuba</option>
                            <option>Dominican Republic</option>
                            <option>Other</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Skin Color</Label>
                        <Input type="select" name="skinCol" onChange = {this.handleChange}>
                            <option>Light (TAC CCC GGG)</option>
                            <option>Medium (TAC CCC AGG)</option>
                            <option>Dark (TAC CCC AAG)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Hair Texture</Label>
                        <Input type="select" name="hairText" onChange = {this.handleChange}>
                            <option>Curly (CCC GGG AAA)</option>
                            <option>Wavy (CCC GGG TAA)</option>
                            <option>Straight (CCC GGG TTA)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Nose Size</Label>
                        <Input type="select" name="noseSize" onChange = {this.handleChange}>
                            <option>Small (TCT TAA AAA)</option>
                            <option>Average (TCT TGA AAA)</option>
                            <option>Large (TCT TGG AAC)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Nose Shape</Label>
                        <Input type="select" name="noseShape"  onChange = {this.handleChange}>
                            <option>Pointed (ACC CGA TAT)</option>
                            <option>Average (ACC CGA TTC)</option>
                            <option>Rounded (ACC GGA TTC)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Lip Shape</Label>
                        <Input type="select" name="lipShape" onChange = {this.handleChange}>
                            <option>Thin (GAG ACT AAA)</option>
                            <option>Average (TCT TGA AAA)</option>
                            <option>Full (TCT TGG AAC)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Lip color</Label>
                        <Input type="select" name="lipCol" id="exampleSelect" onChange = {this.handleChange}>
                            <option>Purplish (CAG TTT AAA)</option>
                            <option>Brownish (CAG TAT ACC)</option>
                            <option>Pinkish (CAG AAT ACA)</option>
                        </Input>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleSelect">Sex</Label>
                        <Input type="select" name="sex" id="exampleSelect" onChange = {this.handleChange}>
                            <option>Male (AAA TTT GCA)</option>
                            <option>Female (AAA TTT TCC)</option>
                        </Input>
                    </FormGroup>
                </Form>
                <Button className = "submit-form" onClick={this.handleSubmit}>Submit</Button>{' '}
            </Col>
                <Col className = "avatar-col">
                    <Row>
                        <img src = {placeHolder} alt = "Avatar placeholder"/>
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

export default Home;