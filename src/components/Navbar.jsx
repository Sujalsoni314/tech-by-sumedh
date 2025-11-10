import React from 'react';
import { Link } from 'react-router-dom';

export default function Navbar({ theme, setTheme }) {
  return (
    <header className="bg-white dark:bg-slate-900 shadow sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">S</div>
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">Tech By Sumedh</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">Sumedh Vasudev Sharma</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-200">
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/projects">Projects</Link>
          <Link to="/articles">Articles</Link>
          <Link to="/contact">Contact</Link>
          <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="px-3 py-1 rounded-md border">Theme</button>
        </nav>

        <div className="md:hidden">
          <details className="relative">
            <summary className="list-none px-3 py-2 rounded-md bg-gray-100 dark:bg-slate-700">Menu</summary>
            <div className="absolute right-0 mt-2 w-44 rounded-md bg-white dark:bg-slate-800 shadow-lg p-3">
              <div className="flex flex-col gap-2">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Projects</Link>
                <Link to="/articles">Articles</Link>
                <Link to="/contact">Contact</Link>
                <button onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')} className="mt-2 border rounded px-3 py-1">Theme</button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}
