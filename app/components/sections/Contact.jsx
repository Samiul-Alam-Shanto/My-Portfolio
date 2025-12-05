"use client";

import { motion } from "framer-motion";
import { Send, Mail, MapPin, CheckCircle, Loader2 } from "lucide-react";
import { useState } from "react";
import { sendEmail } from "@/app/actions";

export default function Contact() {
  const [formState, setFormState] = useState("idle");
  const [focusedField, setFocusedField] = useState(null);

  async function handleSubmit(e) {
    e.preventDefault();
    setFormState("submitting");

    const formData = new FormData(e.target);

    // Call the Server Action directly
    const result = await sendEmail(formData);

    if (result.success) {
      setFormState("success");
      e.target.reset();
    } else {
      console.error(result.error);
      setFormState("error");
    }
  }

  return (
    <section
      id="contact"
      className="relative py-32 px-6 bg-transparent overflow-hidden"
    >
      {/* Background Decor */}
      <div
        className="absolute inset-0 opacity-[0.05]"
        style={{
          backgroundImage:
            "linear-gradient(#333 1px, transparent 1px), linear-gradient(90deg, #333 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      {/* Glowing Orb */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto relative z-10 grid md:grid-cols-2 gap-16 items-center">
        {/* Left: Text & Info */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <span className="text-blue-500 font-mono tracking-widest uppercase text-sm">
            Get in touch
          </span>
          <h2 className="text-5xl md:text-7xl font-bold text-white mt-4 mb-6 font-sans">
            Let&apos;s build <br /> the{" "}
            <span className="text-neutral-600">future.</span>
          </h2>
          <p className="text-xl text-neutral-400 max-w-md mb-12">
            Have an idea? I am currently available for freelance projects and
            available for hire
          </p>

          <div className="space-y-6">
            <div className="flex items-center gap-4 text-neutral-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <Mail size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">
                  Email
                </p>
                <a href="mailto:samiulalam220@gmail.com" className="font-mono">
                  samiulalam220@gmail.com
                </a>
              </div>
            </div>

            <div className="flex items-center gap-4 text-neutral-300">
              <div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center border border-white/10">
                <MapPin size={20} />
              </div>
              <div>
                <p className="text-xs text-neutral-500 uppercase tracking-wider">
                  Location
                </p>
                <p className="font-mono">Mymensingh, Bangladesh</p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Right:  Form */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="bg-neutral-900/50 backdrop-blur-xl p-8 md:p-10 rounded-3xl border border-white/10 shadow-2xl relative"
        >
          {/* Success Overlay */}
          {formState === "success" ? (
            <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-neutral-900/95 rounded-3xl text-center p-6">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                className="w-16 h-16 bg-green-500/20 rounded-full flex items-center justify-center mb-4"
              >
                <CheckCircle className="text-green-500" size={32} />
              </motion.div>
              <h3 className="text-2xl font-bold text-white mb-2">
                Message Sent!
              </h3>
              <p className="text-neutral-400">
                I&apos;ll get back to you as soon as possible.
              </p>
              <button
                onClick={() => setFormState("idle")}
                className="mt-6 px-6 py-2 bg-white/10 hover:bg-white/20 rounded-full text-sm font-medium transition-colors"
              >
                Send another
              </button>
            </div>
          ) : null}

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <label className="block text-xs font-mono text-neutral-500 uppercase mb-2">
                Name
              </label>
              <input
                type="text"
                name="name"
                required
                className="w-full bg-black/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="Your Name"
                onFocus={() => setFocusedField("name")}
                onBlur={() => setFocusedField(null)}
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: focusedField === "name" ? "100%" : "0%" }}
                className="absolute bottom-0 left-0 h-px bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
            </div>

            <div className="relative">
              <label className="block text-xs font-mono text-neutral-500 uppercase mb-2">
                Email
              </label>
              <input
                type="email"
                name="email"
                required
                className="w-full bg-black/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                placeholder="Your Email"
                onFocus={() => setFocusedField("email")}
                onBlur={() => setFocusedField(null)}
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: focusedField === "email" ? "100%" : "0%" }}
                className="absolute bottom-0 left-0 h-px bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
            </div>

            <div className="relative">
              <label className="block text-xs font-mono text-neutral-500 uppercase mb-2">
                Message
              </label>
              <textarea
                name="message"
                required
                rows={4}
                className="w-full bg-black/50 border border-neutral-800 rounded-lg px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                placeholder="Tell me about your thought..."
                onFocus={() => setFocusedField("message")}
                onBlur={() => setFocusedField(null)}
              />
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: focusedField === "message" ? "100%" : "0%" }}
                className="absolute bottom-0 left-0 h-px bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.5)]"
              />
            </div>

            <button
              type="submit"
              disabled={formState === "submitting"}
              className="w-full py-4 bg-white text-black font-bold rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 mt-4 group disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {formState === "submitting" ? (
                <>
                  Sending... <Loader2 className="animate-spin" size={18} />
                </>
              ) : (
                <>
                  Send Message{" "}
                  <Send
                    size={18}
                    className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                  />
                </>
              )}
            </button>

            {formState === "error" && (
              <p className="text-red-400 text-sm text-center mt-2">
                Something went wrong. Please check your internet or try again
                later.
              </p>
            )}
          </form>
        </motion.div>
      </div>
    </section>
  );
}
