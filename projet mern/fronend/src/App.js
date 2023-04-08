import Axios from "axios" ;
import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import {Container,Badge,ListGroup,Form,Button} from 'react-bootstrap'
import './App.css';

function App() {

  const [user, setuser] = useState([]);
  const [nom, setnom] = useState('');
  const [prenom, setprenom] = useState('');
  const [age, setage] = useState('');

  useEffect(() => {
    Axios.get('http://127.0.0.1:8000/users')
      .then(response => {
        setuser(response.data);
      })
      .catch(error => {
        console.log(error);
      });
  }, [user]);

  const createuser = ()=>{
    Axios.post('http://127.0.0.1:8000/createUsers',{nom,prenom,age})
      .then(response => {
        console.log(response.data);
      })
      .catch(error => {
        console.log(error);
      });
     
  }
   
  return (
 
      
      <Container>
      <Form className="fr">
      <Form.Group className="mb-3 w-50" controlId="formBasicEmail">
        <Form.Label>Nom :</Form.Label>
        <Form.Control type="text" placeholder="Enter Nom" onChange={e=>setnom(e.target.value)} />
       
      </Form.Group>

      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label>Prenom :</Form.Label>
        <Form.Control type="text" placeholder="Enter prenom" onChange={e=>setprenom(e.target.value)} />
      </Form.Group>
      <Form.Group className="mb-3 w-50" controlId="formBasicPassword">
        <Form.Label >Age :</Form.Label>
        <Form.Control type="text" onChange={e=>setage(e.target.value)} placeholder="Enter Age" />
      </Form.Group>
     
      
      <Button variant="success" className="w-50" onClick={createuser}  type="button">
        ajouter un user
      </Button>
    </Form>
      <div className="result">
        {user.map(a=><ListGroup as="ul" >
      <ListGroup.Item
        as="li"
        className="d-flex justify-content-between align-items-start">
        <div className="ms-2 w-50 me-auto">
          <div className="fw-bold">{a.nom}</div>
          {a.prenom}
        </div>
        <Badge bg="primary " pill>
        {a.age}
        </Badge>
      </ListGroup.Item>
    </ListGroup>)}
    </div>
        </Container>
       
    
      
  );
}

export default App;
