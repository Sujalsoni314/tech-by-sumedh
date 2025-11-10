import React, { useEffect, useState } from 'react';

const items = ['Tech By Sumedh', 'Web Designer', 'Software Developer', 'UI/UX Enthusiast', 'Creative Coder'];

export default function Typing() {
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
  }, [sub, forward, i]);

  return <span className="text-4xl md:text-5xl font-extrabold leading-tight bg-clip-text text-transparent bg-gradient-to-r from-indigo-600 to-pink-500">{sub}<span className="ml-1 inline-block animate-pulse">|</span></span>;
}
