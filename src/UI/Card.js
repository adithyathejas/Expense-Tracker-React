import Container from 'react-bootstrap/Container'
import './RectangleBox.css';

const Card = (props)=> {
    return(
        <Container style={{backgroundColor:'grey',height:'100vh',padding:'10px',color:'white'}} fluid>
            <div className="rectangle-box">
            {props.children}
            </div>
        </Container>
    )
}

export default Card