import * as React from 'react';
import { useLocation } from 'react-router';
import { Container } from 'reactstrap';
import { HOME } from '../routing/WebRouting';
import { NavMenu } from './NavMenu';

export const Layout: React.FunctionComponent = ({ children }) => {

    const location = useLocation();

    const isHome = () => {
        return location.pathname === HOME;
    }

    return (
        <>
            <NavMenu isHome={isHome()} />
            <Container className={isHome() ? "home" : ""}>
                {children}
            </Container>
        </>
    );
}
