import { useState } from "react";
import Signup from "../Authentication/Signup";
import Card from "../UI/Card"
import Login from "../Authentication/Login";
import  Button  from "react-bootstrap/Button";
import ForgotPassword from "../Authentication/ForgotPassword";
import Rodal from 'rodal'
import 'rodal/lib/rodal.css';


const Authentication = ()=>{
    const [isSignup,setIsSignup] = useState(false)
    const [rodalState,toggleRodalStateHandler] = useState(false)
    
    const rodalHandler=()=>{
        toggleRodalStateHandler(prev=>!prev)          
    }
   
    
    return(<Card>
        {
            isSignup?<Signup/>:<Login/>
        }
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Button variant="link" onClick={() => { setIsSignup(prev => !prev) }} style={{ color: 'green' }}>
    {isSignup ? 'Have an account? Sign in' : "Don't have an account! sign up now"}
  </Button>
  <Button variant="link" onClick={rodalHandler} style={{ color: 'green' }}>
   Forgot Password
  </Button>
  
  <Rodal visible={rodalState} onClose={rodalHandler} style={{background:'black'}} >
          <ForgotPassword rodalHandler={rodalHandler}/>
        </Rodal>
</div>
        
    </Card>
    )

}

export default Authentication