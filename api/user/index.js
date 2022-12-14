"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const user_controller_1 = require("./user.controller");
const router = (0, express_1.Router)();
// RESTful API
// GET /api/users
router.get('/', user_controller_1.handleAllGetUsers);
// GET /api/users/:id
// POST /api/users
// PATCH /api/users/:id
// DELETE /api/users/:id
exports.default = router;
