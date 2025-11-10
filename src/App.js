import React, { useEffect, useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const PROFILE = {
  name: 'Sumedh Vasudev Sharma',
  brand: 'Tech By Sumedh',
  email: 'Techbysumedh314@gmail.com',
  phone: '7692897318',
  location: 'Indore, Madhya Pradesh, India',
};

const THEMES = { LIGHT: 'light', DARK: 'dark' };

const PROJECTS = [
  {
    id: 'proj1',
    title: 'Portfolio Revamp — Personal Brand',
    tags: ['React', 'Tailwind', 'Framer Motion'],
    summary: 'A fully responsive personal portfolio with animated case studies, CMS-ready article section and performance optimisations.',
    details:
      'Designed an accessible, fast-loading portfolio with animated micro-interactions, lazy-loaded images and simple CMS hooks for editing projects without developer help.'
  },
  {
    id: 'proj2',
    title: 'E-Commerce UI Kit',
    tags: ['Design System', 'Figma', 'HTML/CSS'],
    summary: 'A modern UI kit for online stores focused on conversions and simple checkout flows.',
    details:
      'Includes product grid, faceted search mock, optimized checkout and microcopy patterns proven to increase conversion.'
  },
  {
    id: 'proj3',
    title: 'SaaS Landing — Conversion First',
    tags: ['A/B Testing', 'Copywriting', 'Performance'],
    summary: 'Landing page blueprint for SaaS brands with clear CTAs and analytics-ready sections.',
    details:
      'Focused on hero testing, trust signals, pricing comparison and a sticky CTA; integrated Lighthouse score improvements.'
  },
  {
    id: 'proj4',
    title: 'Creative Studio Landing',
    tags: ['Animation', 'SVG', 'Accessibility'],
    summary: 'High-impact landing with subtle animations and brand storytelling.',
    details:
      'Story-driven layout, animated SVG hero, and accessible keyboard-first interactions.'
  },
  {
    id: 'proj5',
    title: 'NGO Website — Low Bandwidth Optimised',
    tags: ['Performance', 'WordPress'],
    summary: 'A lightweight WordPress theme tailored for low-bandwidth audiences.',
    details:
      'Optimised images, server-side caching recommendations and an easy donation flow.'
  },
  {
    id: 'proj6',
    title: 'Analytics Dashboard UI',
    tags: ['React', 'Charts', 'UX'],
    summary: 'Dashboard designs for data-heavy apps with clear hierarchy and visual clarity.',
    details:
      'Data-first UI patterns, accessible legend and responsive charts.'
  }
];

const ARTICLES = [
  {
    id: 'art1',
    title: 'The Art of Minimalist Web Design — Why Less Wins',
    date: 'April 10, 2024',
    readTime: '6 min',
    excerpt:
      'Minimalism is not empty space — it is purposeful design. Learn how typography, spacing and clarity convert visitors into users.',
    content:
      `Minimalist web design focuses on removing the non-essential. It emphasizes hierarchy, readable typography, clear CTAs and performance. In practice, this means choosing a restrained palette, leveraging whitespace, and using micro-interactions where they matter. The result is higher comprehension, faster load times, and a better brand impression.`
  },
  {
    id: 'art2',
    title: 'Responsive UX Patterns for 2025',
    date: 'July 21, 2024',
    readTime: '8 min',
    excerpt: 'Responsive design has matured—this article covers modern patterns that prioritize context and performance.',
    content:
      `Modern responsive UX goes beyond breakpoints. It includes content strategy for different contexts, conditional loading, and touch-first interactions. We discuss component-driven layouts, container queries, and performance budgets to keep experiences fast on real devices.`
  },
  {
    id: 'art3',
    title: 'When to Choose WordPress vs Custom React',
    date: 'September 05, 2024',
    readTime: '7 min',
    excerpt: 'A practical guide to choosing between a CMS or a custom front-end depending on business needs and scale.',
    content:
      `WordPress remains ideal for content-heavy sites where editors need control. Custom React front-ends shine when interactivity, performance and bespoke flows matter. This article outlines decision criteria, cost considerations and hybrid approaches (headless CMS).`
  }
];

function useTheme() {
  const [theme, setTheme] = useState(() => {
    try {
      return localStorage.getItem('theme') || THEMES.LIGHT;
    } catch (e) {
      return THEMES.LIGHT;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === THEMES.DARK);
    try {
      localStorage.setItem('theme', theme);
    } catch (e) {}
  }, [theme]);

  return [theme, setTheme];
}

function TypingLoop({ items }) {
  const [i, setI] = useState(0);
  const [sub, setSub] = useState('');
  const [forward, setForward] = useState(true);

  useEffect(() => {
    const current = items[i % items.length];
    let timeout;

    if (forward) {
      if (sub.length < current.length) {
        timeout = setTimeout(() => setSub(current.slice(0, sub.length + 1)), 90);
      } else {
        timeout = setTimeout(() => setForward(false), 900);
      }
    } else {
      if (sub.length > 0) {
        timeout = setTimeout(() => setSub(current.slice(0, sub.length - 1)), 50);
      } else {
        setForward(true);
        setI((prev) => prev + 1);
      }
    }

    return () => clearTimeout(timeout);
  }, [sub, forward, i, items]);

  return (
    <span className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">
      {sub}
      <span className="ml-1 inline-block animate-pulse">|</span>
    </span>
  );
}

function Navbar({ theme, setTheme }) {
  return (
    <header className="bg-white dark:bg-slate-900 shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-pink-500 flex items-center justify-center text-white font-bold">S</div>
          <div>
            <div className="text-sm font-semibold text-slate-900 dark:text-slate-100">{PROFILE.brand}</div>
            <div className="text-xs text-slate-500 dark:text-slate-400">{PROFILE.name}</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-6 text-sm text-slate-700 dark:text-slate-200">
          <Link to="/" className="hover:text-indigo-600">Home</Link>
          <Link to="/about" className="hover:text-indigo-600">About</Link>
          <Link to="/projects" className="hover:text-indigo-600">Projects</Link>
          <Link to="/articles" className="hover:text-indigo-600">Articles</Link>
          <Link to="/contact" className="hover:text-indigo-600">Contact</Link>
          <button
            onClick={() => setTheme((t) => (t === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT))}
            className="px-3 py-1 rounded-md border">
            Theme
          </button>
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
                <button onClick={() => setTheme((t) => (t === THEMES.LIGHT ? THEMES.DARK : THEMES.LIGHT))} className="mt-2 border rounded px-3 py-1">Theme</button>
              </div>
            </div>
          </details>
        </div>
      </div>
    </header>
  );
}

function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-white dark:from-slate-900 to-gray-50 dark:to-slate-800">
      <section className="max-w-6xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-12 items-center">
        <div>
          <div className="inline-flex items-center gap-3 px-3 py-1 rounded-full bg-indigo-100 dark:bg-indigo-900/30 text-indigo-700 dark:text-indigo-300 font-medium mb-6">Featured • Web Design</div>
          <h1 className="text-4xl md:text-6xl font-extrabold leading-tight text-slate-900 dark:text-slate-100">
            Build modern digital experiences with
            <div className="mt-4"><TypingLoop items={[PROFILE.brand, 'Web Designer', 'Software Developer', 'UI/UX Enthusiast', 'Creative Coder']} /></div>
          </h1>
          <p className="mt-6 text-slate-600 dark:text-slate-300 max-w-xl">I design scalable, responsive websites with a focus on performance, accessibility and delightful interactions. I partner with startups and creators to convert ideas into polished products.</p>

          <div className="mt-8 flex gap-4">
            <Link to="/projects" className="inline-block px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold shadow hover:scale-105 transition">See Projects</Link>
            <Link to="/contact" className="inline-block px-6 py-3 rounded-lg border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200">Hire Me</Link>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-4 max-w-md">
            <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow"> 
              <div className="text-sm text-slate-500">Location</div>
              <div className="font-medium mt-1">{PROFILE.location}</div>
            </div>
            <div className="p-4 bg-white dark:bg-slate-900 rounded-2xl shadow">
              <div className="text-sm text-slate-500">Contact</div>
              <div className="font-medium mt-1">{PROFILE.phone} • {PROFILE.email}</div>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="w-full max-w-md bg-gradient-to-tr from-indigo-50 to-pink-50 dark:from-transparent dark:to-transparent p-6 rounded-3xl shadow-2xl">
            <div className="w-full h-64 bg-gradient-to-tr from-indigo-200 to-pink-200 rounded-2xl flex items-center justify-center">
              <div className="w-40 h-40 rounded-full bg-white dark:bg-slate-700 flex items-center justify-center text-5xl font-bold text-indigo-600">S</div>
            </div>

            <div className="mt-6">
              <div className="text-sm text-slate-500">Hi, I’m</div>
              <div className="text-xl font-semibold">{PROFILE.name}</div>
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
          {PROJECTS.slice(0, 3).map((p) => (
            <motion.article key={p.id} whileHover={{ y: -6 }} className="bg-white dark:bg-slate-900 rounded-2xl p-6 shadow">
              <div className="flex items-center justify-between">
                <div>
                  <h3 className="font-semibold text-lg text-slate-900 dark:text-slate-100">{p.title}</h3>
                  <div className="text-sm text-slate-500 mt-1">{p.tags.join(' • ')}</div>
                </div>
                <Link to={`/projects/${p.id}`} className="text-indigo-600">Open</Link>
              </div>
              <p className="text-slate-600 dark:text-slate-300 mt-4">{p.summary}</p>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

function About() {
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

        <div className="mt-10">
          <h4 className="font-semibold mb-3">Process</h4>
          <ol className="list-decimal pl-5 text-slate-700 dark:text-slate-300">
            <li>Discovery & Research</li>
            <li>Wireframes & Prototype</li>
            <li>Design System & Visual Design</li>
            <li>Development, Testing & Launch</li>
          </ol>
        </div>
      </section>
    </main>
  );
}

function ProjectsList() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <section className="max-w-6xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">Projects</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {PROJECTS.map((p) => (
            <motion.div key={p.id} whileHover={{ scale: 1.03 }} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
              <h3 className="text-xl font-semibold text-slate-900 dark:text-slate-100">{p.title}</h3>
              <div className="text-sm text-slate-500 mt-1">{p.tags.join(' • ')}</div>
              <p className="mt-4 text-slate-600 dark:text-slate-300">{p.summary}</p>
              <div className="mt-4 flex justify-between items-center">
                <Link to={`/projects/${p.id}`} className="text-indigo-600">View Case</Link>
                <button className="text-sm px-3 py-1 rounded border">Demo</button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </main>
  );
}

function ProjectCase({ id }) {
  const project = PROJECTS.find((p) => p.id === id) || PROJECTS[0];
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

function ArticlesList() {
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <section className="max-w-4xl mx-auto px-6 py-20">
        <h2 className="text-3xl font-bold text-indigo-600 mb-6">Articles</h2>
        <div className="space-y-6">
          {ARTICLES.map((a) => (
            <motion.article key={a.id} whileHover={{ y: -4 }} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
              <h3 className="text-2xl font-semibold text-slate-900 dark:text-slate-100">{a.title}</h3>
              <div className="text-sm text-slate-500 mt-1">{a.date} • {a.readTime}</div>
              <p className="mt-3 text-slate-700 dark:text-slate-300">{a.excerpt}</p>
              <div className="mt-4">
                <Link to={`/articles/${a.id}`} className="text-indigo-600">Read full article</Link>
              </div>
            </motion.article>
          ))}
        </div>
      </section>
    </main>
  );
}

function ArticlePage({ id }) {
  const article = ARTICLES.find((a) => a.id === id) || ARTICLES[0];
  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <section className="max-w-3xl mx-auto px-6 py-20">
        <h1 className="text-3xl font-bold text-slate-900 dark:text-slate-100">{article.title}</h1>
        <div className="text-sm text-slate-500 mt-2">{article.date} • {article.readTime}</div>
        <article className="mt-6 prose dark:prose-invert text-slate-700 dark:text-slate-300">{article.content}</article>
        <div className="mt-8">
          <Link to="/articles" className="px-4 py-2 rounded-md border">Back to Articles</Link>
        </div>
      </section>
    </main>
  );
}

function ContactPage() {
  const FORM_ENDPOINT = ''; // If you have a Formspree / Getform endpoint, paste it here.
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      email: form.email.value,
      message: form.message.value,
      phone: form.phone.value,
    };

    if (FORM_ENDPOINT) {
      try {
        await fetch(FORM_ENDPOINT, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
        });
        navigate('/contact?status=success');
      } catch (err) {
        navigate('/contact?status=error');
      }
    } else {
      const subject = encodeURIComponent('Website contact from ' + data.name);
      const body = encodeURIComponent(`Name: ${data.name}
Phone: ${data.phone}
Email: ${data.email}

${data.message}`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <section className="max-w-4xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold text-indigo-600">Get in touch</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">I’m available for freelance projects and collaborations. You can also reach me directly:</p>
          <div className="mt-6 space-y-3 text-slate-700 dark:text-slate-300">
            <div><strong>Email:</strong> <a className="text-indigo-600" href={`mailto:${PROFILE.email}`}>{PROFILE.email}</a></div>
            <div><strong>Phone:</strong> <a className="text-indigo-600" href={`tel:${PROFILE.phone}`}>{PROFILE.phone}</a></div>
            <div><strong>Address:</strong> {PROFILE.location}</div>
          </div>

          <div className="mt-6">
            <h4 className="font-semibold">Working hours</h4>
            <div className="text-sm text-slate-500">Mon — Sat • 10:00 — 19:00</div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
          <div className="grid gap-3">
            <input name="name" required placeholder="Your name" className="w-full border p-3 rounded-md bg-transparent" />
            <input name="phone" placeholder="Phone (optional)" className="w-full border p-3 rounded-md bg-transparent" />
            <input name="email" type="email" required placeholder="Your email" className="w-full border p-3 rounded-md bg-transparent" />
            <textarea name="message" required placeholder="Message" className="w-full border p-3 rounded-md bg-transparent" rows={6} />
            <div className="flex items-center justify-between">
              <button type="submit" className="px-5 py-2 rounded-md bg-indigo-600 text-white">Send Message</button>
              <div className="text-sm text-slate-500">You will be redirected to your mail client if no endpoint is configured.</div>
            </div>
          </div>
        </form>
      </section>
    </main>
  );
}

function Footer() {
  return (
    <footer className="bg-white dark:bg-slate-900 border-t">
      <div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <div className="font-semibold text-slate-900 dark:text-slate-100">{PROFILE.brand}</div>
          <div className="text-sm text-slate-500 dark:text-slate-400">{PROFILE.location}</div>
        </div>
        <div className="flex gap-4 text-sm text-slate-700 dark:text-slate-300">
          <a href="/projects">Projects</a>
          <a href="/articles">Articles</a>
          <a href="/contact">Contact</a>
        </div>
        <div className="text-sm text-slate-500 dark:text-slate-400">© {new Date().getFullYear()} {PROFILE.brand}. All rights reserved.</div>
      </div>
    </footer>
  );
}

export default function App() {
  const [theme, setTheme] = useTheme();

  return (
    <Router>
      <div className="min-h-screen bg-white dark:bg-slate-900 transition-colors">
        <Navbar theme={theme} setTheme={setTheme} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<ProjectsList />} />
          <Route path="/projects/:id" element={<ProjectRoute />} />
          <Route path="/articles" element={<ArticlesList />} />
          <Route path="/articles/:id" element={<ArticleRoute />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

function ProjectRoute() {
  const { pathname } = window.location;
  const id = pathname.split('/').pop();
  return <ProjectCase id={id} />;
}

function ArticleRoute() {
  const { pathname } = window.location;
  const id = pathname.split('/').pop();
  return <ArticlePage id={id} />;
}
