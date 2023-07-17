import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { authActions } from '../Store/AuthReducer';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { themeReducerActions } from '../Store/ThemeReducer';
import { expenseActions } from '../Store/ExpenseReducer';

const Navigation=()=>{
  const isPremium = useSelector(state=>state.expense.isPremium)
  const isLoggedin = useSelector(state=>state.auth.isLoggedin)
  const premium = useSelector(state=>state.expense.premium)
  let Navigate=useNavigate()
  const Dispatch = useDispatch()
  const expenses = useSelector(state=>state.expense.Items)
  

  const handleDownload = () => {
    // const csvData = convertToCSV();
    const headers = ['Money', 'Description', 'category']; // CSV headers
    const rows = expenses.map((expense) => [expense.money, expense.description, expense.category]);
    const  csvData= [headers, ...rows].map((row) => row.join(',')).join('\n');

    const blob = new Blob([csvData], { type: 'text/csv;charset=utf-8;' });
    
      const link = document.createElement('a');
        const url = URL.createObjectURL(blob);
        link.setAttribute('href', url);
        link.setAttribute('download', 'itemlist');
        link.style.visibility = 'hidden';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      
    
  }



  const themeHandler = ()=>{
    Dispatch(themeReducerActions.toggleTheme())
    console.log('theme toggled')
  }
    const LogoutHandler = ()=>{
      localStorage.clear()
      Dispatch(authActions.logoutHandle())
      Navigate('./signin')
      
    }
    return(
      <Navbar bg="dark" variant="dark">
      <Container>
        {/* Navbar Brand */}
        <Navbar.Brand href="/">Expense Tracker</Navbar.Brand>

        {/* Left-aligned navigation links */}
        <Nav className="me-auto">
          <Nav.Link as={Link} to="/home">Home</Nav.Link>
          <Nav.Link as={Link} to="/expensetracker">Tracker</Nav.Link>
          {!isLoggedin && <Nav.Link as={Link} to="/signin">Signin</Nav.Link>}
        </Nav>

        {/* Right-aligned buttons */}
        <Nav className="d-flex">
          {isPremium && <Button className="me-2" onClick={() => {
            Dispatch(expenseActions.togglePremium())
            // Put any code you want to execute when the button is clicked.
          }}>Activate Premium</Button>}
        </Nav>
        <Nav>
          {isLoggedin && <Button   className="me-2" onClick={LogoutHandler}>Logout</Button>}
        </Nav>
        
       {premium && <Nav>
          {<Button onClick={themeHandler} className="me-2">Toggle Theme </Button>}
        </Nav>}
        {premium&&<Nav>
          {<Button onClick={handleDownload}>Download as Csv </Button>}
        </Nav>}

        {/* Console log to print 'isLoggedin' value */}
        {console.log(isLoggedin)}
      </Container>
    </Navbar>
    )
}

export default Navigation