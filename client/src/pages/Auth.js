import React, {useState} from 'react';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from "react-bootstrap/Container";
import Row from 'react-bootstrap/Row';
import {Card} from "react-bootstrap";
import {useLocation} from "react-router-dom";
import {LOGIN_ROUTE, REGISTRATION_ROUTE} from "../utils/consts";
import {registration} from "../http/userAPI";

const Auth = () => {
    const location = useLocation();
    const isLogin = location.pathname === LOGIN_ROUTE;
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const click = async() => {
        if (isLogin) {
            const response = await login()
        } else {
            const response = await registration(email, password)
            console.log(response)
        }


    }

    return (
        <Container className="d-flex justify-content-center align-items-center"
                   style={{height: window.innerHeight - 54}}>
            <Card style ={{width: 680}} className="p-5">
                <h2 className="m-auto">{isLogin ? 'Authorization' : 'Registration' }</h2>
                <Form className="d-flex flex-column">
                    <Form.Control
                      className="mt-3"
                      placeholder="Enter your email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <Form.Control
                        className="mt-3"
                        type="passwird"
                        placeholder="Enter your password"
                        value={password}
                        onChange={(e) => setEmail(e.target.value)}

                    />
                    <Row>
                { isLogin ?
                        <div className="mt-3">
                             Don't have an account?
                            <a href={REGISTRATION_ROUTE}>Register now</a>
                        </div>
                    :
                         <div>
                    Have an account?
                    <a href={LOGIN_ROUTE}>Login</a>
                         </div>

                }
                        <Button className="mt mt-3"
                                variant="outline-success"
                                onClick={click()}
                        >
                            {isLogin ? 'Login' : 'Registration'}
                        </Button>
                    </Row>


                </Form>
            </Card>

        </Container>
    );
};

export default Auth;