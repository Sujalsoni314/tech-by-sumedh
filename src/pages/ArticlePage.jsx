import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { ARTICLES } from '../articles-data';

export default function ArticlePage() {
  const { id } = useParams();
  const article = ARTICLES.find(a => a.id === id) || ARTICLES[0];
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{article.title}</h1>
        <div className="text-sm text-slate-500 mt-2">{article.date} • {article.readTime}</div>
        <article className="mt-6 prose dark:prose-invert text-slate-700 dark:text-slate-300">{article.content}</article>
        <div className="mt-8"><Link to="/articles" className="px-4 py-2 rounded-md border">Back to Articles</Link></div>
      </section>
    </main>
  );
}
