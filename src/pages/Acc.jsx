import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Acc() {
  const [students, setStudents] = useState([]);
  const [newStudent, setNewStudent] = useState({ first_name: '', last_name: '', email: '', age: '', grade: '', address: '' });

  useEffect(() => {
    axios.get('http://localhost:9080/api/students')
      .then(response => setStudents(response.data))
      .catch(error => console.error('Error fetching students!', error));
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewStudent(prevState => ({ ...prevState, [name]: value }));
  };

  const addStudent = () => {
    axios.post('http://localhost:9080/api/students', newStudent)
      .then(response => {
        setStudents([...students, response.data]);
        setNewStudent({ first_name: '', last_name: '', email: '', age: '', grade: '', address: '' });
      })
      .catch(error => console.error('Error adding student!', error));
  };

  const deleteStudent = (id) => {
    axios.delete(`http://localhost:9080/api/students/${id}`)
      .then(() => setStudents(students.filter(student => student.id !== id)))
      .catch(error => console.error('Error deleting student!', error));
  };

  return (
    <div className="w-full p-6 bg-white shadow-lg rounded-lg mt-10 text-black">
      <h2 className="text-2xl font-semibold mb-4 text-center">Student Table</h2>
      <table className="w-full border-collapse border border-gray-300 text-black">
        <thead>
          <tr className="bg-gray-200">
            <th className="border p-2">ID</th>
            <th className="border p-2">First Name</th>
            <th className="border p-2">Last Name</th>
            <th className="border p-2">Email</th>
            <th className="border p-2">Age</th>
            <th className="border p-2">Grade</th>
            <th className="border p-2">Address</th>
            <th className="border p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {students.map(student => (
            <tr key={student.id} className="hover:bg-gray-100">
              <td className="border p-2 text-center">{student.id}</td>
              <td className="border p-2">{student.first_name}</td>
              <td className="border p-2">{student.last_name}</td>
              <td className="border p-2">{student.email}</td>
              <td className="border p-2 text-center">{student.age}</td>
              <td className="border p-2 text-center">{student.grade}</td>
              <td className="border p-2">{student.address}</td>
              <td className="border p-2 text-center">
                <button onClick={() => deleteStudent(student.id)} className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-700">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      <h3 className="text-xl font-semibold mt-6 mb-4">Add New Student</h3>
      <form onSubmit={e => { e.preventDefault(); addStudent(); }} className="space-y-4 text-black">
        {['first_name', 'last_name', 'email', 'age', 'grade', 'address'].map(field => (
          <div key={field}>
            <label className="block font-medium capitalize">{field.replace('_', ' ')}:</label>
            <input
              className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-400 text-black"
              type={field === 'email' ? 'email' : field === 'age' ? 'number' : 'text'}
              name={field}
              value={newStudent[field]}
              onChange={handleInputChange}
              required
            />
          </div>
        ))}
        <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 w-full">Add Student</button>
      </form>
    </div>
  );
}

export default Acc;
