import React, { useState, useEffect } from 'react';

function User() {
  const [students, setStudents] = useState([]);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [grade, setGrade] = useState('');
  const [address, setAddress] = useState('');

  useEffect(() => {
    fetch('http://localhost:9080/api/students')
      .then(response => response.json())
      .then(data => setStudents(data))
      .catch(error => console.error('Error fetching students:', error));
  }, []);

  const addStudent = () => {
    const newStudent = { firstName, lastName, email, age, grade, address };
    fetch('http://localhost:9080/api/students', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(newStudent),
    })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setStudents([...students, data]);
        setFirstName('');
        setLastName('');
        setEmail('');
        setAge('');
        setGrade('');
        setAddress('');
      })
      .catch(error => console.error('Error adding student:', error));
  };

  return (
    <div>
      <h1>Student List</h1>
      <div>
        <input
          type="text"
          placeholder="First Name"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
        />
        <input
          type="text"
          placeholder="Last Name"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
        />
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          type="text"
          placeholder="Age"
          value={age}
          onChange={(e) => setAge(e.target.value)}
        />
        <input
          type="text"
          placeholder="Grade"
          value={grade}
          onChange={(e) => setGrade(e.target.value)}
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
        <button onClick={addStudent}>Add Student</button>
      </div>
      <ul>
        {students.map((student, index) => (
          <li key={index}>
            {student.firstName} {student.lastName} - {student.email} - {student.age} - {student.grade} - {student.address}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default User;