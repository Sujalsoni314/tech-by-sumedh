import React from 'react';
import { Link } from 'react-router-dom';
import { PROFILE } from '../data';

export default function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-slate-900 dark:text-slate-100">Tech By Sumedh</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">Indore, Madhya Pradesh, India</div>
        </div>
        <div className="flex gap-4 text-sm text-slate-700 dark:text-slate-300">
          <Link to="/projects">Projects</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/contact">Contact</Link>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} Tech By Sumedh. All rights reserved.</div>
      </div>
    </footer>
  );
}
