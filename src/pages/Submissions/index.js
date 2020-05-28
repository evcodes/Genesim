import React, { Component } from 'react'

import {Container} from 'reactstrap'

import Axios from 'axios';

class Submissions extends Component {

    state = {
        formResponse: []
    }
    componentDidMount(){
        console.log("Component has mounted");
        
        Axios.get(`http://localhost:5000/api/form/`)
        .then(res => {
          const formResponse = res.data;
          console.log(formResponse);
          
          this.setState({ formResponse });
        })
    }
    render() {
    return (
        <div>
                <Container className = "content-container">
                    <h1>Submissions Page</h1>

                <div>{this.state.formResponse.map(res =>
                    
                    <div key = {res._id}>
                        <p>
                            {res.originCountry}
                        </p>
                        <p>
                            {res.skinCol}
                        </p>
                        <p>
                            {res.hairText}
                        </p>
                        <p>
                            {res.lipColor}
                        </p>
                        <p>
                            {res.lipShape}
                        </p>

                        <p>
                            {res.noseShape}
                        </p>

                        <p>
                            {res.noseSize}
                        </p>
                        <p>
                            {res.sex}
                        </p>
                        <br/>
                    </div>)}</div>
                </Container>
            </div>
        )
    }
}


export default Submissions
