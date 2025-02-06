import { Router } from 'express';
import { adminRegister } from '../controller/admin/auth.controller.js';
import { validator } from '../helpers/validator.js';
import { authValidation } from '../validation/auth.validation.js';

const routes = Router();

routes.post('/register', validator(authValidation),adminRegister);

export default routes;
