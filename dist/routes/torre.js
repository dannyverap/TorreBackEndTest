"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express");
const torre_1 = require("../controllers/torre");
const router = (0, express_1.Router)();
exports.router = router;
router.post("/", torre_1.getUsersByStreams);
router.get("/:a", torre_1.getUserByName);
