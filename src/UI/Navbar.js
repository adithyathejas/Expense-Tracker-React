import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from 'react-router-dom';
import { Button } from 'react-bootstrap';

const Navigation=()=>{
  let Navigate=useNavigate()
    const LogoutHandler = ()=>{
      localStorage.removeItem('token')
      Navigate('./signin')
      
    }
    return(
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Expense Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/home">Home</Nav.Link>
            <Nav.Link href="/expensetracker">tracker</Nav.Link>
            <Nav.Link href="/signin">Signin</Nav.Link>
          </Nav>
          <Nav><Button onClick={LogoutHandler}>Logout</Button></Nav>
        </Container>
      </Navbar>
    )
}

export default Navigation