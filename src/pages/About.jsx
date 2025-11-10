import React from 'react';
import { PROFILE } from '../data';

export default function About() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-indigo-600 mb-4">About Me</h2>
        <p className="text-slate-700 dark:text-slate-300 leading-relaxed">I’m <strong>{PROFILE.name}</strong>, a Web Designer and Front-End Developer specialising in React, Tailwind and accessible interfaces. I love building products that are fast, maintainable and delightful to use. My process includes discovery, wireframing, design systems and front-end implementation.</p>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
            <h4 className="font-semibold mb-3">Core Skills</h4>
            <ul className="list-disc pl-5 text-slate-700 dark:text-slate-300">
              <li>React & Component-Driven Design</li>
              <li>Tailwind CSS & Design Systems</li>
              <li>UI/UX & Prototyping (Figma)</li>
              <li>Performance & Accessibility</li>
            </ul>
          </div>

          <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
            <h4 className="font-semibold mb-3">Education & Certifications</h4>
            <div className="text-slate-700 dark:text-slate-300">
              <div className="font-medium">Bachelor of Computer Applications (BCA)</div>
              <div className="text-sm mt-1">Relevant: Web Technologies, UI Design, Software Development</div>
              <ul className="mt-3 list-disc pl-5">
                <li>Google UX Design Certificate</li>
                <li>Responsive Web Development — freeCodeCamp</li>
                <li>Web Design Fundamentals — Coursera</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
