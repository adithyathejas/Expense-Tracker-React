import React, { useRef } from 'react';
import { Form, Button, Row, Col } from 'react-bootstrap';
import BackgroundCard from '../UI/FormBackground';
import {useSelector,useDispatch} from 'react-redux'
import { ItemHandler } from '../Store/expenseFunctions';

const ExpenseForm = (props) => {
  const moneySpentRef = useRef();
  const descriptionRef = useRef();
  const categoryRef = useRef();
  const theme = useSelector(state=>state.theme.theme)
  const user = useSelector(state=>state.auth.user)
  const Dispatch = useDispatch()

  const handleSubmit = (event) => {
    event.preventDefault();

    // Access input values using refs
    const moneySpent = moneySpentRef.current.value;
    const description = descriptionRef.current.value;
    const category = categoryRef.current.value;
    const item={money:moneySpent,description:description,category:category}
    Dispatch(ItemHandler(item,user))
    // Handle form submission, e.g., send data to backend or perform validation
    // Reset form values if needed
    moneySpentRef.current.value = '';
    descriptionRef.current.value = '';
    categoryRef.current.value = '';
  };

  return (
    <BackgroundCard>
    <Form onSubmit={handleSubmit}>
      <Row className="p-3">
        <Col xs={6} md={3}>
          <Form.Group controlId="moneySpent">
            <Form.Label>Money Spent:</Form.Label>
            <Form.Control type="number" ref={moneySpentRef}  style={theme==='dark'?{ backgroundColor: '#333', color: '#fff' }:{ backgroundColor: '#ded9d9', color: '#080808' }}/>
          </Form.Group>
        </Col>
        <Col xs={6} md={5}>
          <Form.Group controlId="description">
            <Form.Label>Description:</Form.Label>
            <Form.Control as="textarea" ref={descriptionRef} style={theme==='dark'?{ backgroundColor: '#333', color: '#fff' }:{ backgroundColor: '#ded9d9', color: '#080808' }} />
          </Form.Group>
        </Col>
        <Col xs={6} md={3}>
          <Form.Group controlId="category">
            <Form.Label>Category:</Form.Label>
            <Form.Control as="select" ref={categoryRef} style={theme==='dark'?{ backgroundColor: '#333', color: '#fff' }:{ backgroundColor: '#ded9d9', color: '#080808' }}>
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
            Add Item
          </Button>
        </Col>
      </Row>
    </Form>
    </BackgroundCard>
  );
};

export default ExpenseForm;