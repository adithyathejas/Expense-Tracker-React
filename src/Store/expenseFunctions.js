import { authActions } from "./AuthReducer"
import { expenseActions } from "./ExpenseReducer"
import axios from "axios"


export const syncapp = (user)=>{
    return async (dispatch)=>{
        const token = localStorage.getItem('token')
        const userID = localStorage.getItem('userID')
        const payload = {
         token: token,
         userID : userID,
         expiresIn : localStorage.getItem('expiresIn')
        }
        if(token!=null){
          dispatch(authActions.loginHandle(payload))
          
        }
        
        console.log(payload)
              console.log('updated')
              // const user = userID?userID.replace("@gmail.com","") :null
              console.log('user1',user)    
              if(user!==null&&user!==''){
              let res = await axios.get(`https://expense-tracker-23c34-default-rtdb.firebaseio.com/expenses/${user}.json`)
              console.log('response',res.data)
              for(let key in res.data){
                console.log('key',key)
                                
                  let mainItem = res.data[key]
                  
                 
                    console.log(key)
                    let item = mainItem
                    let newItem= {
                        name: key,
                        ...item
                    }
                    console.log('hi',item)
                    dispatch(expenseActions.addItem(newItem))
                    console.log(newItem)
                  }
                }
                }
                 
            }   
                  
                 
              
    




export const emailVerificationHandler=async (token)=>{
    try{
    
    let res = await axios.post('https://identitytoolkit.googleapis.com/v1/accounts:sendOobCode?key=AIzaSyACEG0j7ZsoZfGZzWq5No8W8_75yFKPx-k',{requestType:"VERIFY_EMAIL",idToken:token})
    alert(`verification mail sent to ${res.data.email} `)
    }catch(e){
       alert(e.response.data.error.message)
    }
}

export const ItemHandler = (item,userID)=>{
    return async (dispatch)=>{
        try{
            let res= await axios.post(`https://expense-tracker-23c34-default-rtdb.firebaseio.com/expenses/${userID}.json`,item)
            let newItem={
                name:res.data.name,
                ...item
            }
            dispatch(expenseActions.addItem(newItem))
            console.log(res.data.name)
           }
           catch(e){
            console.log(e)
           }
    }
}

export const deleteItemHandler =  (item,userID)=>{
  return async (Dispatch)=>{
      let res = await axios.delete(
          `https://expense-tracker-23c34-default-rtdb.firebaseio.com/expenses/${userID}/${item.name}.json`
        );
        Dispatch(expenseActions.removeItem(item.name))
        console.log(res.data);

  }
}

