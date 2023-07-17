
import "./App.css";
import Authentication from "./Pages/Authentication";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Root from "./Pages/Root";
import ExpenseTracker from "./Pages/ExpenseTracker";
import Profile from "./Pages/Profile";
import Home from "./Pages/Home";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { authActions } from "./Store/AuthReducer";
import axios from "axios";
import { expenseActions } from "./Store/ExpenseReducer";



function App() {
  const Dispatch = useDispatch()
  useEffect(()=>{
    const updateitem = async ()=>{
      const token = localStorage.getItem('token')
      const payload = {
       token: localStorage.getItem('token'),
       userID : localStorage.getItem('userID'),
       expiresIn : localStorage.getItem('expiresIn')
      }
      if(token!=null){
        Dispatch(authActions.loginHandle(payload))
        
      }
      
      console.log(payload)
            console.log('updated')
            let res = await axios.get('https://expense-tracker-23c34-default-rtdb.firebaseio.com/expenses.json')
            console.log('response',res.data)
            for(let key in res.data){
                let item = res.data[key]
                let newItem= {
                    name: key,
                    ...item
                }
                
                Dispatch(expenseActions.addItem(newItem))
                console.log(newItem)
            }
    }
    updateitem()
},[])

 

  
  const isLoggedin = useSelector(state=>state.auth.isLoggedin)
  const theme = useSelector(state=>state.theme.theme)
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { path: "/", element: <Home/> },
        { path: "/expensetracker", element: <ExpenseTracker /> },
        { path: "/profile", element: <Profile /> },
        { path: "/signin", element: isLoggedin?<Authentication />:<Authentication/> },
        { path: "/home", element: <Home /> },
      ],
    },
  ]);
  return (
    <div className="App" id={theme}>
      <RouterProvider router={router} />
      </div>
    
  );
}

export default App;
