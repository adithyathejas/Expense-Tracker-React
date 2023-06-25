import axios from 'axios'
import {Button,Badge,Row,Col, Container} from 'react-bootstrap'
import { useNavigate } from 'react-router-dom'
import ExpenseForm from '../TrackerComponents/ExpenseForm'
import ExpenseItems from '../TrackerComponents/ExpenseItems'
import { useState,useEffect } from 'react'

const ExpenseTracker= ()=> {
    const [rerender,setrerender]=useState(false)
    const rerenderHandler = ()=>{
        setrerender(prev=>!prev)
        console.log('rerendered')
    }

    useEffect(()=>{
        const updateitem = async ()=>{
                console.log('updated')
                setItems([])
                let res = await axios.get('https://expense-tracker-23c34-default-rtdb.firebaseio.com/expenses.json')
                console.log('response',res.data)
                for(let key in res.data){
                    let item = res.data[key]
                    let newItem= {
                        name: key,
                        ...item
                    }
                    
                    setItems(prev=>[...prev,newItem])
                    console.log(newItem)
                }
        }
        updateitem()
    },[rerender])
    const [items,setItems]=useState([])

    const ItemHandler=async (item)=>{
       try{
        let res= await axios.post('https://expense-tracker-23c34-default-rtdb.firebaseio.com/expenses.json',item)
        let newItem={
            name:res.data.name,
            ...item
        }
        setItems(prev=>[...prev,newItem])
        console.log(res.data.name)
       }
       catch(e){
        console.log(e)
       }
    }

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
        <Row >
            <Col xs='8' >
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
        <Row><ExpenseForm ItemHandler={ItemHandler}/></Row>
        <Row><ExpenseItems ItemList={items} rerender={rerenderHandler}/></Row>
        </>
    )
}

export default ExpenseTracker