"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = exports.register = void 0;
const bcrypt_1 = __importDefault(require("bcrypt"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const user_model_1 = require("../models/user.model");
const SECRET = process.env.JWT_SECRET_KEY || 'secretkey';
const register = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const existing = yield user_model_1.User.findOne({ where: { username } });
        if (existing) {
            return res.status(400).json({ message: 'El usuario ya existe' });
        }
        const hashedPassword = yield bcrypt_1.default.hash(password, 10);
        const user = yield user_model_1.User.create({ username, password: hashedPassword });
        return res.status(201).json({ message: 'Usuario creado', user });
    }
    catch (err) {
        return res.status(500).json({ message: 'Error en el registro', error: err });
    }
});
exports.register = register;
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const { username, password } = req.body;
        const user = yield user_model_1.User.findOne({ where: { username } });
        if (!user) {
            return res.status(401).json({ message: 'Usuario no encontrado' });
        }
        const valid = yield bcrypt_1.default.compare(password, user.password);
        if (!valid) {
            return res.status(401).json({ message: 'Contraseña incorrecta' });
        }
        const token = jsonwebtoken_1.default.sign({ id: user.id, username: user.username }, SECRET, { expiresIn: '1h' });
        return res.json({ message: 'Login exitoso', token });
    }
    catch (err) {
        return res.status(500).json({ message: 'Error en el login', error: err });
    }
});
exports.login = login;
