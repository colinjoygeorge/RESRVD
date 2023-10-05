import {
  Container,
  Header,
  Content,
  Nav,
  Navbar,
  FlexboxGrid,
  Panel,
  Form,
  ButtonToolbar,
  Button,
  Footer,
} from "rsuite";
import "rsuite/dist/rsuite.min.css";

export default function Login() {
  return (
    <div>
      <Container>
        <Header>
          <Navbar appearance="inverse"
          style={{ backgroundColor: "green" }}>
            <Navbar.Brand>RESRVD</Navbar.Brand>
            <Nav>
              <Nav.Item>Home</Nav.Item>
              <Nav.Item>About</Nav.Item>
            </Nav>
            <Nav pullRight>
              <Nav.Item>Admin Login</Nav.Item>
            </Nav>
          </Navbar>
        </Header>
        <div style={{ textAlign: "center" }}>
          <h2>RESRVD</h2>
          <h4 style={{ color: "purple" }}>
            
          </h4>
      </Container>
    </div>
  )
}
