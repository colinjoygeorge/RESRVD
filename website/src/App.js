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

export default function App() {
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
          </Navbar>
        </Header>
      </Container>
    </div>
  )
}
