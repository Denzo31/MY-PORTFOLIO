'use client';

import React from 'react';
import { FiGithub, FiLinkedin, FiTwitter, FiMail } from 'react-icons/fi';
import Link from 'next/link';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white dark:bg-gray-900 shadow-inner transition-colors duration-300">
      <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <p className="text-gray-600 dark:text-gray-300">
              &copy; {currentYear} SHEMA. All rights reserved.
            </p>
          </div>

          <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-6">
            <div className="flex space-x-4">
              <Link 
                href="https://github.com/devderrickshema" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label="GitHub"
              >
                <FiGithub size={20} />
              </Link>
              <Link 
                href="https://www.linkedin.com/in/shederrick03" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label="LinkedIn"
              >
                <FiLinkedin size={20} />
              </Link>
              <Link 
                href="https://x.com/mrhardcore0" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label="Twitter"
              >
                <FiTwitter size={20} />
              </Link>
              <Link 
                href="mailto:shederrick03@gmail.com" 
                className="text-gray-600 dark:text-gray-300 hover:text-indigo-500 dark:hover:text-indigo-400 transition-colors duration-300"
                aria-label="Email"
              >
                <FiMail size={20} />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-8 text-center">
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Built with Next.js, React, TypeScript and Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
} 