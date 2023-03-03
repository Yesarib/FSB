import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import '../style.css'

const Topbar = () => {
  return (
    <>
      <Navbar style={{backgroundColor:'#EEEEEE'}} className='shadow' variant="light">
        <Container>
          <Navbar.Brand style={{fontWeight:'400', fontSize:'24px'}} href="/">FSB İnşaat</Navbar.Brand>
          <Nav style={{fontWeight:'400', fontSize:'18px'}} className="d-flex align-items-center justify-content-center">
            <Nav.Link href="/">Ana Sayfa</Nav.Link>
            <Nav.Link href="/project">Projeler</Nav.Link>
            <Nav.Link href="/about">Hakkında</Nav.Link>
            <Nav.Link href="/contact">İletişim</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;