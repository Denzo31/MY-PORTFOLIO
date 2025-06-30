'use client';

import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FiCheckCircle } from 'react-icons/fi';

interface FormData {
  name: string;
  studentId: string;
  course: string;
}

interface Course {
  id: string;
  name: string;
  description: string;
}

export default function RegisterPage() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    studentId: '',
    course: ''
  });
  
  const [submitted, setSubmitted] = useState(false);
  const [registrations, setRegistrations] = useState<FormData[]>([]);
  
  const courses: Course[] = [
    { id: 'java', name: 'Java Programming', description: 'Learn core Java concepts and OOP principles' },
    { id: 'web', name: 'Web Development', description: 'HTML, CSS, JavaScript and responsive design' },
    { id: 'react', name: 'React Framework', description: 'Building modern UIs with React and hooks' },
    { id: 'node', name: 'Node.js Backend', description: 'Server-side JavaScript with Express' },
    { id: 'db', name: 'Database Design', description: 'SQL, NoSQL and data modeling concepts' }
  ];

  // Load existing registrations from localStorage on component mount
  useEffect(() => {
    const savedRegistrations = localStorage.getItem('courseRegistrations');
    if (savedRegistrations) {
      setRegistrations(JSON.parse(savedRegistrations));
    }
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevState => ({
      ...prevState,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Simple validation
    if (!formData.name || !formData.studentId || !formData.course) {
      alert('Please fill in all fields');
      return;
    }

    // Save to state and localStorage
    const newRegistrations = [...registrations, formData];
    setRegistrations(newRegistrations);
    localStorage.setItem('courseRegistrations', JSON.stringify(newRegistrations));
    
    // Show success message
    setSubmitted(true);
    
    // Reset form after a delay
    setTimeout(() => {
      setFormData({
        name: '',
        studentId: '',
        course: ''
      });
      setSubmitted(false);
    }, 3000);
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-5xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            Course <span className="text-indigo-600 dark:text-indigo-400">Registration</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Register for our courses by filling out the form below. All fields are required.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-5 gap-10">
          {/* Form Section */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="md:col-span-3"
          >
            <div className="bg-white dark:bg-gray-800 rounded-xl shadow-lg p-8">
              {submitted ? (
                <div className="flex flex-col items-center justify-center h-full py-8">
                  <div className="text-green-500 mb-4">
                    <FiCheckCircle size={64} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 dark:text-white mb-2">
                    Registration Successful!
                  </h3>
                  <p className="text-gray-700 dark:text-gray-300 text-center max-w-md">
                    Thank you for registering! We&apos;ll be in touch soon.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Full Name
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your full name"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="studentId" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Student ID
                    </label>
                    <input
                      type="text"
                      id="studentId"
                      name="studentId"
                      value={formData.studentId}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      placeholder="Enter your student ID"
                      required
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="course" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                      Select Course
                    </label>
                    <select
                      id="course"
                      name="course"
                      value={formData.course}
                      onChange={handleChange}
                      className="w-full px-4 py-2 border border-gray-300 dark:border-gray-600 rounded-lg focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 bg-white dark:bg-gray-700 text-gray-900 dark:text-white"
                      required
                    >
                      <option value="" disabled>Select a course</option>
                      {courses.map((course) => (
                        <option key={course.id} value={course.id}>
                          {course.name}
                        </option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="pt-4">
                    <button
                      type="submit"
                      className="w-full px-6 py-3 bg-indigo-600 hover:bg-indigo-700 text-white font-medium rounded-lg transition-colors duration-300 shadow-md hover:shadow-lg"
                    >
                      Register Now
                    </button>
                  </div>
                </form>
              )}
            </div>
          </motion.div>
          
          {/* Info Section */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="md:col-span-2"
          >
            <div className="bg-indigo-50 dark:bg-gray-750 rounded-xl shadow-lg p-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Available Courses
              </h3>
              <div className="space-y-4">
                {courses.map((course) => (
                  <div
                    key={course.id}
                    className="bg-white dark:bg-gray-800 p-4 rounded-lg shadow"
                  >
                    <h4 className="font-medium text-indigo-600 dark:text-indigo-400">
                      {course.name}
                    </h4>
                    <p className="text-sm text-gray-700 dark:text-gray-300 mt-1">
                      {course.description}
                    </p>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 bg-white dark:bg-gray-800 p-4 rounded-lg shadow">
                <h4 className="font-medium text-gray-900 dark:text-white mb-2">
                  Registration Info
                </h4>
                <ul className="text-sm text-gray-700 dark:text-gray-300 space-y-1">
                  <li>• Courses start on the first Monday of each month</li>
                  <li>• Registration closes 1 week before start date</li>
                  <li>• Virtual and in-person options available</li>
                  <li>• Certificate provided upon completion</li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
        
        {/* Registration List */}
        {registrations.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            className="mt-16"
          >
            <h3 className="text-2xl font-bold mb-6 text-center text-gray-900 dark:text-white">
              Current <span className="text-indigo-600 dark:text-indigo-400">Registrations</span>
            </h3>
            <div className="overflow-x-auto">
              <table className="min-w-full bg-white dark:bg-gray-800 rounded-xl shadow-lg">
                <thead className="bg-gray-50 dark:bg-gray-700">
                  <tr>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Name</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Student ID</th>
                    <th className="py-3 px-4 text-left text-sm font-medium text-gray-600 dark:text-gray-300">Course</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200 dark:divide-gray-700">
                  {registrations.map((reg, index) => (
                    <tr key={index}>
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{reg.name}</td>
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">{reg.studentId}</td>
                      <td className="py-3 px-4 text-sm text-gray-700 dark:text-gray-300">
                        {courses.find(c => c.id === reg.course)?.name || reg.course}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
} 