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
						style={{ backgroundColor: "purple" }}> 
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
						RESRVD Login Page 
					</h4> 
				</div> 
				<Content> 
					<FlexboxGrid justify="center"
						style={{ margin: 20 }}> 
						<FlexboxGrid.Item> 
							<Panel header={<h3>Login</h3>} bordered> 
								<Form> 
									<Form.Group> 
										<Form.ControlLabel> 
											Email 
										</Form.ControlLabel> 
										<Form.Control name="email"
											type="email" required /> 
										<Form.HelpText tooltip> 
											Required 
										</Form.HelpText> 
									</Form.Group> 
									<Form.Group> 
										<Form.ControlLabel> 
											Password 
										</Form.ControlLabel> 
										<Form.Control name="password"
											type="password" /> 
									</Form.Group> 
									<Form.Group> 
										<ButtonToolbar> 
											<Button appearance="primary"
												color="green"> 
												Sign in
											</Button> 
											<Button appearance="ghost"
												color="red">Cancel</Button> 
										</ButtonToolbar> 
									</Form.Group> 
								</Form> 
							</Panel> 
						</FlexboxGrid.Item> 
					</FlexboxGrid> 
				</Content> 
			</Container> 
		</div> 
	); 
}
