'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail, FiPhone } from 'react-icons/fi';

export default function AboutPage() {
  const techStack = [
    { name: 'React', logo: '⚛️' },
    { name: 'Next.js', logo: '▲' },
    { name: 'TypeScript', logo: '🔷' },
    { name: 'Tailwind CSS', logo: '🎨' },
    { name: 'Java', logo: '☕' },
    { name: 'Spring', logo: '🍃' },
    { name: 'MySQL', logo: '🐬' },
    { name: 'Git', logo: '🔄' },
    { name: 'PHP', logo: '🐘' },
    { name: 'JavaScript', logo: '🟨' },
  ];

  const softSkills = [
    { name: 'Communication', icon: '🗣️', description: 'Strong interpersonal skills and clear communication style' },
    { name: 'Problem Solving', icon: '🧩', description: 'Analytical thinker with creative approaches to technical challenges' },
    { name: 'Teamwork', icon: '👥', description: 'Collaborative team player who thrives in diverse environments' },
    { name: 'Time Management', icon: '⏱️', description: 'Excellent prioritization and deadline management skills' }
  ];

  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 }
  };

  return (
    <div className="min-h-screen py-20 px-4">
      <div className="max-w-6xl mx-auto">
        {/* About Me Header */}
        <motion.div
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-white">
            About <span className="text-indigo-600 dark:text-indigo-400">Me</span>
          </h1>
          <p className="text-lg text-gray-700 dark:text-gray-300 max-w-3xl mx-auto">
            Learn about my background, skills, and what drives me as a developer.
          </p>
        </motion.div>

        {/* About Me Content */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-20">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="md:col-span-2 flex justify-center"
          >
            <div className="relative h-80 w-80 md:h-96 md:w-96 rounded-lg overflow-hidden shadow-xl">
              <Image
                src="/facecard.jpg"
                alt="SHEMA Profile"
                fill
                className="object-cover"
              />
            </div>
          </motion.div>

          {/* Bio */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="md:col-span-3"
          >
            <h2 className="text-2xl font-bold mb-4 text-gray-900 dark:text-white">
              My Journey
            </h2>
            <div className="space-y-4 text-gray-700 dark:text-gray-300">
              <p>
                Hello! I&apos;m Derrick, a passionate Full Stack Developer with a strong foundation in both frontend and backend technologies.
                I specialize in creating responsive, user-friendly web applications with modern frameworks like React and Next.js.
              </p>
              <p>
                With a background in computer science and real-world project experience, I enjoy tackling complex 
                problems and building elegant solutions. I&apos;m constantly learning new technologies to stay at the cutting edge
                of web development.
              </p>
              <p>
                When I&apos;m not coding, I enjoy contributing to open-source projects, sharing knowledge with the developer 
                community, and exploring new technologies. I believe that good software can make a positive impact on people&apos;s lives.
              </p>
            </div>

            {/* Contact Links */}
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4 text-gray-900 dark:text-white">
                Connect With Me
              </h3>
              <div className="flex space-x-4">
                <Link 
                  href="https://github.com/Denzo31" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  <FiGithub size={20} />
                  <span>GitHub</span>
                </Link>
                <Link 
                  href="https://linkedin.com/in/shederrick03" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  <FiLinkedin size={20} />
                  <span>LinkedIn</span>
                </Link>
                <Link 
                  href="mailto:shederrick03@gmail.com" 
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  <FiMail size={20} />
                  <span>Email</span>
                </Link>
                <Link 
                  href="tel:+250788672296" 
                  className="flex items-center space-x-2 text-gray-700 dark:text-gray-300 hover:text-indigo-600 dark:hover:text-indigo-400 transition-colors duration-300"
                >
                  <FiPhone size={20} />
                  <span>Call</span>
                </Link>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Tech Stack */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Tech <span className="text-indigo-600 dark:text-indigo-400">Stack</span>
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6">
            {techStack.map((tech, index) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col items-center justify-center text-center"
              >
                <div className="text-4xl mb-3">{tech.logo}</div>
                <h3 className="font-medium text-gray-900 dark:text-white">{tech.name}</h3>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Soft Skills */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1 }}
          viewport={{ once: true }}
        >
          <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white text-center">
            Soft <span className="text-indigo-600 dark:text-indigo-400">Skills</span>
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {softSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                viewport={{ once: true }}
                className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300 flex items-start space-x-4"
              >
                <div className="text-3xl">{skill.icon}</div>
                <div>
                  <h3 className="text-xl font-medium mb-2 text-gray-900 dark:text-white">{skill.name}</h3>
                  <p className="text-gray-700 dark:text-gray-300">{skill.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
} 