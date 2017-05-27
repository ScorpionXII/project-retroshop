const express = require('express');
const router = express.Router();
const UserController = require('../controllers/userController.js');
const authChecker = require('../middlewares/authCheckerMiddleware');
const { ensureLoggedIn, ensureLoggedOut } = require('connect-ensure-login');

/*
 * GET
 */
router.get('/', UserController.list);

/*
 * GET
 */
router.get('/:id', UserController.show);

/*
 * POST
 */
router.post('/', UserController.create);

/*
 * PUT
 */
router.put('/:id', UserController.update);

/*
 * DELETE
 */
router.delete('/:id', UserController.remove);

module.exports = router;
