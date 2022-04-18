import React from "react";
import niumLogo from '../../assets/nium.png';

import {
    Nav,
    NavLogo,
    Bars,
    NavMenu,
    NavBtn,
    NavBtnLink,
} from "./NavbarElements";


const Navbar = () => {
    return (
        <Nav>
            <NavLogo to="/">
                <img src={niumLogo} alt="NIUM Logo" style={{ width: '200px', height: '120px' }} />
            </NavLogo>
            <Bars />

            <NavMenu>
                <NavBtn>
                    <NavBtnLink to="/"
                        className={({ isActive }) => (isActive ? "link-active" : "link")}>
                        Search Candidates
                    </NavBtnLink>
                </NavBtn>
                <NavBtn>
                    <NavBtnLink to="/add"
                        className={({ isActive }) => (isActive ? "link-active" : "link")}>
                        Add Candidates
                    </NavBtnLink>
                </NavBtn>
            </NavMenu>
        </Nav>
    );
};
export default Navbar;