import Container from 'react-bootstrap/Container'
import './RectangleBox.css';

const BackgroundCard = (props)=> {
    return(
        <Container style={{background: 'linear-gradient(to right, #0052D4, #65C7F7)',padding:'10px',color:'white',marginTop:'10px'}} fluid>
          
            {props.children}
           
        </Container>
    )
}

export default BackgroundCard