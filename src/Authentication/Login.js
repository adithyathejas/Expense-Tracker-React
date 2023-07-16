import { Container} from 'react-bootstrap'
import  Button  from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useRef } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { authActions } from '../Store/AuthReducer'
import { useDispatch } from 'react-redux'

const Login = ()=> {
    const EmailRef=useRef()
    const PassRef=useRef()
    const navigete=useNavigate()
    const Dispatch = useDispatch()
    

    const loginHandler = async (e)=>{
        e.preventDefault()
           
            try{
             let res= await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=AIzaSyACEG0j7ZsoZfGZzWq5No8W8_75yFKPx-k',{
                email:EmailRef.current.value,
                password:PassRef.current.value,
                returnSecureToken:true
               
            }
            
            )
           const payload =  {
                token: res.data.idToken,
                userID: res.data.email,
                expiresIn:res.data.expiresIn

            }
            localStorage.setItem('token',res.data.idToken)
            localStorage.setItem('userID',res.data.email)
            localStorage.setItem('expiresIn',res.data.expiresIn)
            console.log('stored on local storage')
            Dispatch(authActions.loginHandle(payload))
            navigete("/expensetracker")
          
           
            
          
           
        }catch(e){
                alert(e.response.data.error.message)
               
            }
            
        
    }

    return(
        <Container >
            <h1 className='text-center m-5'>Sign In</h1>
        
        <Form onSubmit={loginHandler}>
            <Form.Group className="m-3" controlId="email">
                <Form.Label>Email address</Form.Label>
            <Form.Control size='lg' type="email" placeholder="Enter email" required ref={EmailRef}></Form.Control>
            </Form.Group>
            <Form.Group className='m-3' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control size='lg' type="password" required ref={PassRef}></Form.Control>
            </Form.Group>
            <Form.Group className="m-4" controlId="button">
            <Button className="w-100" type='submit'>Signin</Button>
            </Form.Group>
        </Form>
        </Container>
    )

}

export default Login 