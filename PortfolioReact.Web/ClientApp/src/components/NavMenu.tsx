import * as React from 'react';
import { Collapse, Container, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { HOME, ABOUT_ME, PROJECTS, CONTACT } from './../routing/WebRouting';

import './NavMenu.css';

interface INavMenu {
    isHome: boolean;
}

export const NavMenu: React.FunctionComponent<INavMenu> = ({isHome}) => {

    const [isOpen, setIsOpen] = React.useState<boolean>(false);

    const toggleNavbar = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header>
            <Navbar className={"navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" + (isHome ? " home-navmenu" : "")} light>
                <Container>
                    <NavbarBrand tag={Link} to={HOME}>Dennis von Bargen</NavbarBrand>
                    <NavbarToggler onClick={toggleNavbar} className="mr-2" />
                    <Collapse className="d-sm-inline-flex flex-sm-row-reverse" isOpen={isOpen} navbar>
                        <ul className="navbar-nav flex-grow">
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to={ABOUT_ME}>About me</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to={PROJECTS}>Projects</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink tag={Link} className="text-dark" to={CONTACT}>Contact</NavLink>
                            </NavItem>
                        </ul>
                    </Collapse>
                </Container>
            </Navbar>
        </header>
    );
}
