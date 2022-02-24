import React, { useState } from 'react';
import { Card, CardGroup, Navbar, Container, Nav, NavDropdown, Form, FormControl, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
// import Data from './data';

function groupMain() {

    return (
        <div>
            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    <Card.Body>
                        <Card.Title>Java 스터디 모집합니다.</Card.Title>
                        <Card.Text>
                            왕 초보 환영!!!!!!!!!!!!!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">황재성 | 스터디</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
                    <Card.Body>
                        <Card.Title>리액트 스터디 모집합니다.</Card.Title>
                        <Card.Text>
                            1회독 이상 필수!!!! 라우터 v6 사용해 보신분!!!!!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">이수근 | 스터디</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
                    <Card.Body>
                        <Card.Title>Spring 스터디 모집합니다.</Card.Title>
                        <Card.Text>
                            더럽게 어렵네요. 혼자 고민하지 말고 같이해요!!!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">최성민 | 스터디</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

            <CardGroup>
                <Card>
                    <Card.Img variant="top" src="https://codingapple1.github.io/shop/shoes1.jpg" width="100%" />
                    <Card.Body>
                        <Card.Title>Java 스터디 모집합니다.</Card.Title>
                        <Card.Text>
                            왕 초보 환영!!!!!!!!!!!!!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">황재성 | 스터디</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://codingapple1.github.io/shop/shoes2.jpg" width="100%" />
                    <Card.Body>
                        <Card.Title>리액트 스터디 모집합니다.</Card.Title>
                        <Card.Text>
                            1회독 이상 필수!!!! 라우터 v6 사용해 보신분!!!!!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">이수근 | 스터디</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src="https://codingapple1.github.io/shop/shoes3.jpg" width="100%" />
                    <Card.Body>
                        <Card.Title>Spring 스터디 모집합니다.</Card.Title>
                        <Card.Text>
                            더럽게 어렵네요. 혼자 고민하지 말고 같이해요!!!
                        </Card.Text>
                    </Card.Body>
                    <Card.Footer>
                        <small className="text-muted">최성민 | 스터디</small>
                    </Card.Footer>
                </Card>
            </CardGroup>

            <Navbar bg="light" expand="lg">
                <Container fluid>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <Nav.Link href="#action2">작성자</Nav.Link>
                            <NavDropdown title="작성자" id="navbarScrollingDropdown">
                                <NavDropdown.Item href="#action3">작성자</NavDropdown.Item>
                                <NavDropdown.Item href="#action4">글내용</NavDropdown.Item>
                                <NavDropdown.Divider />
                                <NavDropdown.Item href="#action5">
                                    Something else here
                                </NavDropdown.Item>
                            </NavDropdown>
                            <Form className="d-flex">
                                <FormControl
                                    type="search"
                                    placeholder="Search"
                                    className="me-3"
                                    aria-label="Search"
                                />
                                <Button variant="outline-success">Search</Button>
                            </Form>
                        </Nav>
                        <Button variant="outline-success"><Link to="/groupMainPost" class="link-dark" style={{ textDecoration: 'none' }}>글쓰기</Link></Button>
                        
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </div>
    )
};

export default groupMain;