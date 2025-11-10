import React from 'react';
import { Link } from 'react-router-dom';
import { PROJECTS } from '../projects-data';

export default function Projects() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map(p => (
            <article key={p.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
              <div className="text-sm text-slate-500 mt-1">{p.tags.join(' • ')}</div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{p.summary}</p>
              <div className="mt-4 flex justify-between items-center">
                <Link to={`/projects/${p.id}`} className="text-indigo-600">View Case</Link>
                <a href="#" className="text-sm px-3 py-1 rounded border">Demo</a>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
