import { useState } from "react";
import Signup from "../Authentication/Signup";
import Card from "../UI/Card"
import Login from "../Authentication/Login";
import  Button  from "react-bootstrap/Button";

const Authentication = ()=>{
    const [isSignup,setIsSignup] = useState(false)
    
    return(<Card>
        {
            isSignup?<Signup/>:<Login/>
        }
      <div style={{ display: 'flex', justifyContent: 'center' }}>
  <Button variant="link" onClick={() => { setIsSignup(prev => !prev) }} style={{ color: 'green' }}>
    {isSignup ? 'Have an account? Sign in' : "Don't have an account! sign up now"}
  </Button>
</div>
        
    </Card>
    )

}

export default Authentication