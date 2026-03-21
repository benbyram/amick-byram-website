import { Link } from "react-router";

const base =
  "inline-flex items-center justify-center border-2 border-[#262626] px-8 py-3 rounded hover:bg-[#262626] hover:text-[#ebece4] transition-all duration-300";

export function ContactLinkButton({ className = "" }: { className?: string }) {
  return (
    <Link to="/contact" className={[base, className].filter(Boolean).join(" ")}>
      <span className="font-['Playfair_Display',serif] font-medium text-lg">
        CONTACT
      </span>
    </Link>
  );
}
