import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

const Topbar = () => {
  return (
    <>
      <Navbar bg="secondary" variant="dark">
        <Container>
          <Navbar.Brand style={{fontWeight:'400', fontSize:'24px'}} href="#home">FSB İnşaat</Navbar.Brand>
          <Nav style={{fontWeight:'300', fontSize:'18px'}} className="d-flex align-items-center justify-content-center">
            <Nav.Link href="#home">Ana Sayfa</Nav.Link>
            <Nav.Link href="#features">Hakkında</Nav.Link>
            <Nav.Link href="#pricing">İletişim</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default Topbar;