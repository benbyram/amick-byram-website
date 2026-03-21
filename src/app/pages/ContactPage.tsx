import { motion } from "motion/react";
import { useState } from "react";
import { Link } from "react-router";
import { ArrowLeft } from "lucide-react";
import { SiteHeader } from "../components/SiteHeader";
import { Input } from "../components/ui/input";
import { Textarea } from "../components/ui/textarea";
import { Label } from "../components/ui/label";
import { CONTACT_EMAIL } from "../../config/contact";

function isValidEmail(value: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim());
}

export default function ContactPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState<string | null>(null);

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError(null);

    const n = name.trim();
    const em = email.trim();
    const msg = message.trim();

    if (n.length < 2) {
      setError("Please enter your name.");
      return;
    }
    if (!isValidEmail(em)) {
      setError("Please enter a valid email address.");
      return;
    }
    if (msg.length < 10) {
      setError("Please write a bit more in your message (at least 10 characters).");
      return;
    }

    const subject = encodeURIComponent(`Website inquiry from ${n}`);
    const body = encodeURIComponent(
      `From: ${n}\nReply-To: ${em}\n\n${msg}`,
    );
    const mailto = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    window.location.href = mailto;
  }

  const fieldClass =
    "border-[#262626]/25 bg-white/90 text-[#262626] text-base md:text-[15px] font-['Playfair_Display',serif] rounded-md shadow-sm placeholder:text-[#5a5a5a]/70 focus-visible:border-[#ef7452] focus-visible:ring-[#ef7452]/30";

  const labelClass =
    "font-['Playfair_Display',serif] font-medium text-[#262626] text-sm";

  return (
    <div className="min-h-screen bg-[#ebece4]">
      <SiteHeader />

      <main className="mx-auto max-w-2xl px-6 py-12 md:py-20 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, ease: "easeOut" }}
        >
          <Link
            to="/"
            className="inline-flex items-center gap-2 font-['Playfair_Display',serif] font-medium text-[#5a5a5a] hover:text-[#ef7452] transition-colors mb-10"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to home
          </Link>

          <h1 className="font-['Playfair_Display',serif] font-medium text-[#262626] text-4xl md:text-5xl leading-tight mb-3">
            Get in <span className="text-[#ef7452]">touch</span>
          </h1>
          <p className="font-['Playfair_Display',serif] font-medium text-[#5a5a5a] text-lg md:text-xl mb-10 max-w-xl">
            Send a message and your email app will open with everything filled in—ready to send.
          </p>

          <form
            onSubmit={handleSubmit}
            className="space-y-8 rounded-2xl border border-[#262626]/15 bg-white/40 p-8 md:p-10 shadow-xl backdrop-blur-sm"
          >
            <div className="space-y-2">
              <Label htmlFor="contact-name" className={labelClass}>
                Name
              </Label>
              <Input
                id="contact-name"
                name="name"
                type="text"
                autoComplete="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className={fieldClass}
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-email" className={labelClass}>
                Your email
              </Label>
              <Input
                id="contact-email"
                name="email"
                type="email"
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className={fieldClass}
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="contact-message" className={labelClass}>
                Message
              </Label>
              <Textarea
                id="contact-message"
                name="message"
                rows={6}
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className={`${fieldClass} min-h-[160px] resize-y`}
                placeholder="Tell me a bit about your project or question…"
              />
            </div>

            {error ? (
              <p className="font-['Playfair_Display',serif] text-sm text-[#b42318]">
                {error}
              </p>
            ) : null}

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
              <button
                type="submit"
                className="border-2 border-[#262626] px-8 py-3 rounded hover:bg-[#262626] hover:text-[#ebece4] transition-all duration-300 font-['Playfair_Display',serif] font-medium text-lg w-full sm:w-auto"
              >
                Send message
              </button>
            </div>
          </form>
        </motion.div>
      </main>
    </div>
  );
}
