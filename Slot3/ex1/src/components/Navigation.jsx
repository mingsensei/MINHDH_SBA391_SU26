import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';

export const Navigation = () => {
    return (
        <Navbar bg="light" expand="lg">
            <Container>
                <Navbar.Brand href="#">
                    Single Page Application
                </Navbar.Brand>

                <Nav className="me-auto">
                    <Nav.Link href="#">
                        Home
                    </Nav.Link>

                    <Nav.Link href="#">
                        Link
                    </Nav.Link>
                </Nav>
            </Container>
        </Navbar>
    );
}