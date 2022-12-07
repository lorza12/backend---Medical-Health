"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const database_1 = __importDefault(require("./configdt/database"));
const app = (0, express_1.default)();
(0, database_1.default)();
app.get('/', (req, res) => {
    res.send('hola');
});
app.listen(8080, () => {
    console.log('server is running on port 8080');
});
