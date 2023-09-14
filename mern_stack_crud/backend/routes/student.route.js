let mongoose = require("mongoose"),
express = require("express"),
router = express.Router();

// Student Model
let studentSchema = require("../models/Student");

// CREATE Student
router.post("/create-student", (req, res, next) => {
	console.log(req);
	studentSchema.create(req.body)	
	.then((result) => {
		res.json(result);
	})
	.catch((err) => {
		res.send({ kq: 0, msg: 'something error' })
	})

});

// READ Students
router.get("/", (req, res) => {

	studentSchema.find({})	
	.then((result) => {
		res.json(result);
	})
	.catch((err) => {
		res.send({ kq: 0, msg: 'something error' })
	})


});

//get by id
router.get("/getstudent/:id", (req, res) => {

	studentSchema.findById(req.params.id)	
	.then((result) => {
		res.json(result);
	})
	.catch((err) => {
		res.send({ kq: 0, msg: 'something error' })
	})


});

// UPDATE student
router
.route("/update-student/:id")
// Get Single Student
.get((req, res) => {
	console.log(req.params.id)
	studentSchema.findById(req.params.id)	
	.then((result) => {
		res.json(result);
	})
	.catch((err) => {
		res.send({ kq: 0, msg: 'something error' })
	})
})

// Update Student Data
.put((req, res, next) => {
	studentSchema.findByIdAndUpdate(
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
studentSchema.findByIdAndDelete(req.params.id)
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
