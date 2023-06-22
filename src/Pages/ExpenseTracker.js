import axios from 'axios'
import {Button,Badge,Row,Col, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'

const ExpenseTracker= ()=> {
    const emailVerificationHandler=async ()=>{
        try{
        let token = localStorage.getItem('token')
        let res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyACEG0j7ZsoZfGZzWq5No8W8_75yFKPx-k',{requestType:"VERIFY_EMAIL",idToken:token})
        alert(`verification mail sent to ${res.data.email} `)
        }catch(e){
           alert(e.response.data.error.message)
        }
    }
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
        <Col xs='2'>
        <Badge bg='secondary'>verify email<Button className='m-3' onClick={emailVerificationHandler}>verify now</Button></Badge>
        </Col>
        </Row>
        </Container>
        </>
    )
}

export default ExpenseTracker