const mongoose = require('mongoose');const Schema   = mongoose.Schema;var ProductSchema = new Schema({	'title' : String,	'description' : String,	'category' : { type: String, enum: ["console", "accessory", "game"]},	'price' : Number,	'images' : Array,	'seller' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	},	'soldTo' : {	 	type: Schema.Types.ObjectId,	 	ref: 'User'	}});ProductSchema.setupTimestamp(true);module.exports = mongoose.model('Product', ProductSchema);