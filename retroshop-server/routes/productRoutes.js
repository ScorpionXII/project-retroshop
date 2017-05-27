const express = require('express');
const router = express.Router();
const ProductController = require('../controllers/productController.js');
const authChecker = require('../middlewares/authCheckerMiddleware');

/*
 * GET
 */
router.get('/', ProductController.list);

/*
 * GET
 */
router.get('/:id', ProductController.show);

/*
 * POST
 */
router.post('/', ProductController.create);

/*
 * PUT
 */
router.put('/:id', ProductController.update);

/*
 * DELETE
 */
router.delete('/:id', ProductController.remove);

module.exports = router;
