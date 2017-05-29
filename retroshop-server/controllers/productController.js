const ProductModel = require('../models/productModel.js');

/**
 * ProductController.js
 *
 * @description :: Server-side logic for managing Products.
 */
module.exports = {

    /**
     * ProductController.list()
     */
    list: function (req, res) {
        ProductModel.find(function (err, Products) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Product.',
                    error: err
                });
            }
            return res.json(Products);
        }).populate('seller');
    },

    /**
     * ProductController.show()
     */
    show: function (req, res) {
        var id = req.params.id;
        ProductModel.findOne({_id: id}, function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Product.',
                    error: err
                });
            }
            if (!Product) {
                return res.status(404).json({
                    message: 'No such Product'
                });
            }
            return res.json(Product);
        });
    },

    /**
     * ProductController.create()
     */
    create: function (req, res) {
        var Product = new ProductModel({
			title : req.body.title,
			description : req.body.description,
			category : req.body.category,
			price : req.body.price,
			images : req.body.images,
			seller : req.body.seller,
			soldTo : req.body.soldTo
        });

        Product.save(function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when creating Product',
                    error: err
                });
            }
            return res.status(201).json(Product);
        });
    },

    /**
     * ProductController.update()
     */
    update: function (req, res) {
        var id = req.params.id;
        ProductModel.findOne({_id: id}, function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when getting Product',
                    error: err
                });
            }
            if (!Product) {
                return res.status(404).json({
                    message: 'No such Product'
                });
            }

            Product.title = req.body.title ? req.body.title : Product.title;
			Product.description = req.body.description ? req.body.description : Product.description;
			Product.category = req.body.category ? req.body.category : Product.category;
			Product.price = req.body.price ? req.body.price : Product.price;
			Product.images = req.body.images ? req.body.images : Product.images;
			Product.seller = req.body.seller ? req.body.seller : Product.seller;
			Product.soldTo = req.body.soldTo ? req.body.soldTo : Product.soldTo;
			
            Product.save(function (err, Product) {
                if (err) {
                    return res.status(500).json({
                        message: 'Error when updating Product.',
                        error: err
                    });
                }

                return res.json(Product);
            });
        });
    },

    /**
     * ProductController.remove()
     */
    remove: function (req, res) {
        var id = req.params.id;
        ProductModel.findByIdAndRemove(id, function (err, Product) {
            if (err) {
                return res.status(500).json({
                    message: 'Error when deleting the Product.',
                    error: err
                });
            }
            return res.status(204).json();
        });
    }
};
