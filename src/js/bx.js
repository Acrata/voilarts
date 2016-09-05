"use strict";

var _classie = require("../bower_components/classie");

var _classie2 = _interopRequireDefault(_classie);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

document.getElementById("trigger").addEventListener("click", function (event) {
    // display the current click count inside the clicked div
    var wrapper = document.getElementById('wrapper');
    event.preventDefault();
    _classie2.default.toggleClass(document.getElementById('wrapper'), 'is-open');
    console.log(_classie2.default);
}, false);
//# sourceMappingURL=bx.js.map
