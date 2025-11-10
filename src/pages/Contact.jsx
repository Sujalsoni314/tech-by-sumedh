import React from 'react';
import { PROFILE } from '../data';

export default function Contact() {
  const FORM_ENDPOINT = ''; // Add your form endpoint if you have one

  const handleSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const data = {
      name: form.name.value,
      phone: form.phone.value,
      email: form.email.value,
      message: form.message.value
    };
    if (FORM_ENDPOINT) {
      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
      }).then(() => alert('Submitted')).catch(() => alert('Error'));
    } else {
      const subject = encodeURIComponent('Contact from ' + data.name);
      const body = encodeURIComponent(`Name: ${data.name}\nPhone: ${data.phone}\nEmail: ${data.email}\n\n${data.message}`);
      window.location.href = `mailto:${PROFILE.email}?subject=${subject}&body=${body}`;
    }
  };

  return (
    <main className="min-h-screen bg-white dark:bg-slate-900">
      <section className="max-w-4xl mx-auto px-6 py-20 grid md:grid-cols-2 gap-10">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-2xl shadow">
          <h2 className="text-2xl font-bold text-indigo-600">Get in touch</h2>
          <p className="mt-2 text-slate-700 dark:text-slate-300">I’m available for freelance projects. You can also reach me directly:</p>
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
            <input name="phone" placeholder="Phone (optional)" className="w-full border p-3 rounded-md bg-transparent" defaultValue={PROFILE.phone} />
            <input name="email" type="email" required placeholder="Your email" className="w-full border p-3 rounded-md bg-transparent" defaultValue={PROFILE.email} />
            <textarea name="message" required placeholder="Message" className="w-full border p-3 rounded-md bg-transparent" rows="6"></textarea>
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
