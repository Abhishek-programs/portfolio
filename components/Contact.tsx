'use client';

import { useState } from 'react';
import { useToast } from '@/hooks/useToast';

import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';
import Link from 'next/link';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com/abhishek-programs',
    color: 'hover:text-gray-900',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://www.linkedin.com/in/i-abhishek-bhattarai/',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:i.abhishek.bhattarai@gmail.com',
    color: 'hover:text-primary-600',
  },
];

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { showToast } = useToast();

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const res = await fetch('/api/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });
      const data = await res.json();

      if (data.success) {
        showToast("Message sent! I'll get back to you soon.", 'success');

        setFormData({ name: '', email: '', message: '' });
      } else {
        showToast(
          data.error || 'Something went wrong. Please try again.',
          'error'
        );
      }
    } catch (err) {
      console.error('Contact form error:', err);

      showToast('Something went wrong. Please try again.', 'error');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <section id="contact" className="py-24 bg-yellow-pastel">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-800 mb-3 font-semibold leading-relaxed max-w-2xl mx-auto">
            Whether it's about developer tools, education products, or
            interesting engineering challenges — I'd love to connect.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 items-start">
          {/* Left Side - Text */}
          <div>
            <h2 className="text-4xl md:text-5xl font-black text-black mb-6 leading-tight">
              Excited
              <br />
              to know
              <br />
              more?
              <br />
              <span className="text-purple-bright">Let's talk!</span>
            </h2>
            <div className="space-y-4 mt-8">
              <p className="text-black text-sm font-semibold">
                📍 Kathmandu, Nepal
              </p>
              <p className="text-black text-sm font-semibold">
                📞 +977-9808459051
              </p>
              <p className="text-black text-sm font-semibold">
                ✉️ i.abhishek.bhattarai@gmail.com
              </p>
              <div className="flex gap-4 pt-4">
                {socialLinks.map(social => {
                  const Icon = social.icon;
                  return (
                    <Link
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-purple-bright transition-colors"
                      aria-label={social.name}
                      title={social.name}
                    >
                      <Icon size={24} title={social.name} />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-yellow-pastel rounded-lg border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label
                  htmlFor="name"
                  className="block text-black font-semibold mb-2 text-sm"
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Name"
                  required
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-bright bg-white"
                  title="Enter your name"
                  aria-label="Name"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-black font-semibold mb-2 text-sm"
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-bright bg-white"
                  title="Enter your email address"
                  aria-label="Email"
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-black font-semibold mb-2 text-sm"
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="Message"
                  required
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-bright resize-none bg-white"
                  title="Enter your message"
                  aria-label="Message"
                ></textarea>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-black border-4 border-black text-white font-black py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] disabled:opacity-50 disabled:cursor-not-allowed"
                title="Send message"
                aria-label="Send message"
              >
                {isSubmitting ? 'Sending...' : 'Send'}
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
