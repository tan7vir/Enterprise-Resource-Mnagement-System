"use strict";
/**
 * @module UserRoutes
 * @description This module defines the routes for user-related HTTP requests.
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @route POST /api/addNewUser
 * @description Route to add a new user.
 * @access Public
 */
/**
 * @route GET /
 * @description Route to respond with "hi" at the root URL.
 * @access Public
 */
const express_1 = require("express");
const userController_1 = require("../controllers/userController");
const addUserService_1 = require("../services/addUserService");
const router = (0, express_1.Router)();
const userService = new addUserService_1.addUserService();
const userController = new userController_1.UserController(userService);
// router.post('/addNewUser', userController.addUser.bind(userController));
router.post('/addNewUser', (req, res) => {
    userController.addUser(req, res);
});
router.get('/', (req, res) => {
    res.send('-----------------hi-----------------');
});
exports.default = router;
//# sourceMappingURL=userRoutes.js.map