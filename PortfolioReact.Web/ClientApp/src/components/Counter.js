"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Counter = void 0;
var React = require("react");
exports.Counter = function () {
    var _a = React.useState(0), currentCount = _a[0], setCurrentCount = _a[1];
    var incrementCounter = function () {
        setCurrentCount(currentCount + 1);
    };
    return (React.createElement(React.Fragment, null,
        React.createElement("h1", null, "Counter"),
        React.createElement("p", null, "This is a simple example of a React component."),
        React.createElement("p", { "aria-live": "polite" },
            "Current count: ",
            React.createElement("strong", null, currentCount)),
        React.createElement("button", { className: "btn btn-primary", onClick: incrementCounter }, "Increment")));
};
//# sourceMappingURL=Counter.js.map