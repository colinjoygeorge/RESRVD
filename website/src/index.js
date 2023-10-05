import React from "react";
import { Nav, NavLink, NavMenu }
    from "./components/Navbar/NavbarElements";
 
const Navbar = () => {
    return (
        <>
            <Nav>
                <NavMenu>
                    <NavLink to="/about" activeStyle>
                        About
                    </NavLink>
                    <NavLink to="/calender" activeStyle>
                        Calender
                    </NavLink>
                    <NavLink to="/admin" activeStyle>
                        Admin
                    </NavLink>
                    <NavLink to="/login" activeStyle>
                        Login
                    </NavLink>
                </NavMenu>
            </Nav>
        </>
    );
};
 
export default Navbar;