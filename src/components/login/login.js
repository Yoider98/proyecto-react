import React from "react";
import axios from "axios";
import { Container, Button, Form, Row, Col } from "react-bootstrap";
import './login.css';
import {isNull} from 'util';
import Cookies from 'universal-cookie';  
import app from '../../app.json';
import { calcularExtraccionSesion } from "../helper/helper";
//import { Loading } from "../loading/loading";

const {APIHOST} = app;
const cookies = new Cookies();

export default class Login extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      usuario: "",
      pass: "",
    };
  }

  iniciarSesion() {
    this.setState({ loading: true });
    axios.post(`${APIHOST}/clientes/login`,{
      usuario: this.state.usuario,
      pass: this.state.pass,
    
    })
    .then((response) => {
      if(isNull(response.data.token)){
        alert("usuario o contraseña incorrecta");
        console.log("usuario o contraseña incorrecta");
      }else{
        cookies.set('_s', response.data.token, {
          path: '/',
          expires: calcularExtraccionSesion() ,
        });
        //this.props.history.push(window.open('/empleados'));
      }
      this.setState({ loading: false });

    })
    .catch((err) => {
      console.log(err);
      this.setState({ loading: false });
    });
  }

  render() {
    return (
      <Container id="login-container">
        {/* <Loading show={this.state.loading} /> */}
        <Row>
          <Col>
            <Row>
              <h2>Iniciar Sesion</h2>
            </Row>
            <Row>
              <Col
                sm="12"
                xs="12"
                md={{ span: 4, offset: 4 }}
                lg={{ span: 4, offset: 4 }}
                xl={{ span: 4, offset: 4 }}
              >
                <Form>
                  <Form.Group>
                    <Form.Label >Usuario</Form.Label>
                    <Form.Control
                      placeholder="Coloque su usuario"
                      onChange={(e) =>
                        this.setState({ usuario: e.target.value })
                      }
                    />
                  </Form.Group>

                  <Form.Group>
                    <Form.Label>
                      Contraseña
                    </Form.Label>
                    <Form.Control
                      type="password"
                      placeholder="Coloque su contraseña"
                      onChange={(e) => this.setState({ pass: e.target.value })}
                    />
                  </Form.Group>
                  <Button
                    variant="primary"
                    type="submit"
                    onClick={() => {
                      this.iniciarSesion();
                    }}
                  >
                    Iniciar Sesion
                  </Button>
                </Form>
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    );
  }
}
