"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const app = express();
app.use(express.static('frontend'));
let server = app.listen(process.env.PORT || 8081, () => {
    console.log("Harp listening at ", server.address());
});
//# sourceMappingURL=app.js.map