import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NavbarComponents = () => {
  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">POS APP</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbar-nav" />
        <Navbar.Collapse id="navbar-nav" className="justify-content-end">
          <Nav>
            <NavDropdown
              title={
                <>
                  <Image
                    src="/img/img_avatar.png"
                    alt="User Avatar"
                    roundedCircle
                    width={30}
                    className="me-2"
                  />
                  Pojok Code
                </>
              }
              id="collapsible-nav-dropdown"
              align="end"
            >
              <NavDropdown.Item eventKey="profile" href="#">
                Profil
              </NavDropdown.Item>
              <NavDropdown.Item eventKey="logout" href="/logout">
                Logout
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponents;
