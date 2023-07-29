
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
import PageNotFound from "./Pages/PageNotFound";
import { syncapp } from "./Store/expenseFunctions";



function App() {
  const user = useSelector(state=>state.auth.user)
  const Dispatch = useDispatch()
  useEffect(()=>{

      Dispatch(syncapp(user))
    
},[Dispatch,user])

 

  
  const isLoggedin = useSelector(state=>state.auth.isLoggedin)
  const theme = useSelector(state=>state.theme.theme)
  
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      errorElement:<PageNotFound/>,
      children: [
        { path: "/", element: <Home/> },
        { path: "/expensetracker", element: isLoggedin?<ExpenseTracker />:<Authentication></Authentication> },
        { path: "/profile", element: <Profile /> },
        { path: "/signin", element: !isLoggedin?<Authentication/>:<PageNotFound/> },
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
