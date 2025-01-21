import { Col, Row } from "react-bootstrap";
import "./App.css";
import NavbarComponents from "./components/NavbarComponents";
import Sidebar from "./components/Sidebar.jsx";

function App() {
  return (
    <>
      <NavbarComponents />
      <Row>
        <Col xl={2} lg={3} className="border-sm mt-1">
          <Sidebar />
        </Col>
        <Col xl={10} lg={9} className="border-sm ps-1 mt-1">
          <Row className="bg-body-tertiary">
            <Col>
              <h4>Content</h4>
            </Col>
          </Row>
        </Col>
      </Row>
    </>
  );
} 

export default App;
