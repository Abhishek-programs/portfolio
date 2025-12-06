import { FaGithub, FaLinkedin, FaTwitter, FaEnvelope } from 'react-icons/fa';

const socialLinks = [
  {
    name: 'GitHub',
    icon: FaGithub,
    url: 'https://github.com',
    color: 'hover:text-gray-900',
  },
  {
    name: 'LinkedIn',
    icon: FaLinkedin,
    url: 'https://linkedin.com',
    color: 'hover:text-blue-600',
  },
  {
    name: 'Email',
    icon: FaEnvelope,
    url: 'mailto:i.abhishek.bhattarai@gmail.com',
    color: 'hover:text-primary-600',
  },
];

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-white">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Intro */}
        <div className="text-center mb-12">
          <p className="text-lg text-gray-700 mb-2 font-semibold">
            Excited to connect — whether it's about projects, collaborations, or
            tech discussions.
          </p>
          <p className="text-base text-gray-600 font-normal">
            Reach out below or through any of the channels listed.
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
                    <a
                      key={social.name}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-black hover:text-purple-bright transition-colors"
                      aria-label={social.name}
                    >
                      <Icon size={24} />
                    </a>
                  );
                })}
              </div>
            </div>
          </div>

          {/* Right Side - Contact Form */}
          <div className="bg-yellow-pastel rounded-lg border-8 border-black p-8 shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]">
            <form className="space-y-6">
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
                  placeholder="Name"
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-bright font-normal bg-white"
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
                  placeholder="Email Address"
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-bright font-normal bg-white"
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
                  placeholder="Message"
                  className="w-full px-4 py-3 border-2 border-black rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-bright font-normal resize-none bg-white"
                ></textarea>
              </div>
              <button
                type="submit"
                className="w-full bg-black border-4 border-black text-white font-black py-3 rounded-lg hover:bg-gray-800 transition-colors shadow-[4px_4px_0px_0px_rgba(0,0,0,1)] hover:shadow-[6px_6px_0px_0px_rgba(0,0,0,1)]"
              >
                Send
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
