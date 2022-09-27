import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {useState} from 'react'
import { serverTimestamp, addDoc, collection } from 'firebase/firestore';
import {db} from '../../Firebase/FireBaseConfig';


const Formulario = (props) => {

    const {cart, totalPrice, clear, handleId} = props;

    const [name,setName] = useState("");

    const [lastName,setLastName] = useState("");

    const [email,setEmail] = useState("");

    const [phoneNumber,setPhoneNumber] = useState("");

    const handleSubmit = (event) => {

        event.preventDefault();

        const order = {

            buyer: {name: name, lastName: lastName, email: email, phoneNumber: phoneNumber},
            items: cart,
            total: totalPrice,
            date: serverTimestamp(),

        };

        const ordersCollection = collection(db,'orders');

        addDoc(ordersCollection, order)
        .then((res) =>{

            handleId(res.id);
            clear();
        })
    }

    


    const handleChangeName = (event) => {

        setName(event.target.value);
        console.log(event.target.value);
    }

    const handleChangeLastName = (event) =>{

        setLastName(event.target.value);
    }

    const handleChangeEmail = (event) => {

        setEmail(event.target.value)
    }

    const handleChangePhoneNumber = (event) => {

        setPhoneNumber(event.target.value)
    }

    


  return (
    <div>

    
    <Form onSubmit={handleSubmit}>
    <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Name</Form.Label>
        <Form.Control type="text" placeholder="Name" name="name" value={name} onChange={handleChangeName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Last Name</Form.Label>
        <Form.Control type="text" placeholder="Last Name" name="lastName" value={lastName} onChange={handleChangeLastName} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" placeholder="Enter email" name="email" value={email} onChange={handleChangeEmail} />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Phone Number</Form.Label>
        <Form.Control type="tel" placeholder="Phone Number" name="phoneNumber" value={phoneNumber} onChange={handleChangePhoneNumber} />
      </Form.Group>


      <Button variant="primary" type="submit">
        Submit
      </Button>

    </Form>
    </div>
  )
}

export default Formulario