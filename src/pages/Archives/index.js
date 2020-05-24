import React from 'react'
import {Nav, NavItem, NavLink, Container, Row, Col} from 'reactstrap';

import './archives.css';

const Archives = () => {
    return (
        <Container className = "content-container">
            <h1>
                Historical Archives
            </h1>
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
            <Row>
                <Col lg = '9'>
                    
                </Col>
            </Row>
        </Container>
    )
}

export default Archives;