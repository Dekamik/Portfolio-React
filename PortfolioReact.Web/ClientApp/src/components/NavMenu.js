"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NavMenu = void 0;
var React = require("react");
var reactstrap_1 = require("reactstrap");
var react_router_dom_1 = require("react-router-dom");
var RoutingConstants_1 = require("./../RoutingConstants");
require("./NavMenu.css");
exports.NavMenu = function () {
    var _a = React.useState(true), isOpen = _a[0], setIsOpen = _a[1];
    var toggleNavbar = function () {
        setIsOpen(!isOpen);
    };
    return (React.createElement("header", null,
        React.createElement(reactstrap_1.Navbar, { className: "navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3", light: true },
            React.createElement(reactstrap_1.Container, null,
                React.createElement(reactstrap_1.NavbarBrand, { tag: react_router_dom_1.Link, to: RoutingConstants_1.HOME }, "PortfolioReact.Web"),
                React.createElement(reactstrap_1.NavbarToggler, { onClick: toggleNavbar, className: "mr-2" }),
                React.createElement(reactstrap_1.Collapse, { className: "d-sm-inline-flex flex-sm-row-reverse", isOpen: isOpen, navbar: true },
                    React.createElement("ul", { className: "navbar-nav flex-grow" },
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: RoutingConstants_1.HOME }, "Home")),
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: RoutingConstants_1.COUNTER }, "Counter")),
                        React.createElement(reactstrap_1.NavItem, null,
                            React.createElement(reactstrap_1.NavLink, { tag: react_router_dom_1.Link, className: "text-dark", to: RoutingConstants_1.FETCH_DATA }, "Fetch data"))))))));
};
//# sourceMappingURL=NavMenu.js.map