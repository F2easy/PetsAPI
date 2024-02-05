const mongoose = require('mongoose')

const petSchema = new mongoose.Schema(
	{
		name: {
			type: String,
			required: true,
		},
		type: {
			type: Number,
			required: true,
		},
    age: {
			type: String,
			required: true,
		},
    adoptable: {
			type: Boolean,
			required: true,
      defualt: false,
		},
		owner: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
		},
	},
	{
		timestamps: true,
	}
)

module.exports= mongoose.model('Pet',petSchema)