import { Button, FormControl, FormGroup, FormLabel,FormText,Row,Col } from 'react-bootstrap'
import Form from 'react-bootstrap/Form'
import Card from '../UI/Card'
import { useRef,useEffect } from 'react'
import axios from 'axios'
const Profile = ()=>{
    const token=localStorage.getItem('token')
    const nameRef=useRef()
    const linkRef=useRef()
    
    useEffect(()=>{
        async function getUserData(){
            const res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyACEG0j7ZsoZfGZzWq5No8W8_75yFKPx-k',{
                idToken:token
            })
            console.log(res.data)
            nameRef.current.value=res.data.displayName
            linkRef.current.value=res.data.photoUrl
        }
        getUserData()
       
    },[token])
   
    console.log(token)

const updateHandler = async (e)=>{
    e.preventDefault()
    try{
    const res= await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:update?key=AIzaSyACEG0j7ZsoZfGZzWq5No8W8_75yFKPx-k',{
        idToken:token,    
        displayName: nameRef.current.value,
        photoUrl: linkRef.current.value,
        returnSecureToken:true
    })

    console.log(res.data)
    }catch(f){
        console.log(f)
    }
} 
return(
    <>
        <Card>
    <Form className='m-3' onSubmit={updateHandler}>
        <FormText className='m-5' style={{color:'Yellow'}}><h3>Contact Detail</h3></FormText>
        <FormGroup>
            <FormLabel>User Name</FormLabel>
        <FormControl type='text' required  ref={nameRef}></FormControl>
        </FormGroup>
        <FormGroup>
            <FormLabel>Photo URL</FormLabel>
        <FormControl  required ref={linkRef}></FormControl>
        </FormGroup>
        <Row className="justify-content-center">
  <Col xs="auto">
    <Button variant="warning" className="m-3" type='submit'>Update</Button>
  </Col>
</Row>
    </Form>
    </Card>
    
    </>
)
}

export default Profile