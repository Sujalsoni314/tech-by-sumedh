import React from 'react';
import { Link } from 'react-router-dom';
import { ARTICLES } from '../articles-data';

export default function Articles() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">Articles</h2>
        <div className="space-y-6">
          {ARTICLES.map(a => (
            <article key={a.id} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{a.title}</h3>
              <div className="text-sm text-slate-500 mt-1">{a.date} • {a.readTime}</div>
              <p className="mt-3 text-slate-700 dark:text-slate-300">{a.excerpt}</p>
              <div className="mt-4"><Link to={`/articles/${a.id}`} className="text-indigo-600">Read full article</Link></div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
