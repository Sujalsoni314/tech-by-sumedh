import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { PROJECTS } from '../projects-data';

export default function ProjectCase() {
  const { id } = useParams();
  const project = PROJECTS.find(p => p.id === id) || PROJECTS[0];
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{project.title}</h2>
        <div className="text-sm text-slate-500 mt-2">{project.tags.join(' • ')}</div>
        <p className="mt-6 text-slate-700 dark:text-slate-300">{project.details}</p>
        <div className="mt-8 flex gap-3">
          <Link to="/projects" className="px-4 py-2 rounded-md border">Back to Projects</Link>
          <a href="#" className="px-4 py-2 rounded-md bg-indigo-600 text-white">Live Demo</a>
        </div>
      </section>
    </main>
  );
}
