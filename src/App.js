
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


function App() {
  const Dispatch = useDispatch()
  useEffect(()=>{
    
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
  },[])

  
  const isLoggedin = useSelector(state=>state.auth.isLoggedin)
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
    <>
      <RouterProvider router={router} />
      </>
    
  );
}

export default App;
