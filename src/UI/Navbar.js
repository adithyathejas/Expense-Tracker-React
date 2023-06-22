import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Navigation=()=>{
    return(
    <Navbar bg="dark" data-bs-theme="dark">
        <Container>
          <Navbar.Brand href="/">Expense Tracker</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/expensetracker">tracker</Nav.Link>
            <Nav.Link href="/signin">Signin</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    )
}

export default Navigation