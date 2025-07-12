import Link from "next/link";
import { FaLinkedin, FaInstagram, FaGithub } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";

const links = [
  {
    href: "mailto:jgalmeida1993@gmail.com",
    label: "email",
    icon: <HiOutlineMail className="inline-block align-text-bottom mr-1" />,
  },
  {
    href: "https://github.com/jgalmeida93",
    label: "github",
    icon: <FaGithub className="inline-block align-text-bottom mr-1" />,
  },
  {
    href: "https://linkedin.com/in/jgalmeida93",
    label: "linkedin",
    icon: <FaLinkedin className="inline-block align-text-bottom mr-1" />,
  },
  {
    href: "https://instagram.com/jgalmeida93",
    label: "instagram",
    icon: <FaInstagram className="inline-block align-text-bottom mr-1" />,
  },
];

export function SocialLinks() {
  return (
    <nav className="w-full flex justify-center gap-8 pb-6">
      {links.map((link) => (
        <Link
          key={link.label}
          href={link.href}
          target="_blank"
          rel="noopener noreferrer"
          className="text-zinc-400 text-sm hover:text-white transition-colors flex items-center gap-1"
        >
          {link.icon}
          {link.label}
        </Link>
      ))}
    </nav>
  );
}
