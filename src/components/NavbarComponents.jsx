import { Container, Image, Nav, NavDropdown, Navbar } from "react-bootstrap";

const NavbarComponents = () => {
  const avatar = (
    <Image
      src={"/img/img_avatar.png"}
      alt="User"
      roundedCircle
      style={{ width: "30px" }}
    />
  );
  return (
    <Navbar className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand href="#home">POS APP</Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse className="justify-content-end">
          <Nav>
            <NavDropdown
              title={
                <>
                  {avatar} {"Pojok Code"}
                </>
              }
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item href="#">Profil</NavDropdown.Item>
              <NavDropdown.Item href="/logout">Logout</NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavbarComponents;
