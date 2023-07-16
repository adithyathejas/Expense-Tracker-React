import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';
import { authActions } from '../Store/AuthReducer';
import { useDispatch,useSelector } from 'react-redux';
import { Link } from 'react-router-dom';

const Navigation=()=>{
  const isPremium = useSelector(state=>state.expense.isPremium)
  const isLoggedin = useSelector(state=>state.auth.isLoggedin)
  let Navigate=useNavigate()
  const Dispatch = useDispatch()
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
        <Nav>
          {isPremium && <Button className='m-3' onClick={() => {
            // Put any code you want to execute when the button is clicked.
          }}>Activate Premium</Button>}
        </Nav>
        <Nav>
          {isLoggedin && <Button onClick={LogoutHandler}>Logout</Button>}
        </Nav>

        {/* Console log to print 'isLoggedin' value */}
        {console.log(isLoggedin)}
      </Container>
    </Navbar>
    )
}

export default Navigation