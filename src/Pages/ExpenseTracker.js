import {Button,Badge,Row,Col, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ExpenseForm from '../TrackerComponents/ExpenseForm'
import ExpenseItems from '../TrackerComponents/ExpenseItems'
import {  useSelector } from 'react-redux'
import { emailVerificationHandler } from '../Store/expenseFunctions' 


const ExpenseTracker= ()=> {
    let token = useSelector(state=>state.auth.token)
    const Amount = useSelector(state=>state.expense.totalAmount)
    
    const Navigate =useNavigate()
    return(
        <>
        <Row >
            <Col xs='6'>
        <h1>welcome to expense Tracker</h1>
        </Col>
        <Col xs='2'>
        <Badge bg='secondary'>your profile is incomplete. <Button className='m-3' onClick={()=>{
            Navigate('/profile')
        }}>complete now</Button></Badge></Col>
        <Col xs='2'>
         
        </Col>
        <Col xs='2'>
        <Badge bg='secondary'>verify email<Button className='m-3' onClick={()=>{emailVerificationHandler(token)}}>verify now</Button></Badge>
        </Col>
        </Row>
        <Row><ExpenseForm /></Row>
        <Row><ExpenseItems /></Row>
        <Row><Col>{<h1>Total Amount Spent:</h1>}</Col><Col>{<h1>{Amount}</h1>}</Col></Row>
       { console.log("amount:",Amount )}
        </>
    )
}

export default ExpenseTracker