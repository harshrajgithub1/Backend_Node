let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Student Model
let userSchema = require("../models/User.js");

// CREATE Student
router.post("/create-user", (req, res, next) => {
	console.log(req);
	userSchema.create(req.body)	
	.then((result) => {
		res.json(result);
	})
	.catch((err) => {
		res.send({ kq: 0, msg: 'something error' })
	})

});

// READ Students
router.get("/", (req, res) => {

	userSchema.find({})	
	.then((result) => {
		res.json(result);
	})
	.catch((err) => {
		res.send({ kq: 0, msg: 'something error' })
	})


});

//get by id
router.get("/getuser/:id", (req, res) => {

	userSchema.findById(req.params.id)	
	.then((result) => {
		res.json(result);
	})
	.catch((err) => {
		res.send({ kq: 0, msg: 'something error' })
	})


});

//get by user email
router.get("/getuserbyemail/:email", (req, res) => {
console.log(req.params.email);
	userSchema.findOne({email: req.params.email })	
	.then((result) => {
		res.json(result);
	})
	.catch((err) => {
		res.send({ kq: 0, msg: 'something error' })
	})


});

// UPDATE student
router
.route("/update-user/:id")
// Get Single Student
.get((req, res) => {
	console.log(req.params.id)
	userSchema.findById(req.params.id)	
	.then((result) => {
		res.json(result);
	})
	.catch((err) => {
		res.send({ kq: 0, msg: 'something error' })
	})
})

// Update Student Data
.put((req, res, next) => {
	userSchema.findByIdAndUpdate(
	req.params.id,
	{
		$set: req.body,
	},
	(error, data) => {
		if (error) {
		return next(error);
		console.log(error);
		} else {
		res.json(data);
		console.log("Student updated successfully !");
		}
	}
	);
});

// Delete Student
router.delete("/delete-student/:id",
(req, res, next) => {
	userSchema.findByIdAndDelete(req.params.id)
  .then((removedPerson) => {
    if (removedPerson) {
      console.log('Removed Person:', removedPerson);
    } else {
      console.log('No person found with that ID.');
    }
  })
  .catch((err) => {
    console.error('Error:', err);
  });
});

module.exports = router;
