import logo from './logo.svg';
import './App.css';
import Authentication from './Pages/Authentication'
import { createBrowserRouter,RouterProvider } from 'react-router-dom';
import Root from './Pages/Root';
import ExpenseTracker from './Pages/ExpenseTracker';
import Profile from './Pages/Profile'


function App() {
  const router = createBrowserRouter([
    {
      path:"/",
      element: <Root/>,
      children:[
        {path:"/",element:<Authentication/>}
        ,{path:"/expensetracker",element:<ExpenseTracker/>},
        {path:"/profile",element:<Profile/>}
      ]
    }
  ])
  return (
    <>
    <RouterProvider router={router}/>
    </>
  );
}

export default App;
