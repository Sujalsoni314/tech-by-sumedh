import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import Typing from './_Typing';

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white dark:from-slate-900 to-gray-50 dark:to-slate-800">
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium mb-6">Featured • Web Design</div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 dark:text-slate-100">
            Build modern digital experiences with
            <div className="mt-4"><Typing /></div>
          </h1>
          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-xl">I design scalable, responsive websites with a focus on performance, accessibility and delightful interactions. I partner with startups and creators to convert ideas into polished products.</p>

          <div className="mt-8 flex gap-4">
            <Link to="/projects" className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:scale-105 transition">See Projects</Link>
            <Link to="/contact" className="inline-block px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">Hire Me</Link>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-gradient-to-tr from-indigo-50 to-pink-50 dark:from-transparent dark:to-transparent p-6 rounded-3xl shadow-2xl">
            <div className="w-full h-64 bg-gradient-to-tr from-indigo-200 to-pink-200 rounded-2xl flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-5xl font-bold text-indigo-600">S</div>
            </div>

            <div className="mt-6">
              <div className="text-sm text-slate-500">Hi, I’m</div>
              <div className="text-xl font-semibold">Sumedh Vasudev Sharma</div>
              <div className="text-sm text-slate-500 mt-1">Web Designer & Front-End Developer</div>

              <div className="mt-4">
                <p className="text-sm text-slate-600 dark:text-slate-300">I create brand-driven websites focused on clarity and conversions. My process combines research, rapid prototyping and polished implementation.</p>
              </div>

              <div className="mt-6 flex gap-3">
                <Link to="/projects" className="px-4 py-2 rounded-md bg-indigo-600 text-white">View Work</Link>
                <Link to="/contact" className="px-4 py-2 rounded-md border">Contact</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="max-w-6xl mx-auto px-6 pb-20">
        <h2 className="text-2xl font-semibold text-slate-900 dark:text-slate-100 mb-6">Selected Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">Portfolio Revamp — Personal Brand</h3>
            <div className="text-sm text-slate-500 mt-1">React • Tailwind • Framer Motion</div>
            <p className="text-slate-600 dark:text-slate-300 mt-4">A responsive portfolio with animated case studies and CMS-ready article section.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">E-Commerce UI Kit</h3>
            <div className="text-sm text-slate-500 mt-1">Design System • Figma</div>
            <p className="text-slate-600 dark:text-slate-300 mt-4">A modern UI kit for online stores focused on conversions and UX.</p>
          </div>
          <div className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow">
            <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">SaaS Landing — Conversion First</h3>
            <div className="text-sm text-slate-500 mt-1">A/B Testing • Copy</div>
            <p className="text-slate-600 dark:text-slate-300 mt-4">Landing page blueprint for SaaS brands with clear CTAs and analytics-ready sections.</p>
          </div>
        </div>
      </section>
    </main>
  );
}
