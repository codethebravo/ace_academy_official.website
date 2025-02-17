// Student Enrollment Form Submission
document.getElementById('enrollmentForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form submission

  const studentData = {
    studentName: document.getElementById('studentName').value,
    dob: document.getElementById('dob').value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    address: document.getElementById('address').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    country: document.getElementById('country').value,
    fatherName: document.getElementById('fatherName').value,
    fatherQualification: document.getElementById('fatherQualification').value,
    fatherOccupation: document.getElementById('fatherOccupation').value,
    motherName: document.getElementById('motherName').value,
    motherQualification: document.getElementById('motherQualification').value,
    motherOccupation: document.getElementById('motherOccupation').value,
    email: document.getElementById('email').value,
    phone: document.getElementById('phone').value,
    previousSchool: document.getElementById('previousSchool').value,
    lastClass: document.getElementById('lastClass').value,
    admissionClass: document.getElementById('admissionClass').value,
    percentage: document.getElementById('percentage').value,
  };

  try {
    const response = await fetch('http://localhost:5000/api/enroll', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(studentData),
    });

    const result = await response.json();
    if (response.ok) {
      // Show the success message
      document.getElementById('message').style.display = 'block';
      // Reset the form
      document.getElementById('enrollmentForm').reset();
    } else {
      alert(result.message || 'Error saving enrollment data.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});

// Teacher Application Form Submission
document.getElementById('applicationForm').addEventListener('submit', async (event) => {
  event.preventDefault(); // Prevent form submission

  const teacherData = {
    teacherName: document.getElementById('Name').value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    dob: document.getElementById('dob').value,
    contactNumber: document.getElementById('contactNumber').value,
    email: document.getElementById('email').value,
    city: document.getElementById('city').value,
    state: document.getElementById('state').value,
    country: document.getElementById('country').value,
    address: document.getElementById('address').value,
    highestQualification: document.getElementById('highestQualification').value,
    specialization: document.getElementById('specialization').value,
    teachingExperience: document.getElementById('teachingExperience').value,
    previousSchool: document.getElementById('previousSchool').value,
    preferredCurriculum: document.getElementById('preferredCurriculum').value,
    preferredGrades: document.getElementById('preferredGrades').value,
    reasonToJoin: document.getElementById('reasonToJoin').value,
    // For file uploads (if any), you may need to handle them separately
    resume: document.getElementById('resume').files[0] ? document.getElementById('resume').files[0].name : null, // You can save the file name or process it further
  };

  try {
    const response = await fetch('http://localhost:5000/api/teacher-apply', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(teacherData),
    });

    const result = await response.json();
    if (response.ok) {
      // Show the success message
      document.getElementById('messageTeacher').style.display = 'block';
      // Reset the form
      document.getElementById('applicationForm').reset();
    } else {
      alert(result.message || 'Error submitting teacher application.');
    }
  } catch (error) {
    console.error('Error:', error);
    alert('An error occurred. Please try again.');
  }
});
