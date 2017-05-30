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
router.post('/', authChecker, ProductController.create);

/*
 * PUT
 */
router.put('/:id', authChecker, ProductController.update);

/*
 * DELETE
 */
router.delete('/:id', authChecker, ProductController.remove);

/*
 * FILTER BY SELLER
 */

router.get('/seller/:id', authChecker, ProductController.seller);

module.exports = router;
