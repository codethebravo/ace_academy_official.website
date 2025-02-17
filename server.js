const express = require('express');
const mongoose = require('mongoose');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const PORT = 5000;
const app = express();

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Serve static files from the 'public' folder
app.use(express.static(path.join(__dirname, 'frontend')));

// Connect to MongoDB
mongoose.connect('mongodb://localhost:27017/aceacademy', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
})
  .then(() => console.log('Connected to MongoDB'))
  .catch((err) => console.error('Failed to connect to MongoDB:', err));

// Define a schema for student enrollment
const studentSchema = new mongoose.Schema({
  studentName: String,
  dob: String,
  gender: String,
  address: String,
  city: String,
  state: String,
  country: String,
  fatherName: String,
  fatherQualification: String,
  fatherOccupation: String,
  motherName: String,
  motherQualification: String,
  motherOccupation: String,
  email: String,
  phone: String,
  previousSchool: String,
  lastClass: String,
  admissionClass: String,
  percentage: String,
});

const Student = mongoose.model('Student', studentSchema);

// / Route to serve the index.html file as the root
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
});

// API endpoint for student enrollment
app.post('/api/enroll', async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json({ message: 'Enrollment data saved successfully!' });
  } catch (error) {
    res.status(500).json({ message: 'Error saving enrollment data.', error });
  }
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

// // Define a schema for teacher application
// const teacherSchema = new mongoose.Schema({
//   teacherName: String,
//   gender: String,
//   dob: String,
//   contactNumber: String,
//   email: String,
//   city: String,
//   state: String,
//   country: String,
//   address: String,
//   highestQualification: String,
//   specialization: String,
//   teachingExperience: String,
//   previousSchool: String,
//   preferredCurriculum: String,
//   preferredGrades: String,
//   reasonToJoin: String,
//   resume: {
//     type: String, // File path or URL if the resume is uploaded and saved somewhere
//     required: false, // Optional field
//   },
// });

//   const Teacher = mongoose.model('teacher', teacherSchema);


// // API endpoint for student enrollment
// app.post('/api/enroll', async (req, res) => {
//   try {
//     const student = new Student(req.body);
//     await student.save();
//     res.status(201).json({ message: 'Enrollment data saved successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error saving enrollment data.', error });
//   }
// });

// // API endpoint for teacher enrollment
// app.post('/api/enroll-teacher', async (req, res) => {
//   try {
//     const teacher = new Teacher(req.body); // Assuming 'Teacher' is your Mongoose model for teachers
//     await teacher.save();
//     res.status(201).json({ message: 'Teacher enrollment data saved successfully!' });
//   } catch (error) {
//     res.status(500).json({ message: 'Error saving teacher enrollment data.', error });
//   }
// }); 

