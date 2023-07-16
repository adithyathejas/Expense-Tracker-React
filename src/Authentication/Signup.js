import { Container} from 'react-bootstrap'
import  Button  from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import { useRef } from 'react'
import axios from 'axios'
import { authActions } from '../Store/AuthReducer'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'

const Signup = ()=> {
    const EmailRef=useRef()
    const PassRef=useRef()
    const ConfPassRef=useRef()
    const Dispatch = useDispatch()
    const navigete = useNavigate()

    const signupHandler = async (e)=>{
        e.preventDefault()
        if(PassRef.current.value==ConfPassRef.current.value){
           
            try{
             let res= await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:signUp?key=AIzaSyACEG0j7ZsoZfGZzWq5No8W8_75yFKPx-k',{
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
            Dispatch(authActions.loginHandle(payload))
           
            
            if(res.status==200){
                alert('You are sucessfully registerd')
            }
            navigete("/expensetracker")

           
        }catch(e){
                alert(e.response.data.error.message)
               
            }
            

        }else{
            alert("Pasword Don't Match")
            
        }
        
    }

    return(
        <Container >
            <h1 className='text-center m-5'>Sign Up</h1>
        
        <Form onSubmit={signupHandler}>
            <Form.Group className="m-3" controlId="email">
                <Form.Label>Email address</Form.Label>
            <Form.Control size='lg' type="email" placeholder="Enter email" required ref={EmailRef}></Form.Control>
            </Form.Group>
            <Form.Group className='m-3' controlId='password'>
                <Form.Label>Password</Form.Label>
                <Form.Control size='lg' type="password" required ref={PassRef}></Form.Control>
            </Form.Group>
            <Form.Group className='m-3' controlId='confirm password' >
                <Form.Label>Confirm Password</Form.Label>
                <Form.Control size='lg' type="password" required ref={ConfPassRef}></Form.Control>
            </Form.Group>
            <Form.Group className="m-4" controlId="button">
            <Button className="w-100" type='submit'>Signup</Button>
            </Form.Group>
        </Form>
        </Container>
    )

}

export default Signup 