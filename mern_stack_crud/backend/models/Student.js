const mongoose = require('mongoose');
//const { date } = require('yup');
const Schema = mongoose.Schema;

let studentSchema = new Schema({
name: {
	type: String
},
email: {
	type: String
},
rollno: {
	type: Number
},
dateofbirth: {
	type: String
},
phonenumber: {
	type: Number
},
password: {
	type: String
},
}, {
	collection: 'students'
})

module.exports = mongoose.model('Student', studentSchema);
