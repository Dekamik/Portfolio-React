"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Layout = void 0;
var React = require("react");
var reactstrap_1 = require("reactstrap");
var NavMenu_1 = require("./NavMenu");
exports.Layout = function (_a) {
    var children = _a.children;
    return (React.createElement(React.Fragment, null,
        React.createElement(NavMenu_1.NavMenu, null),
        React.createElement(reactstrap_1.Container, null, children)));
};
//# sourceMappingURL=Layout.js.map