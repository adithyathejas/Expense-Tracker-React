import React, { useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import BackgroundCard from '../UI/FormBackground';
import axios from 'axios';
import {useSelector} from 'react-redux'


 


const EditTracker = (props)=>{
   

    const moneySpentRef = useRef();
    const descriptionRef = useRef();
    const categoryRef = useRef();
    const user = useSelector(state=>state.auth.user)
    console.log('name',props.name)

    if(props.visible){
    moneySpentRef.current.value = props.money
    descriptionRef.current.value = props.description;
    categoryRef.current.value = props.category;
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    
        // Access input values using refs
        const moneySpent = moneySpentRef.current.value;
        const description = descriptionRef.current.value;
        const category = categoryRef.current.value;
        const item={money:moneySpent,description:description,category:category}
        
        // Handle form submission, e.g., send data to backend or perform validation
        // Reset form values if needed
        try{
        let res= axios.put(`https://expense-tracker-23c34-default-rtdb.firebaseio.com/expenses/${user}/${props.name}.json`,item)
        props.setItem(item)
        console.log(res.data)
        props.onClose()
        }catch(e){
            console.log(e)
        }
      };


    return(
        <BackgroundCard>
    <Form onSubmit={handleSubmit}>
      <Row className="p-3">
        <Col xs={6} md={3}>
          <Form.Group controlId="moneySpent">
            <Form.Label>Money Spent:</Form.Label>
            <Form.Control type="number" ref={moneySpentRef} />
          </Form.Group>
        </Col>
        <Col xs={6} md={5}>
          <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control as="textarea" ref={descriptionRef} />
          </Form.Group>
        </Col>
        <Col xs={6} md={3}>
          <Form.Group controlId="category">
            <Form.Label>Category:</Form.Label>
            <Form.Control as="select" ref={categoryRef}>
              <option value="">Select a category</option>
              <option value="Food">Food</option>
              <option value="Petrol">Petrol</option>
              <option value="Salary">Salary</option>
              <option value="Entertainment">Entertainment</option>
              {/* Add more options as needed */}
            </Form.Control>
          </Form.Group>
        </Col>
        <Col xs={6} md={1} className="d-flex justify-content-center mt-3">
          <Button variant="primary" type="submit">
            Edit Item
          </Button>
        </Col>
      </Row>
    </Form>
    </BackgroundCard>
    )
}

export default EditTracker