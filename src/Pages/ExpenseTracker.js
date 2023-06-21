import {Button,Badge,Row,Col, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ExpenseTracker= ()=> {
    const Navigate =useNavigate()
    return(
        <>
        <Container className='mt-3' fluid >
        <Row >
            <Col xs='10' >
        <h1>welcome to expense Tracker</h1>
        </Col>
        <Col xs='2'>
        <Badge bg='secondary'>your profile is incomplete. <Button className='m-3' onClick={()=>{
            Navigate('/profile')
        }}>complete now</Button></Badge>
        </Col>
        </Row>
        </Container>
        </>
    )
}

export default ExpenseTracker