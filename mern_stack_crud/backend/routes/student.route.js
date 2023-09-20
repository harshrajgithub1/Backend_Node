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
router.route("/update-student/:id").put(async (req, res, next) => {
	try {
	  const updatedStudent = await studentSchema.findByIdAndUpdate(
		req.params.id,
		{
		  $set: req.body,
		},
		{ new: true } // This option returns the updated document
	  );
  
	  if (!updatedStudent) {
		// If the document is not found, return a 404 status
		return res.status(404).json({ message: "Student not found" });
	  }
  
	  res.json(updatedStudent);
	  console.log("Student updated successfully !");
	} catch (error) {
	  console.error(error);
	  next(error); // Pass the error to the error handling middleware
	}
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
